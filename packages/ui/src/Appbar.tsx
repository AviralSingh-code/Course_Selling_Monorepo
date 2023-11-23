import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export function Appbar({title, userState} )
{
    if(userState == null)
    {
        return (
            <StateOne title={title}></StateOne>
            );
    }
    else
    {
        return (
            <StateTwo title={title}></StateTwo>
        );
    }
    
}


function StateOne({title})
{
    return (
    <AppBar position="static" sx={{backgroundColor:'#427D9D'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <Button color="inherit">SIGNUP</Button>
            <Button color="inherit">LOGIN</Button>
          </Toolbar>
        </AppBar>
    );
}



function StateTwo({title})
{
    return (
    <AppBar position="static" sx={{backgroundColor:'#427D9D'}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <Button color="inherit">LOGOUT</Button>
          </Toolbar>
        </AppBar>
    );
}