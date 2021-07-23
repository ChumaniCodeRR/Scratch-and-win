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
      <div className="container-fluid">
       <div className="row birthdayPage">
          <div className="col-md-12">
            <div className="row">
                <div className="col-md-12">
                  <img src={logo} className="imageLogo float-right img fluid" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className='d-flex justify-content-center'>
                      <div className='row'>
                          <div className="col-md-12">
                            <div className="row">
                              <img src={standachancetowin} className="imageDiv img-fluid" />
                            </div>
                          </div>
                      </div>
                  </div>
               </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                   <div className='d-flex justify-content-center'>
                      <div className='row'>
                          <div className="col-md-12">
                            <div className="row">
                              <div className="row-fluid birthfont">             
                                 Enter your <b className="text"> birthday</b>             
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
               </div>
             </div>
            <div className="row">
               <div className="col-md-12">
                    <div className='d-flex justify-content-center'>
                      <div className='row'>
                          <div className="col-md-12">
                            <div className="row">
                             <div className="row-fluid">
                               <form className="form"> 
                                <div className="col-md-12">
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
                              </div>
                              <div className="row-fluid"> 
                                 <button type="submit" className="buttonPlay mb-2 mx-auto" onClick={navigateTo}> PLAY NOW </button>
                                 <div className="row-fluid">
                                  <p className="buttonPlayText">SCRATCH & WIN</p> 
                                 </div>
                              </div>
                             </form> 
                            </div>
                           </div>
                        </div>
                     </div> 
                  </div>
              </div>
            </div>
            <div className="row-fluid">
               <div className="col-md-12">
                  <div className="d-flex justify-content-left">
                     <div className='row'>
                        <div className="col-md-12">
                           <div className="row-fluid rewardslogo">
                              <img src={rewardslogo} className="rewardslogo float-left img-fluid" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                   <div className="d-flex justify-content-center">
                     <div className='row'>
                       <div className="col-md-12">
                         <div className="row">
                           <div className="row-fluid terms-login"> 
                            <p>Privacy Policy | Terms & Conditions | Customer Care Line: 0861 546 4743</p>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
               </div>
            </div>
          </div> 
        </div>  
      </div>
    );
}

export default BirthDayPage