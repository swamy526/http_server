const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000

app
  .use(express.static(path.join(__dirname, "public")))
  .get('/', (req, res) => res.send(`<iframe src="https://docs.google.com/gview?url=/Resume.docx&embedded=true"></iframe>`))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))