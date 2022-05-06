const express = require('express')
const app = express()
const port = 3000

const routes = require('./routes/route') 

// body parse json
app.use(express.json());

// routes
app.use("/api",routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})