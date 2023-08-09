import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "../api/routes/index.js";

export function useModules(app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());
    app.use(cookieParser());
    app.use(routes);
    app.use(express.static('public'));

    app.set("view engine", "ejs");
    app.set("views", "src/views");
}