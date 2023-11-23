import { Button, Card, Typography } from "@mui/material";
import { useRouter } from "next/router";

export function CourseCard(props)
{
    const router = useRouter();
    return <Card style={{
        border: "2px solid black",
        margin: 10,
        width: 300,
        minHeight: 200,
    }}>
        <Typography textAlign={"center"} variant="h6">
            {props.courseHelper.title}
        </Typography>
        <Typography textAlign={"center"} variant="subtitle1">
            {props.courseHelper.description}
        </Typography>
        <img src={props.courseHelper.imageLink} style={{width: 300}}></img>
        <div style={{
            display: "flex",
            justifyContent: "center",
            margin: 5
        }}>
            <Button
                size="large" 
                variant="contained"
                onClick={()=>{
                    router.push("/course/" + props.courseHelper._id);
                }}

            >Edit</Button>
        </div>
    </Card>
}