import { Resolvers } from "../../types/resolvers";
import { StartPhoneVerificationMutationArgs, StartPhoneVerificationResponse } from "../../types/graph";
import Verification from "../../entities/Verification";


const resolvers: Resolvers = {
  Mutation: {
      StartPhoneVerification: async (_, args: StartPhoneVerificationMutationArgs
      ): Promise<StartPhoneVerificationResponse> => {
        const {phoneNumber} = args;
        try{
          const existingVerification = await Verification.findOne
          ({
            payload:phoneNumber
          });
          if(existingVerification){
            existingVerification.remove();
          }
          const newVerification = await Verification.create({
            payload:phoneNumber,
            target:"PHONE"
          }).save();
          //to do: send sms
        }catch(error){
          return{
            ok:false,
            error:error.message
          }
        }
      }
  }
};


export default resolvers;