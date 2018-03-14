module.exports={
    getBlogs: (req,res)=>{
        req.app.get('db').getBlogs().then(blogs=>{
            res.send(blogs)
        })
    }
}