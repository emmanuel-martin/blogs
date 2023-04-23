'use client'
import useSWR from 'swr';
import {server} from '../config'


const response = (...args) => fetch(...args).then(res => res.json())

export default function fetcher(endpoint){

    const { data, error } = useSWR(`${server}/${endpoint}`, response)
    return {
        data,
        isLoading : !error && !data,
        isError : error
    }
}