import Image from 'next/image'
import { FcSearch } from "react-icons/fc";
export const metadata = {
  title: 'BloodBond--Network || Home',
  description: 'Spider Alpha',
}
 const HomePage=()=> {
  return (
   
   <>
  <div className='w-[25%] mx-auto flex gap-2'>
    <div>
    
   <input  type="text" placeholder="Search Your Location" className="input input-bordered w-full max-w-xs" />

    </div>
    <button  className="btn btn-outline btn-error" >Search  <FcSearch className=' text-3xl'></FcSearch></button>
   
  </div>
   
   </>
  )
}
export default HomePage;
