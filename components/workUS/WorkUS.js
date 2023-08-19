import React from 'react';
import img1 from '../../app/asset/1.jpg'
import img2 from '../../app/asset/2.jpg'
import img3 from '../../app/asset/3.jpg'
import Image from 'next/image';

const WorkUS = () => {
    return (
        <div className='m-11'>
            <h1 className='text-center text-3xl font-bold text-[#D32F2F]'>Our Works</h1>
            <p className='text-center'>Discover the lives transformed and communities strengthened through our dedicated blood donation <br /> efforts. Explore our impactful stories, statistics, and partnerships that drive positive <br /> change.</p>
            <div> <Image className='mx-auto' src={img1} alt='login' /></div>
            <h1>This is work us section</h1>
        </div>
    );
};

export default WorkUS;