import { Admin } from 'db';
import type { NextApiRequest, NextApiResponse } from 'next'
import { generateToken } from '../tokenGenerator';
import { connectDb } from '@/lib/dbConnect';


type Data = {
  message: string
  token: string | null
}



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    await connectDb();
    const admin = req.headers;
    const result = await Admin.findOne({username: admin.username, password: admin.password});
    if(result)
    {
      const token = generateToken(admin);
      res.json({message: 'Logged In Successfully', token});
    }
    else
    {
      const token = null;
      res.json({message: 'Invalid username or password', token});
    }
}
