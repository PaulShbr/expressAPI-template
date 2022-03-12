import express, { Router } from 'express';

const Example:Router = express.Router();

/**
 * Path /hello
 * response "Hello World"
 */
Example.get("/hello", (req, res) => {
    return res.send("Hello World");
});

export default Example;