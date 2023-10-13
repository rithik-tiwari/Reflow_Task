import React from 'react'
// import './Home.css';

const Home = () => {
    return (
        <div className='flex flex-row '>
            <div className='flex flex-col justify-between bg-[#000] h-[100vh] w-[30vh] bg-transparent border-4 border-white text-white'>
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
                        <div className='flex flex-col  justify-between bg-black border-4 border-white '>
                            <ul className='flex flex-row justify-between  w-full  p-3 text-white'>
                                <li className='flex w-[15vh]'>Tanks</li>
                                <li className='flex w-[15vh]'>Chemical Quantity</li>
                                <li className='flex w-[15vh]'>Chemical Name</li>
                                <li className='flex w-[15vh]'>Chemical Height</li>
                                <li className='flex w-[15vh]'>Tank Height</li>
                            </ul>
                        </div>
                        <div className='flex flex-col  justify-between bg-white border-4 border-white '>
                            <ul className='flex flex-row justify-between  w-full  p-3 text-black'>
                                <li className='flex  ml-3 w-[15vh] h-[5vh] overflow-hidden border-2 border-black'><div  className='flex h-[5vh] w-[7.5vh]  bg-blue-400 text-gray-950 justify-center items-center'>50%</div></li>
                                <li className='flex w-[15vh]'>50%</li>
                                <li className='flex w-[15vh]'>Liquid Nitrogen</li>
                                <li className='flex w-[15vh]'>5.6M</li>
                                <li className='flex w-[15vh]'>10M</li>
                            </ul>
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