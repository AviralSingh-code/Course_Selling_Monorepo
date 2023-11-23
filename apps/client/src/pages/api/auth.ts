import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from "jsonwebtoken";
const secretKey = 'SECr3tFw';
// type Data = {
//   verificationToken: string | null
// }

export default async function authentication(
  req: NextApiRequest,
  res?: NextApiResponse<Data>
) : (string | null) {
    var authenticateVal = req.headers.authorization;
    var tokenVal = authenticateVal.split(' ')[1];
    // var verificationToken : (string | null) = null;
    // console.log(tokenVal);
    await jwt.verify(tokenVal, secretKey, (err,user) => {
        if(err)
        {
            console.log("Hit Fails");
            // res?.json({verificationToken: null});
            return (null);
        }
        else
        {
            // req.user = user;
            // res.token = tokenVal;
            // next();
            // res?.json({verificationToken: tokenVal});
            // verificationToken = tokenVal;
            return (tokenVal);
        }
    });

    return "Helljdsfjs";
}
