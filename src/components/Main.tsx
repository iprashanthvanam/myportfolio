import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SiLeetcode } from "react-icons/si";
import image from '../assets/images/image.jpeg';
import '../assets/styles/Main.scss';

const LeetcodeIcon = SiLeetcode as unknown as React.ComponentType<{ size?: number | string }>;
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* <img src="C:\Users\prash\Desktop\react-portfolio-template\src\assets\images\image.jpeg" alt="Avatar" /> */}
          <img src={image} alt="my Logo" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/iprashanthvanam/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/iprashanthvanam/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://leetcode.com/u/iprashanthvanam/" target="_blank" rel="noreferrer"><LeetcodeIcon size={24} /></a>
          </div>
          <h1>Prashanth Vanam</h1>
          <p>Software Developer</p>
          

          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://leetcode.com/u/iprashanthvanam/" target="_blank" rel="noreferrer"><LeetcodeIcon size={24} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;