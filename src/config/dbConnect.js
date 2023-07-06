import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost:27017/alura-node"); /* Local */
mongoose.connect("mongodb+srv://otaviohls:sofia123@alura.spikuo9.mongodb.net/alura-node"); /* Atlas Clould */

let db = mongoose.connection;

export default db;