const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/Api/apiRoutes");
require("./config/dbConnect");

const app = express();

// PORT Connectivity...
const PORT = process.env.PORT || 5000;

// const corsOptions = {
//     // origin: "http://localhost:3000",
//     origin: "https://lh3.googleusercontent.com",
//     optionsSuccessStatus: 200,
// };

// Middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors());
// app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", apiRoutes);

// if (process.env.NODE_ENV == "production") {
// app.use(express.static("client/build"));
// }

app.get("/", (req, res) => {
  res.send("Running Api");
  //   res.send(
  //     `<a href="http://localhost:${PORT}/googleRedirect">Continue with Google</a>`
  //   );
});

// Listening server at local 5000 port
app.listen(PORT, () => {
  console.log(`App started at http://localhost:${PORT}`);
});
