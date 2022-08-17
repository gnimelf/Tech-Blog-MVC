const signupHandler = async (event) => {
    event.preventDefault();

    const userName = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();

    // Check username and password aren't empty
    if (userName && password) {
        console.log(userName + " " + password)
        const response = await fetch("/api/users/", 
            {
                method: 'POST',
                body: JSON.stringify({userName, password}),
                headers: { 'Content-Type': 'Application/json'}
            }
        );

        if (response.ok){
            document.location.replace('/')
        } else {
            alert(response.statusText)
        }
    }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupHandler);