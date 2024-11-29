const express = require("express");
const cors = require("cors");
const config = require('./config');
const router = require('./routers');
require('./config/database');
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.json({ message: "Hello" }));


// app.use((err, req, res, next) => {
//   if (err instanceof SyntaxError) {
//     console.error('JSON Parse Error at URL:', req.url);
//     console.error('Raw Body that caused the error:', req.rawBody);
//     return res.status(400).json({ error: 'Invalid JSON format' });
//   }
//   next(err);
// });

app.use("/api", router);

app.listen(config.port, () =>
    console.log(`application is running on http://localhost:${config.port}`)
  );
