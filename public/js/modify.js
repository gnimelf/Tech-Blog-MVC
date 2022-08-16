function getBlogId() {
    // Get blog id from url
    const urlParam = location.pathname.split("/")
    return urlParam[urlParam.length - 1]
}

const updateBlogHandler = async (event) => {
    event.preventDefault()

    const blogTitle = document.querySelector("#blog-title").value.trim()
    const blogDescription = document.querySelector("#blog-text").value.trim()

    if (blogTitle && blogDescription) {

        const blogId = getBlogId()

        const response = await fetch("/api/users/updateBlog", {
            method: "PUT",
            body: JSON.stringify({ blogTitle, blogDescription, blogId }),
            headers: { "Content-Type": "application/json" },
        })
        if (response.ok) {
            document.location.replace("/")
        } else if (response.status === 500) {
            console.log(response.status)
        }
    }
};

const deleteBlogHandler = async (event) => {
    event.preventDefault()

    const blogId = getBlogId()
    const response = await fetch("/api/users/deleteBlog", {
        method: "DELETE",
        body: JSON.stringify({ blogId }),
        headers: { "Content-Type": "application/json" },
    })
    if (response.ok) {
        document.location.replace("/")
    } else {
        console.log(response.status)
    }
};

document
    .querySelector("#update-blog")
    .addEventListener("click", updateBlogHandler)

document
    .querySelector("#delete-blog")
    .addEventListener("click", deleteBlogHandler)
