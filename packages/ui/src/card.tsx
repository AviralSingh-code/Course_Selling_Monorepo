import { Box, Button, Container, Grid, Typography, useThemeProps } from "@mui/material";
import Head from 'next/head';

export function Card({userState, onBrowserClickParent, onLogoutClickParent})
{
  console.log(userState);
  if(!userState)
  {
    return ( <StateOne></StateOne> );
  }
  else
  {
    return ( <StateTwo onBrowserClick={()=>{onBrowserClickParent();}} 
    onLogoutClick={()=>{onLogoutClickParent();}}></StateTwo> );
  }
}


function StateOne()
{
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      // backgroundColor: "#E0F4FF",
      width: "100%",
      height: "100vh",
      marginTop: "20px"
      // marginBottom: "-10px"
    }}>
      <Container>
        <Head>
          <title>Course Selling Website</title>
          <meta name="description" content="Sell and buy courses online" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main style={{
          margin: "0px"
        }}>
          <Grid container rowSpacing={10} columnSpacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <img src="https://www.shutterstock.com/image-vector/new-normal-school-during-covid19-600nw-1734242498.jpg" alt="Course Image" style={{ width: '100%', borderRadius: '8px' }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <div style={{
                // backgroundColor: "#E0F4FF",
                width: "100wh"
              }}>
                <Typography textAlign={"center"} variant="h3" component="h1" gutterBottom>
                  Welcome to our Course Selling Platform
                </Typography>
                <Typography textAlign={"center"} variant="h6" component="h2" gutterBottom>
                  Learn from the best, teach the rest.
                </Typography>
                <Typography textAlign={"center"} variant="body1" paragraph>
                  Explore a wide range of courses offered by industry experts. Start your learning journey
                  today!
                </Typography>
              </div>
              <div style={{
                display: "flex",
                justifyContent: "center",
                // backgroundColor: "#E0F4FF",
                width: "100wh",
                margin: "0px"
              }}>
                <Button variant="outlined" color="primary">
                  Sign In
                </Button>
                <Button variant="outlined" color="primary" style={{ marginLeft: '8px' }}>
                  Sign Up
                </Button>
              </div>
            </Grid>
          </Grid>
        </main>

        <footer style={{
          // backgroundColor: "#E0F4FF"
        }}>
          <Typography textAlign={"center"} variant="body2" color="textSecondary" align="center">
            © {new Date().getFullYear()} Course Selling Website. All rights reserved.
          </Typography>
        </footer>
      </Container>
    </div>
  );
}


function StateTwo(props)
{
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      // backgroundColor: "#E0F4FF",
      width: "100%",
      height: "100vh",
      marginTop: "20px"
      // marginBottom: "-10px"
    }}>
      <Container>
        <Head>
          <title>Course Selling Website</title>
          <meta name="description" content="Sell and buy courses online" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main style={{
          margin: "0px"
        }}>
          <Grid container rowSpacing={10} columnSpacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <img src="https://www.shutterstock.com/image-vector/new-normal-school-during-covid19-600nw-1734242498.jpg" alt="Course Image" style={{ width: '100%', borderRadius: '8px' }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <div style={{
                // backgroundColor: "#E0F4FF",
                width: "100wh"
              }}>
                <Typography textAlign={"center"} variant="h3" component="h1" gutterBottom>
                  Welcome to our Course Selling Platform
                </Typography>
                <Typography textAlign={"center"} variant="h6" component="h2" gutterBottom>
                  Learn from the best, teach the rest.
                </Typography>
                <Typography textAlign={"center"} variant="body1" paragraph>
                  Explore a wide range of courses offered by industry experts. Start your learning journey
                  today!
                </Typography>
              </div>
              <div style={{
                display: "flex",
                justifyContent: "center",
                // backgroundColor: "#E0F4FF",
                width: "100wh",
                margin: "0px"
              }}>
                <Button variant="contained" color="primary" style={{ marginRight: '16px' }}
                onClick={()=>{
                  props.onBrowserClick();
                }}>
                  Browse Courses
                </Button>
                <Button variant="outlined" color="primary"
                onClick={()=>{
                  props.onLogoutClick();
                }}>
                  LOGOUT
                </Button>
              </div>
            </Grid>
          </Grid>
        </main>

        <footer style={{
          // backgroundColor: "#E0F4FF"
        }}>
          <Typography textAlign={"center"} variant="body2" color="textSecondary" align="center">
            © {new Date().getFullYear()} Course Selling Website. All rights reserved.
          </Typography>
        </footer>
      </Container>
    </div>
  );
}