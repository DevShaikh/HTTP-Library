const http = new EasyHTTP;

// // GET Users
// http.get('http://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

const data = {
  name: 'Ahmed Shaikh',
  usersname: 'n2spartan',
  email: 'asofficial4k@gmail.com'
}

// // POST User
// http.post('http://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
  
// // PUT User
// http.put('http://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// DELETE User
http.delete('http://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err))