const router = require("express").Router();
const { User, Blog, Comment } = require("../../models");

// create new user
router.post("/", async (req, res) => {
    try {
        const dbUserData = await User.create({
            user_name: req.body.userName,
            password: req.body.password,
        });

        req.session.loggedIn = true;
        req.session.id = dbUserData.id;
        // Set up sessions with a 'loggedIn' variable set to `true`
        req.session.save(() => {
            res.status(200);
            // .json(dbUserData)
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// create a new comment
router.post("/addComment", async (req, res) => {
    if (req.session.loggedIn) {
        try {
            // create date
            let currentDate = new Date();
            let cDay = currentDate.getDate();
            let cMonth = currentDate.getMonth() + 1;
            let cYear = currentDate.getFullYear();

            const commentData = await Comment.create({
                blog_id: req.body.blogId,
                description: req.body.blogComment,
                user_id: req.session.userId,
                date: `${cMonth}/${cDay}/${cYear}`,
            });
            res.status(200).json(commentData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    } else {
        res.status(500).json({ message: "user not logged in" });
    }
});

// Update blog
router.put("/updateBlog", async (req, res) => {
    if (req.session.loggedIn) {
        try {
            // create date
            let currentDate = new Date();
            let cDay = currentDate.getDate();
            let cMonth = currentDate.getMonth() + 1;
            let cYear = currentDate.getFullYear();

            const commentData = await Blog.update(
                {
                    title: req.body.blogTitle,
                    description: req.body.blogDescription,
                    date: `${cMonth}/${cDay}/${cYear}`,
                },
                {
                    where: {
                        id: parseInt(req.body.blogId),
                    },
                }
            );
            res.status(200).json(commentData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    } else {
        res.status(500).json({ message: "user not logged in" });
    }
});

router.delete("/deleteBlog", async (req, res) => {
    if (req.session.loggedIn) {
        try {
            const commentData = await Blog.destroy({
                where: {id: parseInt(req.body.blogId)},
            });
            res.status(200).json(commentData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    } else {
        res.status(500).json({ message: "not logged in" });
    }
});

// create a blog
router.post("/saveblog", async (req, res) => {
    if (req.session.loggedIn) {
        try {
            // create date
            let currentDate = new Date();
            let cDay = currentDate.getDate();
            let cMonth = currentDate.getMonth() + 1;
            let cYear = currentDate.getFullYear();

            const blogData = await Blog.create({
                title: req.body.title,
                description: req.body.description,
                user_id: req.session.userId,
                date: `${cMonth}/${cDay}/${cYear}`,
            });
            res.status(200).json(blogData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    } else {
        res.status(500).json({ message: "user not logged in" });
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                user_name: req.body.username,
            },
        });

        if (!dbUserData) {
            res.status(400).json({
                message: "Incorrect username or password. Please try again!",
            });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({
                message: "Incorrect username or password. Please try again!",
            });
            return;
        }

        // Once the user successfully logs in, set up the sessions variable 'loggedIn'
        req.session.loggedIn = true;
        req.session.userId = dbUserData.id;

        req.session.save(() => {
            res.status(200).json({ message: "You are now logged in!" });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Logout
router.post("/logout", (req, res) => {
    // When the user logs out, destroy the session
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
