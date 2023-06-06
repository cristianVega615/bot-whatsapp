"use client";
import Image from 'next/image'

export default function Navbar(){
    return(
        <nav className='w-full h-14 flex justify-between'>
            <div className='w-[30%] ml-6'>
            <Image src="/ChatBot-logos_transparent.png"  className='h-[80px] object-cover' alt='logo' width={120} height={50}/>
            </div>
            
            <div className='w-[70%]'>
            </div>
        </nav>
    );
}