import React from 'react';
import downloadimg from '../../assets/icon-downloads.png';
import ratingimg from '../../assets/icon-ratings.png';
import { NavLink } from 'react-router';

const Apps = ({app}) => {
     const linkadd = "https://hero-apps.pages.dev";
    let {image, title, ratingAvg, downloads} = app;
    // image = linkadd + image;
   
    return (
        <div>
            <NavLink to={`/appDetails/${app.id}`}>
                <div className="card bg-white shadow-sm p-3 hover:scale-105 transition ease-in-out">
                    <figure className='h-48 overflow-hidden rounded-2xl'>
                        <img className='w-full object-cover'
                            src={linkadd + image}
                            alt="Shoes" />
                    </figure>
                    <div className='mt-2'>
                        <p>{title}</p>
                        <div className="card-actions justify-between mt-2">
                            <div className="badge text-[#00D390] bg-[#F1F5E8]"><img className='h-[15px] w-[15px]' src={downloadimg} alt="" />{downloads}</div>
                            <div className="badge  text-[#FF8811] bg-[#FFF0E1]"><img className='h-[15px] w-[15px]' src={ratingimg} alt="" />{ratingAvg}</div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default Apps;