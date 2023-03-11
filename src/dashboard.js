import  React,{ useState  } from "react";
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
import {useHistory} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Footer from './footer';
import Image from 'mui-image'

const useStyles = makeStyles((theme) => ({
    appBar:{
        backgroundColor:"#fff",
    },
    abt:{
        color: '#001c2f',
        padding: '50px',
        textAlign: 'left',
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
      },
      btn:{
        justifyContent:"center",
        alignItems:"center",
      },
    
   }));
 

const Dashboard=()=>{
    const classes = useStyles();
    const history = useHistory();
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
<Button type='submit'  color='primary' variant="contained" onClick={()=>{history.push('/')}}>Logout</Button>
                 
</Stack>

  
    </Toolbar>
    </Box>
  </AppBar>
  <Box>
<div id="about" className={classes.abt}>
    <Stack spacing={2} direction="row" paddingBottom={2}>
    <Button className={classes.btn}color='primary' variant="contained">Welcome To Your Dashboard</Button>
    </Stack> 
    <Stack spacing={2} direction="row" paddingBottom={2}>
      <Box sx={{boxShadow:"3px 5px 3px 2px #001c2f"}}>
    <Image src="https://images.pexels.com/photos/6738452/pexels-photo-6738452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={600} />
    </Box>
    <Box>
        <Typography variant="h6" color='black'>
        The Kashmir region is predominantly mountainous, with deep, narrow valleys and high, barren plateaus. The relatively low-lying Jammu and Punch (Poonch) plains in the southwest are separated by the thickly forested Himalayan foothills and the Pir Panjal Range of the Lesser Himalayas from the larger, more fertile, and more heavily populated Vale of Kashmir to the north. The vale, situated at an elevation of about 5,300 feet (1,600 metres), constitutes the basin of the upper Jhelum River and contains the city of Srinagar.
        Rising northeast of the vale is the western part of the Great Himalayas, the peaks of which reach elevations of 20,000 feet (6,100 metres) or higher. Farther to the northeast is the high, mountainous plateau region of Ladakh, which is cut by the rugged valley of the northwestward-flowing Indus River. Extending roughly northwestward from the Himalayas are the lofty peaks of the Karakoram Range, including K2 (Mount Godwin Austen), which at 28,251 feet (8,611 metres) is the second highest peak in the world, after Mount Everest.

The region is located along the northernmost extremity of the Indian-Australian tectonic plate. The subduction of that plate beneath the Eurasian Plate—the process that for roughly 50 million years has been creating the Himalayas—has produced heavy seismic activity in Kashmir. 
        </Typography>
        </Box>
        </Stack> 
        </div>  
        </Box>
    </>
    )
};

export default Dashboard;


      
