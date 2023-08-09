
import express from "express";
import { useModules } from "./start/modules.js";
import { bootstrap } from "./start/run.js";
const app = express();

useModules(app);
bootstrap(app);
