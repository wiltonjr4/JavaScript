import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:123@cluster0.by2or.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;