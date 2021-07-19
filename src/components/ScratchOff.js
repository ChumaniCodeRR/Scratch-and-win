import React from 'react';
import { useHistory } from 'react-router-dom';
import { render } from 'react-dom';
import rewardslogo from '../image/rewardslogo.PNG';
import './Login.css';
import logo from '../image/kingpielogo-removebg-preview.png';
import winlogo from '../image/win.png';
import crownswin from '../image/crownswin.png';

const noop = o => o;

class ScratchOff extends React.PureComponent {

    static defaultProps = {
        onReveal: noop
    }

    constructor(props) {
        super(props);
        this.isDrawing = false;
        this.lastPoint = null;
        this.touchStart = this.touchStart.bind(this);
        this.touchMove = this.touchMove.bind(this);
        this.touchEnd = this.touchEnd.bind(this);
    }

    componentDidMount() {    
    
        const canvas = this.canvas;
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    
        canvas.addEventListener('mousedown', this.touchStart);
        canvas.addEventListener('touchstart', this.touchStart);
        canvas.addEventListener('mousemove', this.touchMove);
        canvas.addEventListener('touchmove', this.touchMove);
        canvas.addEventListener('mouseup', this.touchEnd);
        canvas.addEventListener('touchend', this.touchEnd);
        
        this.ctx = canvas.getContext('2d');
        
        this.brush = new Image();
        this.brush.src = require('../image/brush.png');
    
        this.cover = new Image();
        this.cover.src = require('../image/Gamification-03.jpg');
        this.cover.onload = () => this.ctx.drawImage(this.cover, 0, 0, canvas.width, canvas.height);
      }

      componentWillUnmount() {
        const canvas = this.canvas;
        canvas.removeEventListener('mousedown', this.touchStart);
        canvas.removeEventListener('touchstart', this.touchStart);
        canvas.removeEventListener('mousemove', this.touchMove);
        canvas.removeEventListener('touchmove', this.touchMove);
        canvas.removeEventListener('mouseup', this.touchEnd);
        canvas.removeEventListener('touchend', this.touchEnd);
      }

      getPosition(event) {
    
        let target = this.canvas;
        let offsetX = 0;
        let offsetY = 0;
        
        if (target.offsetParent !== undefined) {
          while (target = target.offsetParent) {
            offsetX += target.offsetLeft;
            offsetY += target.offsetTop;
          }
        }
    
        const x = (event.pageX || event.touches[0].clientX) - offsetX;
        const y = (event.pageY || event.touches[0].clientY) - offsetY;
        return {x, y};
      }

      touchStart(event) {
        this.isDrawing = true;
        this.lastPoint = this.getPosition(event);
        this.ctx.globalCompositeOperation = 'destination-out';
      }

      touchMove(event) {

        if (!this.isDrawing) return;
        event.preventDefault();
    
        const ctx = this.ctx;    
        const a = this.lastPoint;
        const b = this.getPosition(event);
        const dist = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
        const angle = Math.atan2(b.x - a.x, b.y - a.y);
        const offsetX = this.brush.width / 2;
        const offsetY = this.brush.height / 2;
        
        for (let x, y, i = 0; i < dist; i++) {
          x = a.x + (Math.sin(angle) * i) - offsetX;
          y = a.y + (Math.cos(angle) * i) - offsetY;
          ctx.drawImage(this.brush, x, y);
        }
    
        this.lastPoint = b;
      }

      touchEnd(event) {
        this.isDrawing = false;
      }

      render() {
     
        function App() {
          let history = useHistory();
          history.push('/Login')
        }

        const min = 100;
        const max = 100000;
        //const rand = min + Math.random().toString(4).slice(2, 7).toUpperCase() * (max - min);
        const rand = Math.floor(Math.random(16) * (max - min + 1)) + min;
        //this.setState({ random: this.state.random + rand });
        //const secret = Math.random().toString(16).slice(2, 7).toUpperCase();
         
        return (
           
          <div style={{position:'relative',width:1535,opacity:1.0,height:750}}>     
            <canvas style={{position:'absolute',zIndex:2,width:'100%',height:'100%'}} ref={el => this.canvas = el} />
            <div className="secret absolute fill no-select flex justify-center items-center">
              {this.props.children}   
            </div>
           <div className="scratchPage">  
            <div>
               <button type="submit" className="homebutton" onclick={App}>Home</button>
            </div>
            <div className="logo">
              <img src={logo} className="imageLogo"/>
            </div>
            <div className="crownwins">
              <img src={crownswin} className="imageDiv"/>
              <b className="crownstext">{rand} CROWNS!</b>
            </div>
            <div className="win">
              <img src={winlogo} className="win"/>
            </div>
            <div className="scratchandwinlogo">
                 <img src={rewardslogo} className="scratchandwinlogo" />
            </div>
           </div>
         </div>   
        );
      }
}

//const secret = Math.random().toString(16).slice(2, 7).toUpperCase();
//const root = document.createElement('div');
//document.body.appendChild(root);
//render(<ScratchOff>{secret}</ScratchOff>, root);

export default ScratchOff