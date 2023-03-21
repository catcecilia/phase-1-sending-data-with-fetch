// Add your code here
function submitData(name, email){
    const formData = {
        name: name,
        email: email,
    };
    const configObject = {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObject)
    .then(function(response) {
        return response.json();
      })
      .then(function(object) {
          let p = document.createElement('p');
          p.textContent = object.id;
          document.body.appendChild(p);
      })
      .catch(function(error) {
          let p = document.createElement('p');
          p.textContent = error.message;
          document.body.appendChild(p);
      });
}