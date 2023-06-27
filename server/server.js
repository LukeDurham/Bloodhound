// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// // Dummy database for example
// const users = [
//   {
//     username: 'user1',
//     password: 'password1', // Never store passwords in plain text
//   },
// ];

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   const user = users.find(u => u.username === username);

//   if (user && user.password === password) {
//     res.json({ success: true, message: 'Login successful' });
//   } else {
//     res.json({ success: false, message: 'Invalid username or password' });
//   }
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });
const express = require('express');
const app = express();

const server = app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// To stop the server
server.close(() => {
  console.log('Server closed');
});


