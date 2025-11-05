import Ivedio from "../types/video";
export type videoformdata=Omit<Ivedio,"id"|"createdAt"|"updatedAt"|"userId">;

type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: any;
};

class ApiClient{
    private async fetch<T>(
        endpoint: string,
        options: FetchOptions = {}
    ):Promise<T>{
        const {method = "GET", headers = {}, body} = options;

        const response = await fetch(`/api/${endpoint}`, {
            method,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            body: body ? JSON.stringify(body) : undefined,
        });

        if(!response.ok){
            throw new Error(`API request failed with status ${response.status}`);
        }
        return response.json();
    }

    async getVideo(){
        return this.fetch("/video");
    }

    async createVideo(videoData: videoformdata){
        return this.fetch("/videos",{
            method:"POST",
            body:videoData,
        });
    }
}

// singleton process 
export const apiClient=new ApiClient();
