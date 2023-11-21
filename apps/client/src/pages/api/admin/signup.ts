import { Admin } from "db";
import type { NextApiRequest, NextApiResponse } from "next";
import { generateToken } from "../tokenGenerator";
import { connectDb } from "../../../lib/dbConnect";


type Data = {
    message?: string | null
    token?: string
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    await connectDb();
    const admin = req.body;
    const result = await Admin.findOne({username: admin.username});
    if(result)
    {
        res.status(403).json({message: 'Admin already exists'});
    }
    else
    {
        const newAdmin = new Admin({username: admin.username, password: admin.password});
        await newAdmin.save();
        const token = generateToken(admin);
        res.json({message: 'Admin created successfully', token});
    }
}