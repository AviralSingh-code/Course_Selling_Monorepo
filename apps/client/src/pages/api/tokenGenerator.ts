import jwt from "jsonwebtoken";
const secretKey = 'SECr3tFw';

interface Data{
    username: string | null,
    password: string | number | null
};
export function generateToken(user: Data)
{
    var usernameVal = {username: user.username};
    return jwt.sign(usernameVal, secretKey, {expiresIn: '1h'});
}