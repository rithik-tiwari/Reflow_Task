import React from 'react'
import './Home.css';

const Home = () => {
    return (
        <div className='flex flex-row Home'>
            <div className='flex flex-col justify-between h-[100vh] w-[30vh] bg-transparent border-4 border-blue-300 text-white'>
                <div className='font-bold text-4xl mt-6'><h1>Reflow</h1></div>
                <div className=''>
                    <ul className='flex flex-col justify-center items-center leading-8'>
                        <li className='bg-blue-600 p-2 rounded-xl text-white font-bold'>Tanks</li>
                        <li>Profile</li>
                        <li>About US</li>
                        <li className='text-red-700 font-bold'>Logout</li>
                    </ul>
                </div>
                <div className='pb-6'>
                    <a href="/">Reflow Technology</a>
                </div>

            </div>
            <div className='flex flex-col h-[100vh] w-full'>
                {/* <div className='mt-9 flex ml-3 font-semibold text-xl'>
                    <p>In the Last 30 Days,</p>
                </div> */}
                {/* <div className='grid grid-cols-3 gap-8 justify-between mt-6 ml-3'>
                    <div className='bg-teal-300 h-20 w-[40vh]  items-start p-3 flex flex-col justify-between rounded-2xl'>
                        <a href="/"><h1 className='font-semibold text-lg rounded-lg'>Add Tanks</h1></a>
                    </div>
                </div> */}
                <div className='flex flex-col'>

                    <div className='flex flex-col '>
                        <div className='flex flex-col mt-6 ml-6 justify-between border-4 border-blue-300'>
                            <ul className='flex flex-row justify-between  w-full  p-3 text-white'>
                                <li className='flex w-[15vh]'>Tanks</li>
                                <li>Chemical Quantity</li>
                                <li>Chemical Name</li>
                                <li>Chemical Height</li>
                                <li>Tank Height</li>
                            </ul>
                        </div>

                        <div className=' flex flex-row text-white'>
                            <div className='flex bg-white h-[30vh] w-[20vh] m-5 rounded-3xl text-white border-4 border-black'>
                                <div className=' w-[20vh] h-[15vh] bg-black rounded-t-2xl '>
                                </div>
                            </div>
                            <div className='flex ml-[35vh] mt-[15vh]'>50%</div>
                            <div className='flex ml-[35vh] mt-[15vh]'>Liquid Nitrogen</div>
                            <div className='flex ml-[35vh] mt-[15vh]'>5.6 M</div>
                            <div className='flex ml-[35vh] mt-[15vh]'>10 M</div>
                        </div>

                        {/* <div className='flex flex-row mt-6 ml-6 justify-between'>
                            <p className='font-semibold text-md'>Previouo Page</p>
                            <ul className='flex flex-row justify-around w-[30vh]'>
                                <li className='bg-slate-300 rounded-full p-2'>1</li>
                                <li className='bg-slate-300 rounded-full p-2'>2</li>
                                <li className='bg-slate-300 rounded-full p-2'>3</li>
                                <li className='bg-slate-300 rounded-full p-2'>4</li>
                                <li className='bg-slate-300 rounded-full p-2'>5</li>
                            </ul>
                            <p className='font-semibold text-md'>Next Page</p>

                        </div> */}
                    </div>
                </div>
                <div className='absolute right-0 bottom-0'>
                    <div className='bg-blue-600 text-white h-20 w-[50vh] border-4 border-blue-300 items-center p-3 flex flex-col justify-between rounded-2xl'>
                        <a href="/"><h1 className=' text-lg rounded-lg font-bold'>Add Tanks +</h1></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home

{/* <div className='bg-blue-600 text-white h-20 w-[50vh] border-4 border-blue-300 items-center p-3 flex flex-col justify-between rounded-2xl'>
    <a href="/"><h1 className=' text-lg rounded-lg font-bold'>Add Tanks +</h1></a>
</div> */}