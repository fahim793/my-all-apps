import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import downloadimg from '../../assets/icon-downloads.png';
import ratingimg from '../../assets/icon-ratings.png';
import logoimg from '../../assets/logo.png'


const AllApps = () => {
    const data = useLoaderData();
    // console.log(data)
    const dataArray = Array.isArray(data) ? data : [];
    const linkadd = "https://hero-apps.pages.dev";
    // let {image, title, ratingAvg, downloads} = data;
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const term = search.trim().toLowerCase();
    const searchApps = term ? dataArray.filter(app => app.title.toLowerCase().includes(term)) : data;
    // console.log(searchApps)

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 500)
    }

    if (!searchApps || searchApps.length === 0) {
        return (<div className='flex flex-col items-center mt-14'>
            <h2 className='text-3xl font-bold'>Apps Not Found</h2>
           <button onClick={() => setSearch('')} className='btn btn-primary mt-5'>Go Back</button>
        </div>
        )
    }


    return (
        <div>
            <div className='mt-14 pb-10 max-w-6xl mx-auto'>

                <div className='flex flex-col items-center'>
                    <h2 className='text-3xl font-bold'>Our All Applications</h2>
                    <p className='mt-3 text-[#627382] text-xs'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex justify-between items-center mt-10 mb-5'>
                    <h3 className='text-xl font-bold'>({searchApps.length}) Apps Found</h3>
                    <label className="input w-[200px]">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input value={search} onChange={handleSearch} type="search" required placeholder="Search Apps" />
                    </label>
                </div>

                {loading ? (<div className='flex flex-col items-center mx-auto text-center my-14'>
                    <h2 className='text-4xl font-bold flex items-center'>L<span className='ml-2 animate-spin'><img className='mx-auto h-[50px]' src={logoimg} alt="" /></span> ading</h2>
                </div>) : (
                    <div className='mb-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {
                            Array.isArray(searchApps) && searchApps.map(app => <NavLink key={app.id} to={`/appDetails/${app.id}`}>
                                <div className="card bg-white shadow-sm p-3 hover:scale-105 transition ease-in-out">
                                    <figure className='h-48 overflow-hidden rounded-2xl'>
                                        <img className='w-full object-cover'
                                            src={linkadd + app.image}
                                            alt="Shoes" />
                                    </figure>
                                    <div className='mt-2'>
                                        <p>{app.title}</p>
                                        <div className="card-actions justify-between mt-2">
                                            <div className="badge text-[#00D390] bg-[#F1F5E8]"><img className='h-[15px] w-[15px]' src={downloadimg} alt="" />{app.downloads}</div>
                                            <div className="badge text-[#FF8811] bg-[#FFF0E1]"><img className='h-[15px] w-[15px]' src={ratingimg} alt="" />{app.ratingAvg}</div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                            )
                        }
                    </div>)

                }



            </div>
        </div>
    );
};

export default AllApps;