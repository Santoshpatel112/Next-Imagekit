import mongoose from "mongoose";

const MONGO_URl = process.env.MONGO_URL as string;
if (!MONGO_URl)
  throw new Error("MONGO_URL is not defined in environment variables");

let cashed = global.mongoose;
if (!cashed) {
  cashed = { cnn: null, promise: null };
  global.mongoose = cashed = { cnn: null, promise: null };
}
export async function connectDb() {
  const opt = {
    bufferCommands: true,
    maxPoolSize: 10,
    wtimeoutMS: 2500,
  };
  if (cashed.cnn) {
    return cashed.cnn;
  }
  if (!cashed.promise) {
    cashed.promise = mongoose
      .connect(MONGO_URl, opt)
      .then((mongoose) => mongoose.connection);
  }
  try {
    cashed.cnn = await cashed.promise;
    return cashed.cnn;
  } catch (error) {
    cashed.promise = null;
    throw error;
  }
}
