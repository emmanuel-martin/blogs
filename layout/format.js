import Header from "../components/header"
import Footer from "../components/footer"
import Head from "next/head"

export default function format({ children }) {
    const domain = 'https://www.blog.emmanuel.codes/';
    return (
        <>
            <Head>
                <title>Emmanuel Martin - Blogs</title>
                <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Welcome to my personal tech blog, where I share my thoughts and insights on the latest gadgets, apps, and trends in the tech industry. As a tech enthusiast and early adopter, I'm always on the lookout for the latest and greatest tech products, and I love sharing my experiences with others. In this blog, you'll find a wide range of topics, from reviews of the newest smartphones to deep dives into emerging technologies like blockchain and augmented reality. I'm passionate about exploring how technology impacts our lives, and I'm excited to share my perspectives with you. Whether you're a tech geek like me or just looking to learn more about the latest tech trends, this blog has something for everyone. So, grab a cup of coffee, sit back, and explore the exciting world of technology with me!" name="description" />
        <meta content="Personal tech blog, Tech enthusiast, Emerging technologies, Latest gadgets, Reviews, Augmented reality, Blockchain, Smartphones, Wearable technology, Artificial intelligence, Internet of Things, Cybersecurity, Digital culture, Social media, Software, Apps, Gaming, Computer hardware, Tech news, Technology trends" name="keywords" />
        <meta content="follow, index" name="robots" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
      
        <meta content="en_US" property="og:locale" />
        <meta content="Emmanuel Martin - Blogs" property="og:title" />
        <meta content="Welcome to my personal tech blog, where I share my thoughts and insights on the latest gadgets, apps, and trends in the tech industry. As a tech enthusiast and early adopter, I'm always on the lookout for the latest and greatest tech products, and I love sharing my experiences with others.
In this blog, you'll find a wide range of topics, from reviews of the newest smartphones to deep dives into emerging technologies like blockchain and augmented reality. I'm passionate about exploring how technology impacts our lives, and I'm excited to share my perspectives with you.
Whether you're a tech geek like me or just looking to learn more about the latest tech trends, this blog has something for everyone. So, grab a cup of coffee, sit back, and explore the exciting world of technology with me!" property="og:description" />
        <meta content="https://www.emmanuel.codes/blogs" property="og:url" />
       
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@emmanuelmartin_" name="twitter:site" />
        <meta content="@emmanuelmartin_" name="twitter:creator" />
            </Head>

            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}