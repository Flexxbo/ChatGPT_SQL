import express from "express";
import cors from "cors";
import generate from "./generate.js";

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
  res.send("Hello World from our API!");
});




app.post("/generate", async (req, res) => {
    const queryDescription = req.body.queryDescription;
    try{
        const sqlQuery = await generate(queryDescription);
        res.json({ sqlQuery })

    }catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }

});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});