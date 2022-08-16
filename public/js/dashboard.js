const addNewPostHandler = async (event) => {
    location.replace('/newblog')
}


document
  .querySelector('#add-post')
  .addEventListener('click', addNewPostHandler)