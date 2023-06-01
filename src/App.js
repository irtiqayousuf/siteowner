import React from 'react';
import './App.css';
import { makeStyles } from '@mui/styles';
import { Grid,Paper, Avatar, TextField,Box, Button, Typography} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Checkbox from '@mui/material/Checkbox';
import AppBar from '@mui/material/AppBar';
import Typed from 'react-typed';
import Navbar from "./navbar";
import { Carousel } from 'react-material-ui-carousel';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import SecurityIcon from '@mui/icons-material/Security';
import { Card, CardContent
 } from '@mui/material';
 import Stack from '@mui/material/Stack';
 import {useState, useEffect} from 'react';
 import axios from 'axios';
 import { useHistory } from 'react-router-dom';
 import { Link } from 'react-scroll';
 import { Container,Hidden } from "@mui/material";
//import image from "../../images/About.jpg";
import { RenderSectionHeading, CardMedia} from './samecomponent';
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PermDeviceInformationIcon from "@mui/icons-material/PermDeviceInformation";
import ToysIcon from "@mui/icons-material/Toys";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ScrollAnimation from "react-animate-on-scroll";
import GppGoodIcon from '@mui/icons-material/GppGood';
import Footer from './footer';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PhoneLockedIcon from '@mui/icons-material/PhoneLocked';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LockIcon from '@mui/icons-material/Lock';
import SyncLockIcon from '@mui/icons-material/SyncLock';
// import MuiImageSlider from 'mui-image-slider';
import TextTransition, { presets } from "react-text-transition";
import ImageList from '@mui/material/ImageList';
import Image from 'mui-image';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import TestimonialCard from 'material-testimonial-card';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import pahalgam from './images/pahalgam.jpg';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(90deg, rgba(0,47,11,0.8099614845938375) 0%, rgba(0,28,47,0.5522584033613445) 40%, rgba(0,28,47,1) 100%),
    url("https://images.pexels.com/photos/15741951/pexels-photo-15741951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '77vh',
    paddingTop:'100px',
  },
  content: {
    paddingTop: "124px",
    maxWidth: 800,
    margin: 'auto',
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
  },
  abt:{
    color: '#001c2f',
    padding: '50px',
    textAlign: 'left',
  },
  abt2:{
    textAlign: 'center',
  },
  btn:{
    justifyContent:"right",
    alignItems:"right",
  },
  aboutbtn:{
    fontSize:"50px",
    justifyContent:"left",
    alignItems:"left",
  },
  testibtn:{
    fontSize:"50px",
    justifyContent:"center",
    alignItems:"center",
  },
  menuContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'repeat',
    top: 0,
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 1,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '10px 20px',
  },
  menuContainer1: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    position: 'repeat',
    top: 0,
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 1,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '10px 20px',
  },
  menuItem: {
    cursor: 'pointer',
    margin: '0 10px',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  menuItem1: {
    cursor: 'pointer',
    display:'block',
    justifyContent:'center',
    margin: '0 0px',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  section: {
    backgroundImage: `linear-gradient(90deg, rgba(0,28,47,1) 0%, rgba(0,28,47,1) 40%, rgba(0,28,47,1) 100%)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '10vh',
    paddingTop:'5px',
  },
  sectionHeading: {
    color: theme.colors.base2,
    margin: theme.spacing(1, 0),
  },
  responsiveImg: {
    width: "100%",
    height: "auto",
  },
  submitBtn: {
    backgroundColor: `linear-gradient(0deg, rgba(187,0,0,0.5998774509803921) 0%, rgba(48,58,46,0.6923144257703081) 100%)`,
    color: theme.colors.base2,
    "&:hover": {
      backgroundColor: theme.colors.primary1,
    },
  },
  sectionHeadingCont: {

    padding: theme.spacing(1),
    color: theme.colors.base2,
  },
  backk:{
    background: `linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(6,6,6,0.8379726890756303) 1%)`,
  },
  txt: {
    padding: "10px",
    marginTop :"4px",
},
cont:{
    color:"white",
}

}));


const menuItems = [
    { text: 'Home', to: 'home' },
    { text: 'About', to: 'about' },
    { text: 'Places', to: 'places' },
    { text: 'Packages', to: 'packages' },
    { text: 'Contact', to: 'contact' },

  ];

  const menuItems1 = [
    { text: 'Home', to: 'home' },
    { text: 'About', to: 'about' },
    { text: 'Places', to: 'places' },
    { text: 'Packages', to: 'packages' },

  ];



const Blog = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const classes = useStyles();
  const history=useHistory();



  const formHandler = (e) => {
    e.preventDefault();
    console.log("e",e);
    let email = e.target[0].value;
    let msg = e.target[1].value;
   
    
    let config = { 'headers' : { 'Content-Type' : 'application/json' } };
    const response = axios.post("http://localhost:8080/email",{ email:email,msg : msg });
    console.log("Response ",response);
  }
  const paperStyle = { padding: 20, height: '18vh', width: 400, margin: "10px auto",backgroundColor:"white" }
  const btnstyle = { margin: '8px 0' }
  

  return (
    <>
  
    {/* <MuiImageSlider images={images}/> */}
    <AppBar id="home"sx={{backgroundColor:"white", color:"#001c2f"}} position="static">
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
      <Typography variant="h5" color="#001c2f" paddingRight={19} href="/">
       Kashmir Travels
      </Typography>
      <Stack spacing={4} direction="row" className={classes.btn} paddingRight={50} >
  <Typography>The journey of a thousand miles begins with a single step</Typography>
   </Stack>
<Stack spacing={2} direction="row" className={classes.btn}  >
<Button type='submit'  color='primary' variant="contained" onClick={()=>{history.push('/login')}}>Login</Button>
                 
</Stack>

  
    </Toolbar>
    </Box>
  </AppBar>
    <AppBar id="home" position="static">
       <Box direction="row" sx={{paddingBlock:'8px' }}> 
    <Toolbar>
      <Stack spacing={4} direction="row" className={classes.btn} paddingLeft={68} >
      {menuItems.map((menuItem) => (
    <Link className={classes.menuItem}
      to={menuItem.to}
      spy={true}
      smooth={true}
      duration={500}
      offset={-70}
    >
      {menuItem.text}
    </Link>
  ))}
   </Stack>
    </Toolbar>
    </Box>
  </AppBar>
    <div id="home" className={classes.root} >
      <div className={classes.content}>
        
      <Stack spacing={3} direction='column' >
        <Typography variant="h3" > 
        WELCOME TO - KASHMIR TRAVEL
          </Typography>
         
        <Typography variant="h5">
        Travel is an investment in yourself
               </Typography>
               </Stack>
      </div>
    </div>


    <div id="about" className={classes.abt}>
    <Stack spacing={2} direction="row" paddingBottom={2}>
    <Button className={classes.aboutbtn}color='primary' variant="contained">About - Kashmir </Button>
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

        <div id="places" className={classes.abt}>
    <Stack spacing={2} direction="row" paddingBottom={2}>
    <Button className={classes.aboutbtn}color='primary' variant="contained">Top places to visit in Kashmir</Button>
    </Stack> 
        <Typography variant="body1" paddingBottom={5} color="black">
        Some beautiful paths can’t be discovered without getting lost
        </Typography>
        <Grid container spacing={2}>
               <Grid item xs={8}>
               <Stack spacing={2} direction="row" paddingBottom={2}>
      <Box sx={{boxShadow:"3px 5px 3px 2px #001c2f"}}>
    <Image src="https://images.pexels.com/photos/10999526/pexels-photo-10999526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={350} />
    <Stack spacing={2} direction="row" paddingBottom={2}>
    <Button className={classes.aboutbtn} color='primary' variant="contained" fullWidth sx={{boxShadow:"3px 5px 3px 2px #001c2f"}}> <StarBorderIcon/> Dal Lake, Srinagar</Button>
    </Stack> 
    </Box>
    <Box sx={{boxShadow:"3px 5px 3px 2px #001c2f"}}>
    <Image src="https://images.pexels.com/photos/2907578/pexels-photo-2907578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={350} />
    <Stack spacing={2} direction="row" paddingBottom={2}>
    <Button className={classes.aboutbtn} color='primary' variant="contained" fullWidth sx={{boxShadow:"3px 5px 3px 2px #001c2f"}}><StarBorderIcon/> Pahalgam</Button>
    </Stack> 
    </Box>
    <Box sx={{boxShadow:"3px 5px 3px 2px #001c2f"}}>
    <Image src="https://images.pexels.com/photos/10679346/pexels-photo-10679346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={350} />
    <Stack spacing={2} direction="row" paddingBottom={2}>
    <Button className={classes.aboutbtn}color='primary' variant="contained" fullWidth sx={{boxShadow:"3px 5px 3px 2px #001c2f"}}><StarBorderIcon/> Gulmarg</Button>
    </Stack> 
    </Box>
    <Box sx={{boxShadow:"3px 5px 3px 2px #001c2f"}}>
    <Image src="https://assets.cntraveller.in/photos/61eff70d4d495b4b023dc466/master/pass/parimahal%20lead.jpg" width={350} />
    <Stack spacing={2} direction="row" paddingBottom={2}>
    <Button className={classes.aboutbtn}color='primary' variant="contained" fullWidth sx={{boxShadow:"3px 5px 3px 2px #001c2f"}}><StarBorderIcon/> Parimahal</Button>
    </Stack> 
    </Box>
     </Stack>
         </Grid>
    </Grid>
    </div>




        <div id="packages" className={classes.abt}>
    <Stack spacing={2} direction="row" paddingBottom={2}>
    <Button className={classes.aboutbtn}color='primary' variant="contained">Packages</Button>
    </Stack> 
    <Stack spacing={2} direction="row" paddingBottom={2}>
        <Typography variant="h6" color='black'>
        The Kashmir region is predominantly mountainous, with deep, narrow valleys and high, barren plateaus. The relatively low-lying Jammu and Punch (Poonch) plains in the southwest are separated by the thickly forested Himalayan foothills and the Pir Panjal Range of the Lesser Himalayas from the larger, more fertile, and more heavily populated Vale of Kashmir to the north. The vale, situated at an elevation of about 5,300 feet (1,600 metres), constitutes the basin of the upper Jhelum River and contains the city of Srinagar.
        </Typography>
        </Stack>
        <Stack spacing={2} direction="row" paddingBottom={2}>
        <Card sx={{ maxWidth: 345, boxShadow:"3px 5px 3px 2px #001c2f",}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#001c2f" }} aria-label="recipe">
           KT
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Dal Lake, Srinagar"
        subheader="3 Days/ 4 Nights"
      />
      <CardContent>
        <Typography variant="body2" color="#001c2f">
        <b>Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir, India. It is an urban lake, the second largest lake in Jammu and Kashmir, and the most visited place in Srinagar by tourists and locals.</b>
        </Typography>
        <Stack spacing={2} paddingTop={2}>
        <Image src="https://images.pexels.com/photos/7965284/pexels-photo-7965284.jpeg?auto=compress&cs=tinysrgb&w=600" width={310} height={250} />
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
       <Typography>₹3500/-</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        </ExpandMore>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345, boxShadow:"3px 5px 3px 2px #001c2f"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"#001c2f" }} aria-label="recipe">
            KT
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Pahalgam"
        subheader="3 Days/ 4 Nights"
      />
      <CardContent>
        <Typography variant="body2" color="#001c2f">
        <b>Pahalgam is a hill station in the north Indian state of Jammu and Kashmir. Mountain trails run northeast to Amarnath Cave Temple, a Hindu shrine and site of the annual Amarnath Yatra pilgrimage.</b>
        </Typography>
        <Stack spacing={2} paddingTop={2}>
        <Image src="https://images.pexels.com/photos/3974271/pexels-photo-3974271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={310}  height={250} />
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography>₹4500/-</Typography>
        <ExpandMore>
        </ExpandMore>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345, boxShadow:"3px 5px 3px 2px #001c2f" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#001c2f"  }} aria-label="recipe">
            KT
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Gulmarg"
        subheader="3 Days/ 4 Nights"
      />
         <CardContent>
        <Typography variant="body2" color="#001c2f">
        <b>Gulmarg, known as Gulmarag in Kashmiri, is a town, hill station, popular tourist destination, popular skiing destination and a notified area committee in the Baramulla district in Kashmir.</b>
        </Typography>
        <Stack spacing={2} paddingTop={2}>
        <Image src="https://images.pexels.com/photos/6262935/pexels-photo-6262935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={310}  height={250} />
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography>₹4000/-</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345, boxShadow:"3px 5px 3px 2px #001c2f" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"#001c2f"  }} aria-label="recipe">
            KT
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Parimahal"
        subheader="3 Days/ 4 Nights"
      />
      <CardContent>
        <Typography variant="body2" color="#001c2f">
       <b>Pari Mahal or Peer Mahal, also known as The Palace of Fairies, is a seven-terraced Mughal garden located at the top of Zabarwan mountain range, overlooking the city of Srinagar.</b>
        </Typography>
        <Stack spacing={2} paddingTop={2}>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsqRywwB1RDPjG8l9vkbdwzd4ZeqMvtmVPkjgNU1WgaQ&usqp=CAU&ec=48600113" width={310}  height={250} />
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography>₹3000/-</Typography>
      </CardActions>
    </Card>
</Stack>

    </div>  

    <div id="contact" className={classes.abt} > 
    <Stack spacing={2} direction="row" paddingBottom={2} paddingLeft={20}>
    <Button className={classes.testibtn} color='primary' variant="contained" >Thousands of Happy Customers<br/>So throw off the bowlines, sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.</Button>
    </Stack> 
    <Stack spacing={2} direction="row" paddingBottom={2} paddingLeft={20} paddingRight={10} >
     <Box>
    <TestimonialCard 
        name={"Uvais Khan"}
        content={"We thank you all for the memorable trip. Each member of the group enjoyed every moment from start to finish and have carried back fond memories and were happy with the stay, food and service extended throughout the trip. Look forward to dealing with you in the future."}
        project={"Happy Customer"}
    />
    </Box>
    <Box>
    <TestimonialCard
        name={"Aysha Bhat"}
        content={"Thank you from all of us for a great experience. We have all been thrown in to the deep end of busy work lives again but every now and then we pause and laugh about good things that happened. We appreciate your efficient service and look forward to dealing with you in the future."}
        project={"Happy Customer"}
    />
    </Box>
    <Box>
    <TestimonialCard
        name={"Sarah Bashir"}
        content={"Many thanks for the excellent service and the skilled driver hired by you who took it as a challenge to drop us off right at the Hotel. Thank you very much for your patience and support, without which it would not have been possible.Look forward to associate with Kashmir Travel"}
        project={"Happy Customer"}
    />
    </Box>
    </Stack>
    </div>

    <div id="contact" className={classes.contact}>
        <Box className={classes.abt}>
        <Stack spacing={2} direction="row">
    <Button className={classes.aboutbtn} color='primary' variant="contained"> We would love to hear from you. Contact us, our team is always ready to support and solve your issues.
        Our business is protecting yours.Our Concern is Security.</Button>
    </Stack> 
        </Box>
    <Box className={classes.section}>
      <ScrollAnimation animateIn='fadeIn'>
        <Container maxWidth='xl'>
          <Grid container spacing={2}>
            <Grid item sm={5}>
              <Box component={Hidden} xsDown>
              <Box padding={5} className={classes.cont} paddingTop={7}> 
              <Stack spacing={1} direction='column'>
              <Typography variant="h4">
             <b>Get In Touch</b><br/>
        </Typography><br/>
              <Typography variant="body1">
              <PhoneLockedIcon />  <b>Contact :  </b> 9494949494 / 9494949494<br/>
        </Typography><br/>
        <Typography variant="body1">
        <MarkEmailReadIcon/> <b>Email :  </b>abcdfeeh@gmail.com / hsytrf@gmail.com<br/>
        </Typography><br/>
        <Typography variant="body1">
        <HomeIcon/>  <b>Address :  </b> C. Lane, Highway, Srinagar 190010<br/>
        </Typography><br/>
        </Stack><br/><br/>
        {/* <Stack spacing={2} direction='row' href="#">
      <TwitterIcon /> <FacebookIcon/> <InstagramIcon/> <SubscriptionsIcon/>
      </Stack> */}
        </Box>
              </Box>
             
            </Grid>

            <Grid item sm={5}>
              <Box component={Hidden} xsDown>
              <Box className={classes.cont} paddingTop={7}> 
              <Stack spacing={1} direction='column' sx={{textAlign:"left", color:"white"}}>
              <Typography variant="h4">
             <b>Links</b><br/>
        </Typography><br/>
        </Stack>
        <Stack spacing={2} direction="column" className={classes.btn} sx={{justifyContent:"left", display:"block"}} >
      {menuItems1.map((menuItem1) => (
    <Link className={classes.menuItem1}
      to={menuItem1.to}
      spy={true}
      smooth={true}
      duration={500}
      offset={-70}
    >
      {menuItem1.text}
    </Link>
  ))}
  </Stack>
        </Box>
              </Box>
            </Grid>
            
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
   
        </div>
      
   <Footer/>
    </>
  );
};

export default Blog;


