const { User, BlogPost } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res)=>{
    try {
        // Get all posts
        const postData = await BlogPost.findAll({
            include: [{model: User}],
        })
        
        // serialize post data
        const posts = postData.map((project)=>project.get({plain:true}))

        // Use serilized data
        res.render("home", {posts})

    } catch (error) {
        res.render(500).json(error);
    }
})

router.get('/login', async (req, res)=>{
    res.render("login")
})

module.exports = router;