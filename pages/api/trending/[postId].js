import data from '../data'


// api/trending/1
export default function handler(req, res){
    const { postId } = req.query;
    const { Trending }  = data;

    if(postId){
        const trending = Trending.find( value => value.id == postId)
        return res.status(200).json(trending)
    }

    return res.status(404).json({ error : "Post Not Found"})

}