import express from "express";
import cors from "cors";
import routes from "./routes";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:3001");
});