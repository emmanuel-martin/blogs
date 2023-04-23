'use client'
import useSWR from 'swr';

const dev = process.env.NODE_ENV !== 'production';

export const baseURL = dev ? 'http://localhost:3000' : 'https://blog.emmanuel.codes';

const response = (...args) => fetch(...args).then(res => res.json())

export default function fetcher(endpoint){

    const { data, error } = useSWR(`${baseURL}${endpoint}`, response)
    return {
        data,
        isLoading : !error && !data,
        isError : error
    }
}