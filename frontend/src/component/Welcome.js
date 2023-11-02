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


import people01 from "./people01.png";
import people02 from "./people02.png";
import people03 from "./people03.png";

import amazon from "./amazon.png";
import microsoft from "./microsoft.png";
import facebook1 from "./facebook1.png";
import google1 from "./google1.png";

import './welcome.css';




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
    <div>
      <div className="hero-section">
      <div className="hero-content">
        <div className="left-content">
          <h1 className="company-title">IT CONNECT</h1>
          <p className="intro">
            Are you looking to get hired? Why not take an AI-based test to showcase your skills and stand out from the crowd! Unlock your potential with AI-based tests for hiring success. Embrace the future, showcase your skills, and stand out!
            <br /><br />
            In today's competitive job market, it's crucial to demonstrate your expertise. Our AI-powered testing platform allows you to highlight your capabilities and increase your chances of landing your dream job.
            <br /><br />
            Join us in this exciting journey toward career excellence.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="right-content">
          <img src={robotImage} alt="Company Image" />
        </div>
      </div>
    </div>

    <section class="stats-section">
    <div class="stat-box">
      <h4 class="stat-value">3800+</h4>
      <p class="stat-title">User Active</p>
    </div>
    <div class="stat-box">
      <h4 class="stat-value">230+</h4>
      <p class="stat-title">Trusted by Company</p>
    </div>
    <div class="stat-box">
      <h4 class="stat-value">$230M+</h4>
      <p class="stat-title">Transaction</p>
    </div>
  </section>

  <section class="section">
    <div class="sectionInfo">
      <h2 class="heading2">Your Projects,<br></br> Our Talent Ecosystem.</h2>
      <p class="paragraph">
        At ITConnect, we understand the value of your time and expertise. Focus on your business goals while we take care of your financial needs. With the right solutions, you can enhance your financial journey by building credit, earning rewards, and optimizing savings. Navigate the vast landscape of financial options confidently, even with countless choices available. Let us empower you with the tools and guidance to make informed decisions.
      </p>
      <button type="button" class="btn-small">Learn More</button>

    </div>
    <div class="sectionImg">
      <div class="feature-card">
        <img src={star} alt="Icon 1" />
        <div>
          <h4>Rewarding Opportunities</h4>
          <p>
            At ITConnect, we provide freelancers and developers with rewarding opportunities that combine promotions and prizes to enhance your career journey.
          </p>
        </div>
      </div>
      <div class="feature-card">
        <img src={shield} alt="Icon 2" />
        <div>
          <h4>Secured Collaborations</h4>
          <p>
            Your security matters. We take proactive measures to ensure that your information and transactions are protected, fostering a secure environment for collaboration.
          </p>
        </div>
      </div>
      <div class="feature-card">
        <img src={send} alt="Icon 3" />
        <div>
          <h4>Streamlined Project Transfers</h4>
          <p>
            Managing projects becomes effortless. With our streamlined process, you can transfer projects seamlessly, optimizing efficiency and saving valuable time and resources.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="card-deal-section">
    <div class="sectionInfo">
      <h2 class="heading2">Discover Ideal Roles</h2>
      <p class="paragraph">
        Ready for a more fulfilling career? Unlock opportunities by identifying your strengths, exploring new industries, and connecting with professionals. Tailor your skills and passions to find the role that suits you best.
      </p>
      <button type="button" class="btn">View Roles</button>
    </div>
    <div class="sectionImgcard">
      <img src={card} alt="card" />
    </div>
  </section>


  <section class="testimonial-section">
    <div class="bg-circle-testimonial"></div>
    <h2 class="heading2-testimonial">What our clients have to say</h2>
    <p class="paragraph-testimonial">
      Discover how Virtual IT Company has revolutionized their business with cutting-edge virtual technology and unparalleled support.
    </p>
    <div class="feedback-container-testimonial">
  <div class="feedback-card-testimonial">
    <img src={people01} alt="Person 1" />
    <h4>Harshita Chhangani</h4>
    <p>CEO, TechPro Solutions</p>
    <p>
      Virtual IT Company transformed our business. Top-notch virtual technology and team collaboration tools streamlined operations efficiently.
    </p>
  </div>
  <div class="feedback-card-testimonial">
    <img src={people02} alt="Person 2" />
    <h4>Vaishnavi Arthamwar</h4>
    <p>CTO, InnovateX</p>
    <p>
      Best decision partnering with Virtual IT Company. Cloud computing and AI-based solutions improved productivity, reduced costs.
    </p>
  </div>
  <div class="feedback-card-testimonial">
    <img src={people03} alt="Person 3" />
    <h4>Akshay Chame</h4>
    <p>Co-Founder, NexGen Startups</p>
    <p>
      Reliable IT support for startups. Virtual IT Company's flexible plans enable focus on growth and innovation.
    </p>
  </div>
</div>
  </section>
  <section id="clients" class="my-4 flexCenter">
    <div class="flexCenter">
      <div class="client-logo mx-2">
        <img src={amazon} alt="Amazon Logo" />
      </div>
      <div class="client-logo mx-2">
        <img src={microsoft} alt="Microsoft Logo" />
      </div>
      <div class="client-logo mx-2">
        <img src={google1} alt="Google Logo" />
      </div>
      <div class="client-logo mx-2">
        <img src={facebook1} alt="Facebook Logo" />
      </div>
    </div>
  </section>

  <section class="cta-container">
    <div class="cta-section">
      <div class="cta-content">
        <h2>Let's try our service now!</h2>
        <p>Everything you need is Sign up, Choose a role, Apply, Give a test, and Grab an opportunity!</p>
      </div>
      <div class="cta-button">
        <button type="button">Apply Now</button>
      </div>
    </div>
  </section>

  <footer>
  <div class="footer-container">
    <p>&copy; 2023 Your Website Name</p>
  </div>
</footer>


    </div>

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





