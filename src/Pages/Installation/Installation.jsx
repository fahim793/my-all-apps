import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import downloadimg from '../../assets/icon-downloads.png';
import ratingimg from '../../assets/icon-ratings.png';

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        const apps = JSON.parse(localStorage.getItem('installedApps')) || [];
        setInstalledApps(apps);
    }, []);

    const handleUninstall = (appId) => {
        const updatedApps = installedApps.filter(app => app.id !== appId);
        setInstalledApps(updatedApps);
        localStorage.setItem('installedApps', JSON.stringify(updatedApps));
        toast.success('App Uninstall Successfully');
    }

    const handlleSort = (e) => {
        const value = e.target.value;
        setSortOrder(value);

        let sortedApps = [...installedApps];
        console.log(sortedApps)

        if(value === 'Low-High')
        {
            sortedApps.sort((a,b) => a.downloads[0] - b.downloads[0]);
        }
        else if(value === 'High-Low')
        {
            sortedApps.sort((a,b) => b.downloads[0] - a.downloads[0]);
        }

        setInstalledApps(sortedApps);
    }

    if (installedApps.length === 0) {
        return (
            <div className='p-10 text-center text-gray-600'>
                <h2 className='text-2xl font-bold mb-4'>No Installed Apps Yet</h2>
                <p className='mb-4'>Install apps to see them here.</p>
                <Toaster position='top-center'></Toaster>
            </div>
        )
    }

    return (

        <div className='p-10'>
            <div className='mb-10 text-center'>
                <h1 className='text-3xl font-bold'>Your Installed Apps</h1>
                <p className='mt-2 text-sm text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center mt-10 mb-5'>
                <h3 className='text-xl font-bold'>({installedApps.length}) Apps Found</h3>
                <select onChange={handlleSort} value={sortOrder} defaultValue="Pick a color" className="select w-[100px]">
                    <option disabled={false}>Sort by size</option>
                    <option>Low-High</option>
                    <option>High-Low</option>
                </select>
            </div>
            <div>
                {
                    installedApps.map(app => (<div className=" bg-white flex flex-col lg:flex-row justify-between items-center p-3 rounded-2xl mt-3">
                        <div className=" flex flex-col lg:flex-row items-center">
                            <img
                                src={app.image}
                                className=" h-[80px] w-[80px] rounded-lg shadow-2xl"
                            />
                            <div className='ml-5 mt-3 lg:mt-0'>
                                <h1 className="text-base font-bold">{app.title}</h1>
                                <div className="flex justify-center gap-5 mt-2">
                                    <div className="badge text-[#00D390] bg-[#F1F5E8]"><img className='h-[15px] w-[15px]' src={downloadimg} alt="" />{app.downloads}</div>
                                    <div className="badge  text-[#FF8811] bg-[#FFF0E1]"><img className='h-[15px] w-[15px]' src={ratingimg} alt="" />{app.ratingAvg}
                                    </div>
                                    <p>{app.size}MB</p>
                                </div>
                            </div>

                        </div>
                        <button onClick={() => handleUninstall(app.id)} className="btn btn-primary mt-5 lg:mt-0">Uninstall</button>
                    </div>
                    ))
                }
            </div>
            <Toaster position="top-center" />
        </div>

    )
}

export default Installation;
