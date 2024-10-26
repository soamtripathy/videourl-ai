import express from "express";
import dotenv from "dotenv";
import uniqid from "uniqid";
import fs from "fs";
import cors from "cors";
import { GPTScript, RunEventType } from "@gptscript-ai/gptscript";
import path from "path";
import { error } from "console";
const app = express();
const g = new GPTScript({
  mistralApiKey: process.env.MISTRAL_API_KEY,
  DefaultModel: "mistral-large-latest from github.com/gptscript-ai/mistral-laplateforme-provider",
  timeout: 60000,
});

dotenv.config({
  path: "./.env",
});

app.use(cors());
app.use(express.static("stories"));
app.get("/", (req, res) => {
  return res.json("test ok");
});
app.get("/create-story", async (req, res) => {
  const url = decodeURIComponent(req.query.url);
  const dir = uniqid();
  const path = './stories/'+dir;
  fs.mkdirSync(path, {recursive: true});

  // console.log({
  //   url,
  // });

  const opts = {
    input: `--url ${url} --dir ${path}`,
    disableCache: true,
    // DefaultModel: "gpt-3.5-turbo",
  };
  console.log("Before running GPTScript");
  console.log(opts);
  try {
    const run = await g.run("./story.gpt", opts);
    console.log("After running GPTScript");
    run.on(RunEventType.Event, (ev) => {
      if (ev.type === RunEventType.CallFinish && ev.output) {
        console.log("Processing output:", ev.output);
      }
    });
    const result = await run.text();
    console.log("Story Creation completed", result);
    console.log(result);
    return res.json({ success: true, result, directory: dir });
  } catch (e) {
    // Check the structure of the error to ensure it's being handled correctly
    console.error("Error in create-story:", e);
    console.error("Error details (stringified):", JSON.stringify(e)); // Log the error as a string for clarity

    // Return the error message properly formatted
    return res
      .status(500)
      .json({
        error: "Internal Server Error",
        details: e.message || String(e),
      });
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
  console.log("Mistral API Key configured:", !!process.env.OPENAI_API_KEY);
});
