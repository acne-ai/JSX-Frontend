const express = require('express');
const app = express();
const path = require('path');
const host = '0.0.0.0';
const port = process.env.PORT || 5050;


// app.get('/signup',..)
app.use(express.json());
app.use(express.static('build'));

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, './index.html'));
// });

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, host, () => {
	console.log(`server started on ${port}`);
}); //listens on port 3000 -> http://localhost:3000/


module.exports = app;