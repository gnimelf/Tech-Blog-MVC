const router = require("express").Router();

const { User, Blog, Comment } = require("../models");

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
        res.render("home", 
        {
             posts,
             logged_in: req.session.loggedIn,
             userId: req.session.user_id
        });
    } catch (err) {
        console.log("error" + err);
        res.status(500).json(err);
    }
});

router.get("/dashboard", async (req, res) => {
    try {
        const postData = await Blog.findAll({
            where: { user_id: req.session.id },
            include: [{ model: User, attributes: { exclude: ["password"] } }],
        });
        const posts = postData.map((postData) => postData.get({ plain: true }));

        console.log(posts);

        res.render("dashboard", 
        {
            posts, 
            logged_in: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

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
        });

        // serialize post data
        const post = postData.get({ plain: true });

        // Use serilized data
        res.render("blog", { post });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/signup", async (req, res) => {
    res.render("signup");
});

module.exports = router;
