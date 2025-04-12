require("dotenv").config();
const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
require("./connection/db.js");

const corsOptions = {
    origin: "*",
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "x-userid"],
    exposedHeaders: ["Content-Length", "X-Foo", "X-Bar", ""],
    preflightContinue: false,
};

app.use(cors(corsOptions))
app.use(express.json());


const routes = {
    user: require("./routes/user.js"),
    // posts: require("./routes/posts.js"),
    // news: require("./routes/news.js"),
    // market: require("./routes/market.js"),
    // classified: require("./routes/.js"),
    // blooddonation: require("./routes/user.js"),
    // emergency: require("./routes/user.js")
}

Object.entries(routes).forEach(([routeName, routeHandler]) => {
    app.use(`/${routeName}`, routeHandler)
})



app.get('/', (req, res) => {
    res.json('Welcome to LOVE ❤️ AKOT - Dashboard');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});







