import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGODB_URI );
  console.log(`DATABASE MongoDB est connecté`);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => res.json("Bienvenue sur le Backend d'INTERIOR-DIGITAL"));

app.listen(PORT, () =>
  console.log(`[SERVER] is running on http://localhost:${PORT}`)
);
