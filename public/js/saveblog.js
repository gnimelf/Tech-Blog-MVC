const addNewPostHandler = async (event) => {
    event.preventDefault()
  
    const title = document.querySelector('#blog-title').value
    const description = document.querySelector('#blog-text').value

    if (title && description) {
      const response = await fetch('/api/users/saveblog', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' },
      })

      if (response.ok) {
        document.location.replace('/')
      } else if (response.status === 500) {
        alert('Please log in')
        document.location.replace('/login')
      }
    } else {
      alert('Please fill in both fields!')
      
    }
  }

document
    .querySelector("#add-blog")
    .addEventListener("click", addNewPostHandler)
