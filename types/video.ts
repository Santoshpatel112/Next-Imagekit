export default interface IVideo {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}