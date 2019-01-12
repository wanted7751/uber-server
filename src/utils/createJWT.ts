import jwt from "jsonwebtoken";


const createJWT = (id: number) : string => {
    const token = jwt.sign(
        {
        id
    }, 
    "Fms_BevkV-rd^LL9mb6rL2JXB-^vMeBbak=u6x5PjgR=Wy@C64h");
    return token
}


export default createJWT;