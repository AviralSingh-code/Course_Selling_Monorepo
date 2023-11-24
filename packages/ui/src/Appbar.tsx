import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export function Appbar({title, userState, onSignupParent, onLoginParent, onLogoutParent, onAddCourseParent} )
{
    if(userState == null)
    {
        return (
            <StateOne title={title} onSignup={()=>{onSignupParent();}} onLogin={()=>{onLoginParent();}}></StateOne>
            );
    }
    else
    {
        return (
            <StateTwo title={title} onLogout={()=>{onLogoutParent();}} onAddCourse={()=>{onAddCourseParent();}}></StateTwo>
        );
    }
    
}


function StateOne(props)
{
    return (
    <AppBar position="static" sx={{backgroundColor:'#427D9D'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              {props.title}
            </Typography>
            <Button color="inherit"
            onClick={()=>{
              props.onSignup();
            }}>SIGNUP</Button>
            <Button color="inherit"
            onClick={()=>{
              props.onLogin();
            }}>LOGIN</Button>
          </Toolbar>
        </AppBar>
    );
}



function StateTwo(props)
{
    return (
    <AppBar position="static" sx={{backgroundColor:'#427D9D'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              {props.title}
            </Typography>
            <Button color="inherit"
            onClick={()=>{
              props.onLogout();
            }}>LOGOUT</Button>
            <Button color="inherit"
            onClick={()=>{
              props.onAddCourse();
            }}>ADD COURSE</Button>
          </Toolbar>
        </AppBar>
    );
}