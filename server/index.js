const express = require("express");
const { config } = require("dotenv");
const session = require("express-session");
const app = express();
const cors = require("cors");

config();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3200/");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(
  cors({
    origin: "http://localhost:3200",
    optionsSuccessStatus: 200,
    credentials: true,
    preflightContinue: true,
  })
);
app.use(express.urlencoded({ urlencoded: false }));
app.use(express.json());
app.use(
  session({ 
    secret: process.env.SIGN_SESSION,
    key: "cookier",
    resave: true,
    saveUninitialized: true,
  })
);
/**
 * ! Rutas
 */

app.use("/", require("./routes/userFree"));

/**
 * !Socket
 */
console.log(process.env.SIGN_SESSION);
const socket = require("./config/socket");

const PORT = process.env.PORT_SERVER || 3100;
process.on("warning", (e) => console.warn(e.stack));

app.listen(PORT, () => {
  console.log("servidor corriendo, servidor corriendo en:  " + PORT);
});
