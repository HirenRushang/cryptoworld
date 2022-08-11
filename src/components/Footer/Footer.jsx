import React from "react";
import "./Footer.css";
import {AiFillFacebook} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <div className="container-fluid footer_wrapper">
      <div className="container footer_section">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 footer_web_about">
            <p className="footer_title">Foolish Developer</p>
            <p className="footer_title_about">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dumm
            </p>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 footer_social_link_column">
            <div className="footer_social_link">
           <div><AiFillFacebook style={{fontSize:"40px"}} /></div>
           <div><AiFillInstagram style={{fontSize:"40px"}} /></div>
           <div><AiFillLinkedin style={{fontSize:"40px"}}/></div>
           </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 footer_news_letter">
            <p>Newsletter</p>
            <div className="footer_news_input_box">
            <input type="text" placeholder="Write your Email" />
            <button>Subscribe</button>
            </div>
            
          </div>
        
        </div>

        <hr></hr>

        <div className="row">
          <div className="col-xxl-12 madeby_me">
            <p>Made by Hiren Patel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
