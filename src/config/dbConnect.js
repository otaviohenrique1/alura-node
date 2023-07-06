import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/alura-node"); /* Local */

let db = mongoose.connection;

export default db;