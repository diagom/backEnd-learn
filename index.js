const express = require('express');
const session = require('express-session');
const fileupload = require('express-fileupload');
const fs = require('fs');
const cors = require('cors');
const app = express();
const path = require('path');

const port = 5000;

app.use(session({ secret: 'replace with secret' }));
app.use(express.json());
app.use(cors());
app.use(
  fileupload({
    useTemplFiles: true,
    tempFileDir: path.join(__filename, 'temp'),
  })
);

app.get('/news', (req, res) => {
  res.json([{ Title: 'cool new!' }]);
});

app.listen(port, () => {
  console.log('5000 port');
});
