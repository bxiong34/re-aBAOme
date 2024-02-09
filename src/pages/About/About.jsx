import React from 'react';
import avatar from '../../assets/avatar.png';
import './About.css';

export default function About() {
  return (
    <div>
      <div>
        <h1>About Me</h1>
        <div>
        <img src={avatar} alt="Avatar" className='avatar-img'/>
      </div>
        <p className='intro'>
        My name is Bao Xiong, and I'm currently immersing myself in the world of coding at a bootcamp. The dynamic nature of the coding industry is what truly captivates me. There's a sense of gratification that comes from watching my work take form and seeing how users engage with it. My primary objective is to craft innovative, responsive, and user-friendly applications. But beyond that, my focus is always on the user experience. I strive to ensure that my applications are accessible, intuitive, and visually appealing.
        </p>
      </div>
    </div>
  );
}