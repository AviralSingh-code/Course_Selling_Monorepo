import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useParams } from 'next/navigation'

import { Card, TextField, Button, Grid } from "@mui/material";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { courseDetails, courseState, isCourseLoading } from "store";
import { CourseCard } from "../courses";
import { useRouter } from "next/router";




function Course()
{
    // const params = useParams(); //this is to get the specific id
    const router = useRouter();
    const courseIsLoading = useRecoilValue(isCourseLoading);
    const setCourse = useSetRecoilState(courseState);
    const courseHelper = useRecoilValue(courseDetails);
    const[courses, setCourses] = useState([]);
    useEffect(()=>{
        function callback(res)
        {
            setCourses(res.data.courses);
        }
        axios.get("http://localhost:3000/api/admin/courses", {
            headers:{
                "authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback);
    },[]);


    for(let i = 0; i<courses.length; i++)
    {
        if(courses[i]._id == router.query.courseId)
        {
            setCourse({
                isLoading: false,
                course: courses[i]
            });
        }
    }


    if(courseIsLoading)
    {
        return <div>
            Loading....
        </div>
    }
    return <div>
        <Grid container>
            <Grid item lg={8} md={12} sm={12}>
                <CourseCard courseHelper={courseHelper}></CourseCard>
            </Grid>
            <Grid item lg={4} md={12} sm={12}>
                <CourseUpdate></CourseUpdate>
            </Grid>
        </Grid>
    </div>
}

function CourseUpdate()
{
    const courseHelper = useRecoilValue(courseDetails); //this is the selector
    const setCurrCourseState = useSetRecoilState(courseState);
    const[title, setTitle] = useState(courseHelper?.title);
    const[description, setDescription] = useState(courseHelper?.description);
    const[imageLink, setImageLink] = useState(courseHelper?.imageLink);
    const[price, setPrice] = useState(courseHelper?.price);

    return <div>
        <Card variant="outlined" style={{padding: 20}}>
        <TextField 
            value={title}
            onChange={(e) => {
                setTitle(e.target.value);
            }}
            fullWidth 
            label="Title" 
            variant="outlined" 
        />
        <TextField 
            value={description}
            onChange={(e) => {
                setDescription(e.target.value);
            }}
            fullWidth 
            label="Description" 
            variant="outlined" 
        />

        <TextField 
            value={imageLink}
            onChange={(e) => {
                setImageLink(e.target.value);
            }}
            fullWidth 
            label="Image Link" 
            variant="outlined" 
        />
        <TextField 
            value={price}
            onChange={(e) => {
                setPrice(e.target.value);
            }}
            fullWidth 
            label="Price" 
            variant="outlined" 
        />

        <Button 
            size="large" 
            variant="contained"
            onClick={()=>{
                function callback2(data : any)
                {
                    let updatedCourse = { 
                        title: title, 
                        description: description, 
                        price: price, 
                        imageLink: imageLink, 
                        published: true
                    };

                    setCurrCourseState({
                        isLoading: false,
                        course: updatedCourse
                    });
                }
                function callback(res)
                {
                    res.json().then(callback2);
                }
                fetch("http://localhost:3000/api/admin/courses/" + courseHelper?._id, {
                    method: "PUT",
                    body: JSON.stringify(
                        { 
                            title: title, 
                            description: description, 
                            price: price, 
                            imageLink: imageLink, 
                            published: true
                        }
                    ),
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": "Bearer " + localStorage.getItem("token")
                    }
                }).then(callback);
            }}

        >Update Course</Button>
        </Card>
    </div>
}

export default Course;