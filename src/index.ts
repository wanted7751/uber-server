import {Options} from "graphql-yoga";
import app from "./app";

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
app.start(appOptions,handleAppStart)


// 

