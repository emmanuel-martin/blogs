import data from '../data'


// api/popular/1
export default function handler(req, res){
    const { postId } = req.query;
    const { Popular }  = data;

    if(postId){
        const popular = Popular.find( value => value.id == postId)
        return res.status(200).json(popular)
    }

    return res.status(404).json({ error : "Post Not Found"})

}