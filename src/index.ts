import dotenv from "dotenv";
import {Options} from "graphql-yoga";
import {createConnection} from "typeorm";
import app from "./app";
import connectionOptions from "./ormConfig";

dotenv.config();

console.log(process.env);

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT  : string = "/playground";
const GRAPHQL_ENDPOINT : string = "/graphql";

const appOptions: Options = {
    port: PORT,
    playground:PLAYGROUND_ENDPOINT,
    endpoint:GRAPHQL_ENDPOINT

};

const handleAppStart = () => console.log(`Listening on port ${PORT}`)
    // start의 콜백함수를 만드는 중.

    createConnection(connectionOptions).then(() =>{
        app.start(appOptions, handleAppStart)
    }).catch(error => console.log(error));

    


// 

