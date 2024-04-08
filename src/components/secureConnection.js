import React from 'react';

const SecureConnection = () => {
    return (
        <div className=' mt-[120px] mx-auto bg-no-repeat ' style={{ background: `url('bg.jpg') no-repeat`, backgroundSize: 'cover' }}>
            <div className='py-20 bg-black/20 text-center'>
                <div className='container mx-auto text-white  '>
                    <div className='w-[55%] mx-auto'>
                        <h1 className='md:text-5xl text-2xl font-bold capitalize leading-10'>Secure connections, empowered teams</h1>
                        <p className='md:text-base text-sm my-10 text-white/70'>Calendly anables teams across the organization
                            to do their jobs more efficently create better
                            customer connections, and get
                            more value from  the tools they already rely on.
                        </p>
                        <button type='submit' className='text-base border px-10 py-4 rounded-[40px]'> Talk With Sales</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecureConnection;