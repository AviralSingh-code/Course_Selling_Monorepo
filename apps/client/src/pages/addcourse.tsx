import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import { useState } from 'react';
import axios from 'axios';

const defaultTheme = createTheme();

function AddCourse()
{
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[imageLink, setImageLink] = useState("");
    const[price, setPrice] = useState(0);
    return (
        <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography textAlign={"center"} component="h1" variant="h5">
            Add Course Details below !!
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}
                    required
                    fullWidth
                    label="Course Title"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    onChange={(e)=>{
                        setDescription(e.target.value);
                    }}
                    required
                    fullWidth
                    label="Course Description"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    onChange={(e)=>{
                        setImageLink(e.target.value);
                    }}
                    required
                    fullWidth
                    label="Course Image Link"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    onChange={(e)=>{
                        var a = e.target.value;
                        var b : number = +a;
                        setPrice(b);
                    }}
                    required
                    fullWidth
                    label="Course Price"
                />
              </Grid>
            </Grid>
            <Button 
            size="large" 
            variant="contained"
            onClick={async ()=>{
                const response = await axios.post("/api/admin/courses",{
                    title: title, 
                    description: description, 
                    price: price, 
                    imageLink: imageLink, 
                    published: true
                },{
                    headers: {
                        "authorization": "Bearer " + localStorage.getItem("token")
                    }
                });
                alert(response.data.message + " with course id : " + response.data.courseId);
            }}
        >Add Course</Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    );
}


export default AddCourse;







