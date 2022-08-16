const addCommentHandler = async (event) => {
    event.preventDefault();

    const blogComment = document.querySelector('#blog-comment').value.trim()

    // Get blog id from url
    const urlParam = location.pathname.split('/')
    const blogId = urlParam[urlParam.length-1]
    
    // send post request
    const response = await fetch('/api/users/addComment', {
        method: 'POST',
        body: JSON.stringify({ blogComment, blogId}),
        headers: { 'Content-Type': 'application/json' },
    })
    console.log(response);
    if (response.ok) {
        document.location.replace(`/blog/${blogId}`)
      } else {
        alert('Failed to log in');
      }
}

document.querySelector('.addblog-form').addEventListener('submit', addCommentHandler);