import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
  res.send("Hello World from our API!");
});

app.post("/generate", async (req, res) => {
    const queryDescription = req.body.queryDescription;
    console.log("received description: ",queryDescription);
        res.json({response: `you sent this: ${queryDescription}`})
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});