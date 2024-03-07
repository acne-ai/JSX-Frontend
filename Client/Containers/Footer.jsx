import App from '../App.jsx';
import React from 'react';

const Footer =()=>{
  return(
    <footer className="footer p-10 bg-white text-black">
      <nav>
        <h6 className="footer-title">Services</h6> 
        <a href="/tool" className="link link-hover">Tool</a> {/* Redirect to /tool */}
      </nav> 
      <nav>
        <h6 className="footer-title">Company</h6> 
        <a href="/about" className="link link-hover">About us</a> {/* Redirect to /about */}
        <a href="mailto:hammerjack527@gmail.com" className="link link-hover">Contact</a> {/* Send email */}
      </nav> 
      <nav>
        <h6 className="footer-title">Legal</h6> 
        <a className="link link-hover">Cookie policy = NO COOKIES!</a>
      </nav>
    </footer> 
  );
  }
  
  export default Footer;