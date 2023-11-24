import { connectDb } from '@/lib/dbConnect'
import { getUser } from '@/lib/middleware';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    await connectDb();
    const authHeader = req.headers.authorization;
    // console.log(authHeader);
    if(authHeader)
    {
        const token = authHeader.split(' ')[1];
        getUser(token, (user)=>{
            if(!user)
            {
                res.status(402).json({});
                return;
            }
            res.json({user: user});
        })
    }
}
