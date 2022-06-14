import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("ola");
});

app.listen(3001, () => {
    console.log("Server is running at http://localhost:3001");
});
