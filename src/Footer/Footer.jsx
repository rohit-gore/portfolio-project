import React from 'react';
import './footer.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='footer_head'>
                <span>Contact Me</span>
            </div>
            <div className='footer_wrap'>
                <div className='footer_call'>
                    <span>CALL</span>
                    <span>9336754117</span>
                </div>
                <div className='footer_email'>
                    <span>Email</span>
                    <span>ayushraj0607@gmail.com</span>
                </div>
            </div>
            <div className='footer_end'>
                <span>The aim of the developer should not only to understand the technology but also to master it.</span>
                <a href="https://github.com/ayushsingh0607" target='_blank'><AiFillGithub size="3rem" /></a>
                <a href="https://www.linkedin.com/in/ayush-raj-9b4255209/" target='_blank'><AiFillLinkedin size="3rem" /></a>
            </div>
        </div>
    )
}

export default Footer