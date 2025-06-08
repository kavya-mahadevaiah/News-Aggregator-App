import { NewsApiResponse } from "./Types";
import { BaseURL } from "./constants";
import { ApiResponse, getRequest } from "./requests";

const apiKey = import.meta.env.VITE_API_KEY

export const getTopHeadlines = async (category?: string, pageNo?: number): Promise<ApiResponse<NewsApiResponse>> => {
    const url = `${BaseURL}/https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=39640d0a9f9745ff987df7aa894e8f33${apiKey}${category ? `&category=${category}` : ''}${pageNo ? `&page=${pageNo}` : ''}`
    return await getRequest<NewsApiResponse>(url)

}

export const getByQuery = async (query: string, pageNo?: number): Promise<ApiResponse<NewsApiResponse>> => {
    const url = `${BaseURL}/https://newsapi.org/v2/everything?&apiKey=39640d0a9f9745ff987df7aa894e8f33${apiKey}${query ? `&q=${query}` : ''}${pageNo ? `&page=${pageNo}` : ''}&pageSize=20`
    return await getRequest<NewsApiResponse>(url)
}