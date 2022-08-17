const signupHandler = async (event) => {
    event.preventDefault();

    const userName = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    // Check username and password aren't empty
    if (userName && password) {
        const response = await fetch("/api/users/login", 
            {
                method: 'POST',
                body: JSON.stringify({userName, password}),
                headers: { 'Content-Type': 'application/json'}
            }
        );

        if (response.ok){
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText)
        }
    }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupHandler);