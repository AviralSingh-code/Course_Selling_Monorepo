import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useParams } from 'next/navigation'

import { Card, TextField, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { courseDescription, courseDetails, courseImage, coursePrice, courseState, courseTitle, isCourseLoading } from "store";
import { CourseCard } from "ui/CourseCard";
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
    return <div style={{
        display: "flex",
        justifyContent: "center"
    }}> 
        <div
    style={{
        maxWidth: "1200px",
        marginTop: "5%"
    }}>
        <Grid container>
            <Grid item lg={8} md={12} sm={12}>
                <CourseCardUpdate></CourseCardUpdate>
            </Grid>
            <Grid item lg={4} md={12} sm={12}>
                <CourseUpdate></CourseUpdate>
            </Grid>
        </Grid>
    </div>
    </div>
}

function CourseCardUpdate()
{
    const currCourseTitle = useRecoilValue(courseTitle);
    const currCourseDescription = useRecoilValue(courseDescription);
    const currCourseImageLink = useRecoilValue(courseImage);
    const currCoursePrice = useRecoilValue(coursePrice);

    return (
        <Card style={{
            border: "2px solid black",
            margin: 10,
            width: 300,
            minHeight: 200,
        }}>
            <Typography textAlign={"center"} variant="h6">
                {currCourseTitle}
            </Typography>
            <Typography textAlign={"center"} variant="subtitle1">
                {currCourseDescription}
            </Typography>
            <img src={currCourseImageLink} style={{width: 300}}></img>
            <Typography textAlign={"center"} variant="subtitle1">
                {currCoursePrice}
            </Typography>
        </Card>
    );
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