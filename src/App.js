import './App.css';
import YouTube from '@material-ui/icons/YouTube';
import Instagram from '@material-ui/icons/Instagram';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import  ArrowForward  from '@material-ui/icons/ArrowForward';
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
            <Instagram/>
            <YouTube/>
            <Facebook/>
            <Twitter/>
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
        <div className="headerRight__container">
          <div className="headerRight__container1">container1</div>
          <div className="headerRight__container2">container2</div>
          <div className="headerRight__container3">container3</div>
          <div className="headerRight__container4">container4</div>
          <div className="headerRight__container5">
            <div className="productContainer">
              <div className="productDetails">
                <h6>Chinesse Sweater <LocalMall/></h6>
                
                <h5>$120.90</h5>
              </div>
                <div className="arrows">
                  <IconButton>
                    <ArrowBack/>
                  </IconButton>
                <IconButton>
                  <ArrowForward/>
                </IconButton>
            </div>
            </div>
            
          </div>
        </div>
       
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