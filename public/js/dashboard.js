const addNewPostHandler = (event) => {
    location.replace('/newblog')
}


document
  .querySelector('#add-post')
  .addEventListener('click', addNewPostHandler)