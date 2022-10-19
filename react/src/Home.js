import React, { Component } from 'react';
import './home.css';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'https://vinepair.com/wp-content/uploads/2017/06/happyhour-card.jpg',
        thumbnail: 'https://vinepair.com/wp-content/uploads/2017/06/happyhour-card.jpg',
    },
    {
        original: 'https://thumbor.autonomous.ai/yDWWtchKSHrFo379SU0YQPy51YY=/1000x500/filters:quality(100)/https://cdn.autonomous.ai/static/upload/images/new_post/work-team-activities-for-your-employees-1664.jpg',
        thumbnail: 'https://thumbor.autonomous.ai/yDWWtchKSHrFo379SU0YQPy51YY=/1000x500/filters:quality(100)/https://cdn.autonomous.ai/static/upload/images/new_post/work-team-activities-for-your-employees-1664.jpg',
    },
    {
        original: 'https://www.corecounts.com/wp-content/uploads/2022/04/WORK-TEAM.jpg',
        thumbnail: 'https://www.corecounts.com/wp-content/uploads/2022/04/WORK-TEAM.jpg',
    },
];

export class Home extends Component {


    render() {
        return (

            <div className='imageback'>

                <div className="bg-secondary text-white">

                <h1>OUR COMPANY</h1>
                <h3>Welcome to the company management website, here you can add a new employee - his name, position and his picture.</h3>
                <ImageGallery items={images} />
                </div>
             

            </div>
        );
    }
}