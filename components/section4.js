import Author from "./_child/author"
import Link from "next/link"
import Image from "next/image"

import Fetcher from '../lib/fetcher'
import Spinner from "./_child/spinner"
import Error from "./_child/error"


export default function section4() {

    const { data, isLoading, isError } = Fetcher('api/popular')
    
    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>

  return (
    <section className="container mx-auto md:px-20 py-0 w-4/5 sm:max-w-1/2">
        <div className="grid lg:grid-cols-2">
            <div className="item">
                <h1 className="font-bold text-4xl py-12">Explore</h1>
                <div className="flex flex-col gap-6">
                    {console.log(data)}
                    { data[1] ? <Post data={data[1]}></Post> : <></>}
                </div>
            </div>
            <div className="item">
                <h1 className="font-bold text-4xl py-12">Top Tech</h1>
                <div className="flex flex-col gap-6">
                    { data[0] ? <Post data={data[0]}></Post> : <></>}
                </div>
            </div>
        </div>
    </section>
  )
}

function Post({ data }){

    const { id, title, category, img, published, author } = data;

    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={`/posts/${id}`}><a><Image src={img || ""}  className="rounded" width={300} height={250} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={`/posts/${id}`}><a className="text-orange-600 hover:text-orange-800">{category || "No Category"}</a></Link>
                    <Link href={`/posts/${id}`}><a className="text-gray-800 hover:text-gray-600">- {published || ""}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "No Title"}</a></Link>
                </div>
            </div>
        </div>
    )
}