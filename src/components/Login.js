import React, { useState ,useRef} from "react";
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


  const mystyle = {
    //margin-top: -20px,
    width:"150px",
    height: "150px",
    border: "50%",
  
    
  }; 

  return (
    
  <div className="container-fluid">
    <div className="row paper1">
        <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
               <img src={logo} className="imageLogo float-right img fluid" />
             </div>
            </div>
            <div className="row LoginImage">
              <div className="col-md-12">
                <div className="row">
                 <img src={rewardslogo} className="LoginImage float-center img fluid" />
               </div>
             </div>
           </div>
            <div className="row inside-paper1">
              <div className="col-md-12">
                <div className="row loginFont">
                  <p>Login or Register <b className="text">Below</b></p> 
                 </div>
                 <form className="form">  
                  <input className="textboxField" type="text" label="Cell Number" name="cellnumber" placeholder="Cell Number" />
                   <p></p>    
                  <button type="submit" onClick={navigateTo} className="buttonSubmit">Send OTP </button>
                </form>
              </div>
           </div>
            <div className="row">
             <div className="col-md-12">
                <div className="terms-login"> 
                 <br/>
                  <p className="text-center">Privacy Policy | Terms & Conditions | Customer Care Line: 0861 546 4743</p>
                </div>
             </div>
          </div>
        </div>
    </div>
    <div className="row rewards">
      <div className="col-md-12">
        <div className="row rewards-1">
           <div className="col-md-12">
                <div className="row text-rewards">
                 GET REWARDS WITH INSTANT <br/>
               </div>
               <div className="row text-rewards2">
                 SAVINGS EVERY TIME TOU PURCHASE
               </div><br/>
               <div className="row text-rewards3">
                 Receive instant savings in King Pie crowns every time you purchase from your nearest King Pie store.     
               </div>
               <div className="row text-rewards4">
                 Thats's not all, we have loads of great Royal Reward benefits just for you.
               </div><br/>
           </div>
        </div>
     </div>
    </div>
    <div className="row visit1">
      <div className="col-md-12">
          <div className="row text-visit">
               <p color="white">EVERY VISIT IS A CHANCE TO BE REWARDED</p>
          </div>
          <div className="row text-visit2">
               <p color="white">Why should you join</p>
          </div>
      </div>
    </div>
  </div>
   
    
   /*
       <div className="container">
         <div className="row paper1">
           <div className="col-md-12">
             <div className="row">
              <div className="col-12">
               <img src={logo} className="float-right" />
             </div>
            </div>
           </div>
           <div className="row justify-content-center">
             <div className="col-md-12">
              <div class="row image-paper1">
                 <div className="col-12">
                  <div className="row LoginImage">
                    <img src={rewardslogo} className="LoginImage" />
                  </div>
                 </div>
              </div>
             </div>
            </div> 
             <div className="col-md-12">
              <div className="row">
                <div className="col-12">
                 <div className="loginFont">
                  <p>Login or Register <b className="text">Below</b></p> 
                 </div>
                </div>
              </div>
             </div>
             <div className="col-md-12">
               <div className="row">
                 <div className="col-12">
                 <form className="form">  
               <input className="textboxField" type="text" label="Cell Number" name="cellnumber" placeholder="Cell Number" />
              <p></p>
              <div>
              <button
                type="submit"
                onClick={navigateTo}
                className="btn buttonSubmit"
              >
                Send OTP
              </button>
               </div>
              </form>
                 </div>
               </div>
             </div>
           
         </div>
         <div className="row"></div>
         <div className="row"></div>

         { <div className="name">
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
                className="btn btn-primary"
              >
                Send OTP
              </button>
                
               </div>
              </form>
              <div className="terms-login"> 
                  <p>Privacy Policy | Terms & Conditions | Customer Care Line: 0861 546 4743</p>
              </div>
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
        </div> }
       </div>*/

        
    )
}

export default Login;