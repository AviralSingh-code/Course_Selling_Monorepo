import { connectDb } from '@/lib/dbConnect';
import { Course } from 'db';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message?: string
  courseId?: number
}

function makeid(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    await connectDb();
    const course = req.body;
    course.id = makeid(10);
    const createCourse = new Course(course);
    await createCourse.save();
    res.json({message: 'Course Created Successfully', courseId: course.id});
}
