import React from 'react'

const Home = () => {
    return (
        <div className='flex flex-row '>
            <div className='flex flex-col justify-between h-[100vh] w-[30vh] bg-slate-300'>
                <div className='font-bold text-4xl'><h1>Reflow</h1></div>
                <div className=''>
                    <ul className='flex flex-col justify-center items-center leading-8'>
                        <li className='bg-teal-300 p-2'>Dashboard</li>
                        <li>Artists</li>
                        <li>Projects</li>
                        <li>Sales</li>
                    </ul>
                </div>
                <div className='pb-[40vh]'>
                    <ul className='flex flex-col justify-center items-center mb-40vh'>
                        <li>Settings</li>
                        <li className='text-red-700'>Logout</li>
                    </ul>
                </div>

            </div>
            <div className='flex flex-col h-[100vh] w-[130vh]'>
                <div className='border-slate-300 border-4 mt-5 ml-3'>
                    <input className='w-full' type="text" placeholder='Search artists, projects' />
                </div>
                <div className='mt-9 flex ml-3 font-semibold text-xl'>
                    <p>In the Last 30 Days,</p>
                </div>
                <div className='grid grid-cols-3 gap-8 justify-between mt-6 ml-3'>
                    <div className='bg-teal-300 h-20 w-[40vh]  items-start p-3 flex flex-col justify-between'>
                        <h1 className='font-semibold text-lg'>30,000</h1>
                        <p className='text-md '>Art Sales</p>
                    </div>
                    <div className='bg-teal-300 h-20 w-[40vh] items-start p-3 flex flex-col justify-between'>
                        <h1 className='font-semibold text-lg'>250</h1>
                        <p className='text-md '>New Artists</p>
                    </div>
                    <div className='bg-teal-300 h-20 w-[40vh] items-start p-3 flex flex-col justify-between'>
                        <h1 className='font-semibold text-lg'>$400,000</h1>
                        <p className='text-md '>Revenue generated</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='font-bold text-xl flex mt-6 ml-3'>
                        All Artists
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p className='mt-3 ml-3'>Monitor artists sales,revenue etc.</p>
                        <div className='flex flex-row'>
                            <input className='w-[50vh] border-4' type="text" placeholder='Search artists' />
                            <button className='p-3 bg-teal-300'>Filter</button>
                        </div>

                    </div>
                    <div className='flex flex-col '>
                        <div className='flex flex-col mt-6 ml-6 justify-between'>
                            <ul className='flex flex-row justify-between  w-[120vh] bg-slate-200 p-3'>
                                <li className='flex w-[15vh]'>Artists</li>
                                <li>Status</li>
                                <li>Projects Sold</li>
                                <li>Highest Sale</li>
                            </ul>
                        </div>
                        <div className='flex flex-row mt-6 ml-6 justify-between'>
                            <ul className='flex flex-row justify-between  w-[120vh]  p-3'>
                                <li className='flex '>👦Bluenose
                                </li>
                                <li>Verified</li>
                                <li>400</li>
                                <li>$400,000</li>
                            </ul>
                        </div>
                        <div className='flex flex-row mt-6 ml-6 justify-between'>
                            <ul className='flex flex-row justify-between  w-[120vh]  p-3'>
                                <li className='flex '>👧Pennywise
                                </li>
                                <li>Pending</li>
                                <li>200</li>
                                <li>$400,000</li>
                            </ul>
                        </div>
                        <div className='flex flex-row mt-6 ml-6 justify-between'>
                            <ul className='flex flex-row justify-between  w-[120vh]  p-3'>
                                <li className='flex '>👩‍🦱Flotsam
                                </li>
                                <li className='ml-[5vh]'>Verified</li>
                                <li>40,000</li>
                                <li>$1,400,000</li>
                            </ul>
                        </div>
                        <div className='flex flex-row mt-6 ml-6 justify-between'>
                            <ul className='flex flex-row justify-between  w-[120vh]  p-3'>
                                <li className='flex '>🧔Gregautsch
                                </li>
                                <li className='mr-[5vh]'>Unverified</li>
                                <li className='mr-[15vh]'>0</li>
                                <li>$0</li>
                            </ul>
                        </div>
                        <div className='flex flex-row mt-6 ml-6 justify-between'>
                            <p className='font-semibold text-md'>Previouo Page</p>
                            <ul className='flex flex-row justify-around w-[30vh]'>
                                <li className='bg-slate-300 rounded-full p-2'>1</li>
                                <li className='bg-slate-300 rounded-full p-2'>2</li>
                                <li className='bg-slate-300 rounded-full p-2'>3</li>
                                <li className='bg-slate-300 rounded-full p-2'>4</li>
                                <li className='bg-slate-300 rounded-full p-2'>5</li>
                            </ul>
                            <p className='font-semibold text-md'>Next Page</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='mt-8 ml-9 flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    Rudra

                </div>
            </div>
        </div>
    )
}

export default Home
