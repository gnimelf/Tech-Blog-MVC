const router = require("express").Router()

const { User, Blog, Comment } = require("../models")

// Show all posts
router.get("/", async (req, res) => {
    try {
        // Get all posts
        const postData = await Blog.findAll({
            include: [{ model: User }],
        });

        // serialize post data
        const posts = postData.map((project) => project.get({ plain: true }));

        // Use serilized data
        res.render("home", {
            posts,
            logged_in: req.session.loggedIn,
            userId: req.session.user_id,
        });
    } catch (err) {
        res.status(500)
    }
})

router.get("/dashboard", async (req, res) => {
    if (req.session.loggedIn === true) {
        try {
            const postData = await Blog.findAll( {
                where:{user_id: req.session.userId,},
                include: [
                    { model: User, attributes: { exclude: ["password"] } },
                ],
            });
            const posts = postData.map((cleaningPost) =>
            cleaningPost.get({ plain: true })
            );

            console.log(posts);

            res.render("dashboard", {
                posts,
                logged_in: req.session.loggedIn,
            });
        } catch (err) {
            res.status(500)
        }
    } else {
        res.render("dashboard")
    }
})

// Get individual posts with comments
router.get("/blog/:id", async (req, res) => {
    try {
        // Get posts
        const postData = await Blog.findByPk(req.params.id, {
            include: [
                { model: User, attributes: { exclude: ["password"] } },
                {
                    model: Comment,
                    include: [
                        { model: User, attributes: { exclude: ["password"] } },
                    ],
                },
            ],
        })

        // serialize post data
        const post = postData.get({ plain: true });
        // Use serilized data
        res.render("blog", { 
            post, 
            logged_in: req.session.loggedIn 
        })
    } catch (err) {
        console.log(err)
        res.status(500)
    }
})

router.get("/newblog", async (req, res) => {
    try {
        res.render('newblog', 
        {
            logged_in: req.session.loggedIn
        })
    } catch (err) {
        console.log(err)
        res.status(500)
    }
} )

router.get("/login", (req, res) => {
    res.render("login", 
    {
         logged_in: req.session.loggedIn
    })
})

router.get("/signup", async (req, res) => {
    res.render("signup",
    {
        logged_in: req.session.loggedIn
    })
})

module.exports = router;
