import React from 'react'
import { Grid,Paper, Avatar, TextField,Box, Button, Typography,Link } from '@mui/material'
import { FormControlLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Checkbox from '@mui/material/Checkbox';
import AppBar from '@mui/material/AppBar';
import axios from "axios";
import { useState  } from "react";
import {useHistory} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Footer from './footer';


const useStyles = makeStyles((theme) => ({
   appBar:{
       backgroundColor:"#fff",
   },
   log:{
      backgroundImage:'url(https://images.pexels.com/photos/12040331/pexels-photo-12040331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
    height: "650px",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display:"flex",
    fontFamily: "Bebas Neue cursive",
    justifyContent:"left",
    alignItems:"left",
    color:"#fff",
    paddingTop:"100px",
    },
    here:{
      fontFamily: "Bebas Neue cursive",
      justifyContent:"right",
      paddingLeft:"150px",
      alignItems:"right",
      color:"#fff",
      fontSize:"4rem"
      },
     subtitle:{
        fontFamily: "Bebas Neue cursive",
        fontSize:"5rem",
        padding:"30px",
        paddingLeft:"5px",
        color:"black",
        paddingInline:"10px",
        background: "rgba(240, 240, 240, 0.3)",
        boxShadow:"5px 10px #001c2f"
        },
     txt:{
        padding:"20px",
     },
     glow:{
        fontWeight:"bold",
        textShadow: " 1px 1px 2px white;",
     }  
   
  }));

const Register=()=>{

    const history = useHistory();
    

    const formHandler = (e) => {
      e.preventDefault();
      console.log("line 72",e);
      let phone = e.target[0].value;
      let config = { 'headers' : { 'Content-Type' : 'application/json', 'Authorization' : "Bearer 12228492498479284917491498" } };
      axios.post("http://localhost:8080/loginUserPhone",{ phone : phone}, config).then(resp => {
          console.log("res" ,resp.data);
          let res = resp.data;
          if(!res.error && res.status === 200){
              // return <Redirect to="/" />;
              localStorage.setItem("user",JSON.stringify(res.data));
             setTimeout(()=>{
               history.push("/verify");
             },100)
          }
          else{
              alert(res.message);
          }
  
      },(err) => {
  
      })
      
    }

    const classes = useStyles();
    const paperStyle={padding :50,height:'40vh',width:280, margin:"10px auto",  boxShadow:"5px 10px #001c2f"}
    const btnstyle={margin:'8px 0'}
    return(
<>
<AppBar sx={{backgroundColor:"white", color:"#001c2f"}} position="static">
       <Box direction="row" sx={{paddingBlock:'8px' }}> 
    <Toolbar>
    <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h5" color="#001c2f" paddingRight={40} href="/">
       Kashmir Travels
      </Typography>
      <Stack spacing={4} direction="row" className={classes.btn} paddingRight={50} >
  <Typography>The journey of a thousand miles begins with a single step</Typography>
   </Stack>
<Stack spacing={2} direction="row" className={classes.btn}  >
<Button type='submit'  color='primary' variant="contained" onClick={()=>{history.push('/verify')}}>Back</Button>
                 
</Stack>

  
    </Toolbar>
    </Box>
  </AppBar>
    
<Grid className={classes.log}>
       
{/* <Box className={classes.here}>
         <Typography variant="h5" color="#001c2f" fontWeight="bold" className={classes.glow}>
           E-AUTH-PROVIDER
          </Typography>
          <Typography variant="h2" color="white" fontWeight="bold" >
          Get Started
          <KeyboardArrowRightIcon fontSize="large" />
          </Typography>
    <Typography variant="h6" className={classes.subtitle}>We provide secure and more effective authentications
    </Typography>
</Box> */}
            <Paper elevation={10} style={paperStyle}>
            <form onSubmit={(e)=>{ formHandler(e) }} >
              <Stack spacing={2} direction="column">
                <Grid align='center'>
                    <h2>Sign In With Phone</h2>
                </Grid>
                
                <TextField className={classes.txt} type='number' name="number" label='Phone' required placeholder='Enter Phone' fullWidth />
               
                <FormControlLabel
                    control={
                    <Checkbox name="checkedB" color="primary"/>
                    }
                    label="Remember me"
                 />
                <Button type='submit' value="Submit" color='primary' variant="contained" style={btnstyle} fullWidth>Verify & Send OTP</Button>
                <Typography >
                   
                </Typography>
                </Stack>
                {/* <Typography > Don't have an account?
                     <Link href="/register" >
                        Sign Up 
                </Link>
                </Typography> */}
                </form>
                 
            </Paper>
        </Grid>
        <Footer/>
        </>
    );
}

export default Register;
