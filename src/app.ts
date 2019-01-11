import{GraphQLServer} from "graphql-yoga";
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";
import schema from "./schema";


class App {
    public app:GraphQLServer;
    constructor(){
        this.app = new GraphQLServer({
            schema:schema
        });
        this.middlewares();
    }
    private middlewares = () : void => {
        this.app.express.use(cors());
        //express 는 graphql-yoga의 서버 부분이다. 
        this.app.express.use(logger("dev"));
        // express는 logger를 사용하고 logger는 타입dev를 가질 수 있다.
        this.app.express.use(helmet());
    }
}

export default new App().app