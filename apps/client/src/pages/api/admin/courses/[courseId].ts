import { connectDb } from "@/lib/dbConnect";
import { Course } from "db";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    message: string
}


export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    await connectDb();
    const course = await Course.findByIdAndUpdate(req.query.courseId, req.body, {new: true});
    if(course)
    {
      res.json({message: 'Course Updated Successfully'});
    }
    else
    {
      res.json({message: 'Course not found'});
    }
  }
  