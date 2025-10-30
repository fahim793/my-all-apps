import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router';
import downloadimg from '../../assets/icon-downloads.png'
import ratingimg from '../../assets/icon-ratings.png'
import reviewimg from '../../assets/icon-review.png'
import errorimg from '../../assets/App-Error.png'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import toast, { Toaster } from 'react-hot-toast';

const AppDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const dataArray = Array.isArray(data) ? data : [];
    const apps = dataArray.find(app => String(app.id) === id)

    const linkadd = "https://hero-apps.pages.dev";

    const [install, setInstall] = useState(false);

    useEffect(() => {
        if (apps) {
            const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
            if (installedApps.some(a => a.id === apps.id)) {
                setInstall(true);
            }
        }

    }, [apps])

    const handleInstallBtn = () => {
        if (!apps) return;
        setInstall(true);
        toast.success(`${apps.title} installed successfully`);

        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        if (!installedApps.some(a => a.id === apps.id)) {
            installedApps.push({ ...apps, image: linkadd + apps.image });
            localStorage.setItem('installedApps', JSON.stringify(installedApps));
        }
    }

    if (!apps) {
        return (
            <div className='flex flex-col items-center mx-auto text-center my-14'>
                <img className='mx-auto h-[200px]' src={errorimg} alt="" />
                <div>
                    <h2 className='text-3xl font-bold'>Apps is not found!</h2>
                </div>
                <NavLink to='/allapps'><button className='btn mt-5 btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2]w-[100px]'>Go Back</button></NavLink>
            </div>
        )
    }

    return (
        <div>
            <div className="bg-base-200 py-14 px-10">
                <div className="flex flex-col lg:flex-row border-b-2 border-gray-300 pb-5">
                    <figure className=' overflow-hidden'>
                        <img className='mb-3 mx-auto object-cover'
                            src={linkadd + apps.image}
                            alt="Shoes" />
                    </figure>
                    <div className='ml-10'>
                        <div className='border-b-2 border-gray-300'>
                            <h1 className="text-2xl font-bold">{apps.title}</h1>
                            <p className="mb-3 mt-2 text-sm">Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{apps.companyName}</span></p>
                        </div>
                        <div className='flex justify-center items-center gap-12 mt-6'>
                            <div className='space-y-2'>
                                <img src={downloadimg} alt="" />
                                <p className='text-xs'>Downloads</p>
                                <h2 className='text-2xl font-bold'>{apps.downloads}</h2>
                            </div>
                            <div className='space-y-2'>
                                <img src={ratingimg} alt="" />
                                <p className='text-xs'>Average Ratings</p>
                                <h2 className='text-2xl font-bold'>{apps.ratingAvg}</h2>
                            </div>
                            <div className='space-y-2'>
                                <img src={reviewimg} alt="" />
                                <p className='text-xs'>Total Reviews</p>
                                <h2 className='text-2xl font-bold'>{apps.reviews}</h2>
                            </div>
                        </div>

                        <button onClick={handleInstallBtn} disabled={install} className='btn mt-3 bg-gradient-to-r from-[#00D390] to-emerald-300'>{
                            install ? 'Installed' : `Install Now (${apps.size})`}</button>

                    </div>
                </div>
                <div className='mt-10'>
                    <h3 className='text-xl font-medium mb-4'>Ratings</h3>


                    <div className='shadow-sm rounded-xl'>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart layout='vertical' data={[...apps.ratings].reverse()} margin={{ top: 10, right: 10, left: 20, bottom: 20 }}>
                                <CartesianGrid strokeDasharray="3 3">
                                </CartesianGrid>
                                <XAxis type='number'></XAxis>
                                <YAxis type='category' dataKey='name'></YAxis>
                                <Tooltip></Tooltip>
                                <Bar dataKey='count' fill='#9F62F2' radius={[5, 5, 5, 5]}></Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className='mt-10'>
                    <h3 className='text-xl font-medium'>Description</h3>
                    <div className='text-[#627382] mt-2 space-y-3'>
                        {
                            (() => {
                                const sentences = apps.description.split(/(?<=\.)\s+/);
                                const paragraphs = [];
                                for(let i=0; i < sentences.length; i += 5)
                                {
                                    paragraphs.push(sentences.slice(i, i+5).join(' '));
                                }
                                return paragraphs.map((para, index) => <p key={index}>{para}</p>);
                            })()
                        }
                    </div>
                </div>







            </div>
            <Toaster position='top-center' reverseOrder={false}></Toaster>

        </div>
    );
};

export default AppDetails;