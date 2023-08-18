"use client"
import Link from 'next/link';
import React from 'react';
import img from '../asset/signup.png'
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { UserAuth } from '../authContext/authContext';

const Signup = () => {
let {user, createUser,profileUpdate,googleLogin}= UserAuth()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {console.log(data)
try {
  await createUser(data.email,data.password)
  await profileUpdate( {
    displayName:data.name
  })
  alert('register success')
} catch (error) {
  alert(error)
}

reset()
  }

let handleGoogle= async()=>{
try {
  await googleLogin()

} catch (error) {
  alert(error)
}

}

    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row card text-white ">
  <div className='w-3/6 '>
    <Image  src={img} alt='login' width={700}/>
   </div>
    <div className=' w-full md:w-3/6 bg-gradient-to-r from-[#ef709b] to-[#fa9372] card-body  rounded-e-lg'>
      <h1 className="text-2xl text-center font-bold py-2">Register Now</h1>
<div>
   <form onSubmit={handleSubmit(onSubmit)} >
<div >
<div className='form-control'>
<label className='py-2 text-xs md:text-sm' >Name</label>
<input type="text" placeholder="Type here" {...register("name")}  className="input input-bordered w-full max-w-xl lg:max-w-xl" />
</div>
</div>
<div className='form-control'>
<label className='py-2 text-xs md:text-sm' >Email</label>
<input type="email" placeholder="Type here" {...register("email")}  className="input input-bordered w-full max-w-xl lg:max-w-xl "  required/>
</div>
<div className='md:flex justify-between'>
<div className='form-control'>
<label className='py-2 text-xs md:text-sm' >Password</label>
<input type="password" placeholder="Type here" {...register("password")}  className="input input-bordered  w-full max-w-xl lg:max-w-md" required maxLength={6}/>
</div>
<div className='form-control'>
<label className='py-2 text-xs md:text-sm' >Confirm Password</label>
<input type="password" placeholder="Type here" {...register("confirmPassword")}  className="input input-bordered  w-full max-w-xl lg:max-w-md" maxLength={6} />
</div>
</div>

<div className='form-control'>
<label className='py-2 text-xs md:text-sm' >
 <Link href={'/login'}>
 Already have account
 </Link> 
  </label>

</div>


<div className='text-center py-2'>
  <button className='btn btn-neutral md:w-full '>
    Submit 
  </button>
</div>

     </form>
     <div className=" divider  text-sm">OR Sign up with</div>
<div className=' flex items-center justify-center py-1 '>
  <button className='btn btn-circle btn-outline btn-primary mx-2' onClick={handleGoogle}>
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

export default Signup;