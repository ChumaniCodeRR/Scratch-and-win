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
import DatePicker from 'react-date-picker';
import { useHistory } from 'react-router-dom';
import rewardslogo from '../image/rewardslogo.PNG';
import standachancetowin from '../image/standachancetowin.png';
import logo from '../image/kingpielogo-removebg-preview.png';

const BirthDayPage = () => {

    const [value, onChange] = useState(new Date());

    const history = useHistory();
    const navigateTo = () => history.push('/ScratchOff');

    return (    
        <div className="main-bg">            
            <div className="birthdayPage">
            <div className="logo">
              <img src={logo} className="imageLogo"/>
            </div>
              <div className="birthImage">
                 <img src={standachancetowin} className="imageDiv"/>
              </div>
              <div className="birthfont">             
                  Enter your <b className="text">birthday</b>             
              </div>
              <br/>
              <div className="textBirthDay">
                <div class="field-inline-block">
                  <input type="text" pattern="[0-9]*" maxlength="1" placeholder="Y" size="1" class="date-field" />
                </div>
                <div class="field-inline-block">
                   <input type="text" pattern="[0-9]*" maxlength="1" placeholder="Y" size="1" class="date-field" />
                </div>
                <div class="field-inline-block">
                   <input type="text" pattern="[0-9]*" maxlength="1" placeholder="Y" size="1" class="date-field" />
                </div>
                <div class="field-inline-block">
                   <input type="text" pattern="[0-9]*" maxlength="1" placeholder="Y" size="1" class="date-field" />
                </div>
                <div class="field-inline-block"><p className="layer">-</p></div>
                <div class="field-inline-block">
                   <input type="text" pattern="[0-9]*" maxlength="1" placeholder="M" size="1" class="date-field" />
                </div>
                <div class="field-inline-block">
                   <input type="text" pattern="[0-9]*" maxlength="1" placeholder="M" size="1" class="date-field" />
                </div>
                <div class="field-inline-block"><p className="layer">-</p></div>
                <div class="field-inline-block">
                   <input type="text" pattern="[0-9]*" maxlength="1" placeholder="D" size="1" class="date-field" />
                </div>
                <div class="field-inline-block">
                   <input type="text" pattern="[0-9]*" maxlength="1" placeholder="D" size="1" class="date-field" />
                </div>
              </div><br/>
              <div>
                 <button type="submit" className="buttonPlay" onClick={navigateTo}> PLAY NOW </button>
                  <div className="buttonPlayText">
                     <p>SCRATCH & WIN</p>
                  </div>
              </div>
              <div className="rewardslogo">
                 <img src={rewardslogo} className="rewardslogo" />
              </div>
              <div className="terms">
                <p>Privacy Policy | Terms & Conditions | Customer Care Line: 0861 546 4743</p>
              </div>
            </div>           
        </div>
    );
}

export default BirthDayPage