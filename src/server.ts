import app from "./app";
//import compression from "compression";
//import helmet from "helmet";

//app.use(helmet()); // set well-known security-related HTTP headers
//app.use(compression());

//app.disable("x-powered-by");

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
    console.log(`Starting ExpressJS server on Port ${port}`));

export default server;
