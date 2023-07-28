import app from "./app.js";
import connectDB from "./database/db.js";

app.get("/", (req, res) => {
  res.send("<h1>Congratulations!😎🥰😍 Server is Working</h1>");
});

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is Running on PORT : ${process.env.PORT}`);
});
