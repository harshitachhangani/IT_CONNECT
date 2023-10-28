import React from 'react';
import { Grid, Typography, Card, CardContent, makeStyles, Button } from "@material-ui/core";
import robotImage from "./robot.png"; // Replace with your image URL
import star from "./Star.svg"; // Replace with your icon URLs
import shield from "./Shield.svg";
import send from "./Send.svg";
import './styles.css';
import card from "./card.png";
import { feedback } from '../constants'
import Feedback from './Feedback';
import Clients from './Clients';
import { clients } from '../constants'
import { quotes } from '../assets'
import Footer from './Footer';
import { useMediaQuery } from '@material-ui/core';



const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewarding Opportunities",
    content:
      "At ITConnect, we provide freelancers and developers with rewarding opportunities that combine promotions and prizes to enhance your career journey.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Secured Collaborations",
    content:
      "Your security matters. We take proactive measures to ensure that your information and transactions are protected, fostering a secure environment for collaboration.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Streamlined Project Transfers",
    content:
      "Managing projects becomes effortless. With our streamlined process, you can transfer projects seamlessly, optimizing efficiency and saving valuable time and resources.",
  },
];

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "black", // Background color of the cards
    color: "white",
    padding: theme.spacing(2), // Adjust padding here
    borderRadius: theme.spacing(2), // Add rounded corners
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)", // Add a subtle box shadow
  },

  leftSection: {
     textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2), // Increase left margin
    },
  },
  button: {
    marginTop: theme.spacing(2),
  },
  topPadding: {
    paddingTop: theme.spacing(2),
  },

  topPadding: {
    paddingTop: theme.spacing(4), // Add top padding between image and cards
  },
  cardText: {
    fontSize: "15px", // Increase font size
    color: "white", // Set text color to white
  },
  cardTitle: {
    color: "#4fc3f7", // Set the title color to sky blue
  },
  leftSection: {
    padding: "30px",
  },
  button: {
    marginTop: "20px",
    backgroundColor: "#4fc3f7",
    color: "white",
    "&:hover": {
      backgroundColor: "#3f8cb5",
    },
  },
}));

