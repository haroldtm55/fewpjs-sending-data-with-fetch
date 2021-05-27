// Add your code here
function submitData(userName,userEmail) {
  const formData = {
    name: userName,
    email: userEmail
  }
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  }
  return fetch('http://localhost:3000/users', configObj).then((response) => {
    return response.json()
  }).then((object) => {
    console.log(object['name'])
    document.body.appendChild(document.createElement('p')).innerHTML = object['id']
  }).catch((error) => {
    document.body.appendChild(document.createElement('p')).innerHTML = 'Unauthorized Access'
  })
}