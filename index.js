const express = require('express');
const session = require('express-session');
const fileupload = require('express-fileupload');
const fs = require('fs');
const cors = require('cors');
const app = express();
const path = require('path');
const { readFile } = fs.promises;

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

app.get('/', async (request, response) => {
  response.send(await readFile('./home.html', 'utf8'));
});

app.listen(port, () => {
  console.log('5000 port');
});
