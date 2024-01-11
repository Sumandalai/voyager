'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <>
    <div 
    onClick={() => router.push('/')}
    className=" cursor-pointer text-3xl sm:text-4xl font-bold w-max" 
    >voyager</div>
    </>
   );
}
 
export default Logo;
