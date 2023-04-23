import Image from "next/image";
import Link from "next/link"
export default function error(){
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-black">Page not Found</h1>
            <Link href="/" className="mb-10 mt-4 text-indigo-500 opacity-80 hover:opacity-100"><span>Go Back</span></Link>
            <Image src={"/images/not_found.png"} width={400} height={400}></Image>
        </div>
    )
}