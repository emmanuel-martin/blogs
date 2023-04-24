import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'

export default function header() {
    return (
        <header className="sticky top-0 bg-white/80 z-30 backdrop-blur-xl	">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-4">
                
            <div className=" w-96 sm:order-1 order-1">
                    <Link href={"/"}>
                        <a className="font-bold text-sm sm:text-lg">Emmanuel Martin.</a>
                    </Link>
                </div>

                <div className="md:flex-none w-96 order-2 sm:order-2 flex justify-center py-4 sm:py-0">
                    <input type="text" className="input-text" placeholder="Search for Blogs" />
                </div>

               

                <div className="hidden sm:block w-96 order-3 flex ">
                    <div className="flex gap-6 justify-center">
                        <Link href={"https://www.facebook.com/emmanuelmartinfb"}><a><ImFacebook color="#888888" /></a></Link>
                        <Link href={"https://www.twitter.com/emmanuelmartin_"}><a><ImTwitter color="#888888" /></a></Link>
                        <Link href={"https://www.youtube.com/@emmanuel-martin"}><a><ImYoutube color="#888888" /></a></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
