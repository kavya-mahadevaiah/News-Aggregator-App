import axios from "axios"

interface RequestError extends Error {
    status?: number;
    details?: any
}

export interface ApiResponse<T> {
    data?: T;
    error?: RequestError | undefined
}

export const getRequest = async <T>(url: string): Promise<ApiResponse<T>> => {
    try {
        const url="https://newsapi.org/v2/top-headlines?country=us&apiKey=39640d0a9f9745ff987df7aa894e8f33"
        const response = await axios.get<T>(url)
        return { data: response.data }
    } catch (error: any) {
        const status = error.response?.status
        const details = error.response?.data
        return {
            error: {
                message: `Error Fecting ${url}`,
                status,
                details,
                name: "RequestError"
            }
        }
    }
}