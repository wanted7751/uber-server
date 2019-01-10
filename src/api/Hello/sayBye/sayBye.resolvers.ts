
import { SayByeQueryArgs, SayByeResponse } from "../../../types/graph";

const resolvers = {
    Query: {
        sayBye: (_, args: SayByeQueryArgs): SayByeResponse => {
            return {
                error: false,
                text: `Hello ${args.name}`
            };
        }
    }
};

export default resolvers;