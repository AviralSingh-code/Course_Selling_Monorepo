import { Avatar, Box, Button, Card, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import { useState } from "react";

const defaultTheme = createTheme();

export function Signup()
{
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
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
          Welcome to Coursera. Sign up below.
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              onClick={()=>{
                
              }}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    );
}