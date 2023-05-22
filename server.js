const express = require('express')
const html_router = require('./routes/html-routes')
const api_router = require('./routes/api-routes')
const PORT = process.env.PORT || 3007;
//setting up the port

const app = express()

// log to notifiy when the server is launched
console.log("Server UP!")

// middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static("public"));
app.use(html_router)
app.use(api_router)

app.listen(PORT, () => {
    console.log('Server running at http://localhost:' + PORT)
});