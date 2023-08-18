'use-client'
import Image from 'next/image';
import React from 'react';
import img from '../asset/login.png'
import Link from 'next/link';
const page = () => {
    return (
        <div >
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row card text-white  ">
  <div className='w-3/6 '>
    <Image  src={img} alt='login' width={700}/>
   </div>
    <div className=' w-full md:w-3/6 bg-gradient-to-r from-[#ef709b] to-[#fa9372] card-body  rounded-e-lg '>
      <h1 className="text-2xl text-center font-bold py-5">Log in Now</h1>
<div className='justify-center'>
   <form >
<div className='form-control'>
<label className='py-2 text-xs md:text-sm' >Email</label>
<input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xl lg:max-w-md" />
</div>
<div className='form-control'>
<label className='py-2 text-xs md:text-sm' >Password</label>
<input type="password" placeholder="Type here" className="input input-bordered  w-full max-w-xl lg:max-w-md" />
</div>
<div className='form-control'>
<label className='py-2 text-xs md:text-sm' >
 <Link href={'/signup'}>
 Create New Account
 </Link> 
  </label>

</div>


<div className='text-center py-2'>
  <button className='btn btn-neutral  md:w-full '>
    LogIn  
  </button>
</div>

     </form>
     <div className=" divider  text-sm">OR LogIn with </div>
<div className=' flex items-center justify-center py-1 '>
  <button className='btn btn-circle btn-outline btn-primary mx-2'>
G  
</button>
  <button className='btn btn-circle btn-outline btn-primary mx-2'>
    in
  </button>
  <button className='btn btn-circle btn-outline mx-2 btn-primary '>
   F
  </button>
</div>


</div>
    

    </div>
  </div>
</div>

        </div>
    );
};

export default page;