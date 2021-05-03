import React from "react";

import './styles.css'
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


export default function Footer() {

  const year = new Date().getFullYear()

    
        return (
            <footer style={{ backgroundColor: '#eeeeee', width: '100%', marginTop: '2%' }}>
            <br></br>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button id="btn">
              Check the Code
              </Button>
              <Button id="btn">
              Contact the Author
              </Button>
            </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2%' }}>
                        <GitHubIcon/>
                        <YouTubeIcon/>
                        <TwitterIcon/>
                        <FacebookIcon/>
                        <InstagramIcon/>
                        <LinkedInIcon/>
                </div>
                <p style={{ textAlign: 'center' }}>Copyright &copy; {year}.</p>
            </footer>
        );
}