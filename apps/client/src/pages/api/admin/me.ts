// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectDb } from '@/lib/dbConnect'
import { Admin } from 'db'
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
  msg?: string
  username?: string | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    await connectDb();
    const admin = await Admin.findOne({username: req.body.username});
    if(!admin)
    {
      res.json({username: null});                                //this is to handle error
      // res.status(403).json({msg: "Admin doesn't exist"});
    }
    else{
        res.json({
            username: admin.username
        });
    }
}
