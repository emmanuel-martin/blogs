

const baseURL = `${process.env.URL}/api/trending`;

// endpoint: /api/trending
export default async function getTrending(id){
    const res = await fetch(`${baseURL}`)
    const trending = await res.json()
    if(id){
        return trending.find(value => value.id == id)
    }

    return trending;
}