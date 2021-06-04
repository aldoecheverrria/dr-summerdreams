import './App.css';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import  ArrowForward  from '@material-ui/icons/ArrowForward';
import MenuIcon from '@material-ui/icons/Menu';
import  ArrowBack  from '@material-ui/icons/ArrowBack';
import LocalMall from "@material-ui/icons/LocalMall"
import  {IconButton}  from '@material-ui/core';

function App() {
  return (
    <div className="container">
      
      <div className="headerLeft">
        <div className="headerLeft__upper">
          <div className="logo">
            DreamSpace
          </div>
          <div className="icons">
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
            <YouTubeIcon/>
          </div>
        </div>
        <div className="texts">
          <div className="text1">New Collection</div>
          <div className="text2">2021</div>
        </div>
        <div className="textmiddle">
          <div className="textmiddle__left">SUMMER</div>
          <div className="textmiddle__right">DREAMS</div>
        </div>
      
        <div className="buttons">
          <div>Discover The Collection</div>
          <ArrowForward/>
        </div>
      </div>


      <div className="headerRight">
        <MenuIcon/>
       
      </div>
    </div>
  );
}

export default App;


/*
<div className="headerLeft__upper" >
          <div className="logo" >DreamSpace</div>
          <div className="icons" >
            <Instagram/>
            <YouTube/>
            <Facebook/>
            <Twitter/>
          </div>
        </div>

*/