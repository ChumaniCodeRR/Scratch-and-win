import React, { useState ,useRef} from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import CardActions from "@material-ui/core/CardActions";
import "./Login.css";
import { useHistory } from 'react-router-dom';
import rewardslogo from '../image/rewardslogo.PNG';
import logo from '../image/kingpielogo-removebg-preview.png';
import icons from '../image/icons.PNG';
import image from '../image/imageedit_1_4765382172.png';
import image1 from '../image/imageedit_3_7930458612.png';

const Login = () => {

  const history = useHistory();
  const navigateTo = () => history.push('/BirthDayPage');

    return (
     
        <div className="main-bg">
         
           <div className="paper1">
             <div className="logo">
              <img src={logo} className="imageLogo"/>
             </div>
             <div className="image-paper1">
               <div className="LoginImage">
                 <img src={rewardslogo} className="LoginImage" />
               </div>
             </div><br/>
             <div className="inside-paper1">
               <div className="loginFont">
                <p>Login or Register <b className="text">Below</b></p> 
              </div>
              <p></p>
              <form className="form">  
               <input className="textboxField" type="text" label="Cell Number" name="cellnumber" placeholder="Cell Number" />
              <p></p>
              <div>
              <button
                type="submit"
                onClick={navigateTo}
                className="buttonSubmit"
              >
                Send OTP
              </button>
                <div className=""> 
                  
                </div>
               </div>
              </form>
             </div>
          </div>
          <div className="rewards">
            <div className="rewards-1">
              <div className="text-rewards">
                 GET REWARDS WITH INSTANT <br/>
               </div>
               <div className="text-rewards2">
                 SAVINGS EVERY TIME TOU PURCHASE
               </div><br/>
               <div className="text-rewards3">
                 Receive instant savings in King Pie crowns every time you purchase from your nearest King Pie store.     
               </div>
               <div className="text-rewards4">
                 Thats's not all, we have loads of great Royal Reward benefits just for you.
               </div><br/>
             </div>
          </div>   
          <div className="visit1">
             <div className="text-visit">
               <p color="white">EVERY VISIT IS A CHANCE TO BE REWARDED</p>
             </div>
             <div className="text-visit2">
               <p color="white">Why should you join</p>
             </div>
             <div >
               
             </div>
          </div>
        </div>
    )
}

export default Login;