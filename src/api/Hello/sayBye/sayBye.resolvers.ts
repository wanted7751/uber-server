import { Greeting } from "../../../types/graph"

const resolvers = {
    Query: {
        sayBye: (): Greeting => {
            return {
                error: false,
                text: "love you"

            };
        }
    }
};


export default resolvers;

