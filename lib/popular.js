import {server} from "../config"

const baseURL = '/api/popular';

// endpoint: /api/popular
export default async function getPopular(id){
    const res = await fetch(server+baseURL)
    const popular = await res.json()
    if(id){
        return popular.find(value => value.id == id)
    }

    return popular;
}