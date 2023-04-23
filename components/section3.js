import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import fetcher from '../lib/fetcher'
import Spinner from "./_child/spinner"
import Error from "./_child/error"

export default function section3() {

    const { data, isLoading, isError } = fetcher('api/popular')
    
    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>

  return (
    <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

        {/* swiper */}
        <Swiper 
       
            breakpoints={{
                640 : {
                    slidesPerView: 2,
                    spaceBetween: 40
                }
            }}
            loop={true}
            autoplay= {{
                 delay: 5000
           }}
        >
            {
                    data.map((value, index) => (
                        <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
                    ))
            }
        </Swiper>

    </section>
  )
}


function Post({ data }){

    const { id, title, category, img, subtitle, published, author } = data;

    return (
        <div className="grid">
            <div className="images">
                <Link href={`/popular/${id}`}><a><Image src={img || ""} width={600} height={400} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                
                <div className="title">
                    <Link href={`/popular/${id}`}><a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">{title || "No Title"}</a></Link>
                </div>
                <div className="cat mt-4">
                    <Link href={`/popular/${id}`}><a className="text-orange-600 hover:text-orange-800">{category || "No Category"}</a></Link>
                    <Link href={`/popular/${id}`}><a className="text-gray-800 hover:text-gray-600">- {published || ""}</a></Link>
                </div>
                
            </div>
        </div>
    )
}