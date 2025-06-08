import type { Method, AxiosRequestHeaders, AxiosResponse } from 'axios'
import axios, { AxiosHeaders } from 'axios'

interface ApiCallOptions {
  method?: Method
  headers?: AxiosRequestHeaders
  params?: Record<string, any>
  data?: Record<string, any>
  token?: string
}

export const APICall = async <T = any>(url: string, options: ApiCallOptions = {}): Promise<T> => {
  try {
    const headers = {
      ...new AxiosHeaders(),
      ...options.headers,
      ...(options.token ? { Authorization: `Bearer ${options.token}` } : {})
    }

    const response: AxiosResponse<T> = await axios({
      url: `${process.env.BACKEND_API_URL}${url}`,
      method: options.method || 'GET',
      headers,
      params: options.params,
      data: options.data,
      responseType: 'json' // Ensure JSON response type
    })

    return response.data
  } catch (error: any) {
    console.error('Error in makeApiCall:', error.message)
    console.error('Error Details:', error.response?.data) // Log error response
    throw new Error(error.response?.data?.message || 'Failed to make API call')
  }
}