const Welcome = (props) => {
  const classes = useStyles();

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <section
      id="home"
      style={{
        background: "black",
        color: "white",
        padding: "40px 30px",
        paddingLeft: "40px",
        position: "relative",
        // Media query for small screens
        '@media (max-width:600px)': {
          padding: "40px 30px", // Adjust the values as needed for small screens
        },
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={6}>
        <div className={classes.leftSection}  style={{
        // Media query for small screens
        '@media (max-width:600px)': {
          paddingLeft: "100px", // Adjust the values as needed for small screens
        },
      }}>
          <h1
            style={{
              fontSize: '44px',
              fontWeight: 'bold',
              lineHeight: '60px',
              marginTop: '0',
              color: '#30e4e1', // Set font color to red
              fontStyle: 'italic', // Set font style to italic
              
            }}
          >
            ITConnect -<br />A Virtual Company
          </h1>
          <Typography
            variant="body1"
            style={{
              fontSize: '20px',
              marginTop: '30px',
              lineHeight: '1.6',
              textAlign: 'justify', // Set text alignment to justify
            }}
          >
            Are you looking to get hired? Why not take an AI-based test to
            showcase your skills and stand out from the crowd! Unlock your
            potential with AI-based tests for hiring success. Embrace the
            future, showcase your skills, and stand out!
            <br />
            In today's competitive job market, it's crucial to demonstrate
            your expertise. Our AI-powered testing platform allows you to
            highlight your capabilities and increase your chances of landing
            your dream job.
            <br />
            Join us in this exciting journey toward career excellence.
          </Typography>
          <Button variant="contained" className={classes.button}>
            Learn More
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.topPadding}>
        {/* Add your image here */}
        <img
          src={robotImage} // Replace with your image URL
          alt="Company Image"
          style={{ width: '80%',
           height: 'auto' ,
           
        }} // Adjust the width and height as needed
        />
      </Grid>
    </Grid>

      {/* Stats section */}
      <Grid container spacing={2} justify="center">
        {stats.map((stat) => (
          <Grid item xs={12} sm={4} key={stat.id}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2" className={classes.cardText}>
                  {stat.value}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" className={classes.cardTitle}>
                  {stat.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Features section */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className={classes.leftSection}>
            <Typography variant="h4" gutterBottom>
              Your Projects,
              <br />
              Our Talent Ecosystem.
            </Typography>
            <Typography variant="body1" paragraph style={{ fontSize: "20px", textAlign: "justify" }}>
              At ITConnect, we understand the value of your time and expertise. Focus on your business goals while we take care of your financial needs. With the right solutions, you can enhance your financial journey by building credit, earning rewards, and optimizing savings. Navigate the vast landscape of financial options confidently, even with countless choices available. Let us empower you with the tools and guidance to make informed decisions.
            </Typography>

            <Button variant="contained" className={classes.button}>
              Learn More
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          {features.map((feature) => (
            <Card key={feature.id} className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2" className={classes.cardTitle}>
                  {feature.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" className={classes.cardText}>
                  {feature.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>

      {/* carddeal section */}
      <section className="section">
  <div className="sectionInfo">
    <h2 className="heading2">Discover Ideal Roles <br className='sm:block hidden'/>in few easy steps.</h2>
    <p className="paragraph max-w-470 mt-5 text-justify">
      Ready for a more fulfilling career? Unlock opportunities by identifying your strengths, 
      exploring new industries, and connecting with professionals. 
      Tailor your skills and passions to find the role that suits you best.
    </p>
    <button type='button' className=" bg-blue-gradient font-poppins font-medium text-18 text-primary outline-none rounded-10     padding: 10px;
     "  style={{ width: '136px', color: 'white', padding: '10px' }}>
      View Roles
    </button>
  </div>
  <div className="sectionImg">
    <img
      src={card}
      alt='card'
      className='w-100 h-100'
    />
  </div>
</section>

<section id='clients' className='paddingY flexce flex-col relative'>
<div className='w-full flex justify-between items-center md:flex-row flex-col mb-6 relative z-1' style={{display: 'flex', paddingLeft: '58px'}}>
  <h2 className='font-poppins font-semibold text-[48px] text-[40px] text-white leading-[76.8px] leading-[66.8px] w-full'>
    What our clients have to say
  </h2>
  <div className='w-full mt-6'>
  <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-left max-w-[500px]' style={{padding: '46px 78px'}}>
      Discover how Virtual IT Company has revolutionized their business with cutting-edge virtual technology and unparalleled support.
    </p>  
  </div>
</div>
        
</section>
<div className='feedback-container'>
  {feedback.map((card) => (
    <div className='feedback-card' key={card.id}>
      <img
        src={quotes}
        alt='double-quotes'
        className='quotes-icon'
      />
      <p className='feedback-content'>
        {card.content}
      </p>
      <div className='flex-row'>
        <img
          src={card.img}
          alt={card.name}
          className='profile-image'
        />
        <div className='info'>
          <h4 className='name'>{card.name}</h4>
          <p className='title'>{card.title}</p>
        </div>
      </div>
    </div>
  ))}
</div>



{/* Clients */}
<section id="clients" className="my-4 flexCenter">
  <div className="flexCenter">
    {clients.map((client) => (
      <div key={client.id} className="mx-2">
        <img
          src={client.logo}
          alt="client"
          className="w-111 h-auto object-contain"
        />
      </div>
    ))}
  </div>
</section>


  {/* CTA */}
  <section className="section-box">
  <div className="content">
    <h2>Let's try our service now!</h2>
    <p>
      Everything you need is Sign up, Choose role, Apply, Give test and Grab Opportunity!
    </p>
  </div>
  <div className="button-wrapper">
    <button type="button" className="apply-button">
      Apply Now
    </button>
  </div>
</section>
<Footer />





    </section>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;





