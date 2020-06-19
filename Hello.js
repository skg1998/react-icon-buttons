import React from 'react';
import { FiFacebook } from 'react-icons/fi';
import {FaGithub ,FaLinkedinIn , FaStackOverflow ,FaInstagram} from 'react-icons/fa';

export default ({ name }) => {
  return(
    <section className="social-links">
    <div class="social-link icon">
    <FiFacebook />
    </div>
    <div class="social-link icon">
    <FaGithub />
    </div>
    <div class="social-link icon">
    <FaLinkedinIn />
    </div>
    <div class="social-link icon">
    <FaStackOverflow />
    </div>
    <div class="social-link icon">
    <FaInstagram />
    </div>
     </section>
  )
  
  };
