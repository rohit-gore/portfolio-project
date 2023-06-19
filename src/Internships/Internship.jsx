import React from 'react';
import './internship.css';
import intern from '../assests/intern.jpeg';
import geek from '../assests/img5.png';

const Internship = () => {
    const data = [
        { id: 1, img: intern, title: "Internship Certificate" },
        { id: 2, img: geek, title: "Geek Week Hackathon" },

    ]
    return (
        <div className='intern_container' id='Internship'>
            <div className='intern_head'>
                <span>Personal Achievements</span>
            </div>
            <div className='intern_wrap' style={{position:'relative'}}>
                {data.map((value, i) => (
                    <div className='intern_details'>
                        <div className='intern_img'>
                            <img src={value.img} alt="internship" />
                        </div>
                        <span>{value.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Internship