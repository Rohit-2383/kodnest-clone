
'use client'

import React, { useState } from 'react'
import { AiFillHome } from "react-icons/ai";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoTimerSharp, IoPerson, IoLogOutSharp } from "react-icons/io5";
import { MdDescription } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi"
import Image from 'next/image';
import Link from 'next/link'

export default function Sidebar() {

    let desc;

    const [isselected, setIsSelected] = useState('tab1')

    switch (isselected) {
        case 'tab1':
            desc = 'home'
            break
        case 'tab2':
            desc = 'courses'
            break
        default:
            desc = 'home'



    }

    return (
        <div className='bg-black w-11/12 absolute bottom-2 rounded-xl mx-auto inset-x-1 sm:absolute sm:left-0 sm:bottom-0 sm:top-0 sm:w-20  sm:mx-3 my-4'>
            <div className='sm:flex sm:flex-col  justify-evenly h-full'>
                <div>
                    <Image
                        src={'/symbol.png'}
                        alt="symbol"
                        width={60}
                        height={60}
                        className='hidden sm:block mx-auto'
                    />
                </div>
                <div>
                    <div className=' text-yellow-400 text-3xl flex h-fit py-3 sm:flex-col sm:gap-y-10 sm:items-center'>
                        <AiFillHome
                            className='grow'
                            onClick={() => setIsSelected('tab1')}
                        />
                        {isselected == 'tab1' ? (<p className='text-red-400'>{desc}</p>) : ''}
                        <RiGraduationCapFill
                            className='grow'
                            onClick={() => setIsSelected('tab2')}
                        />
                        <IoTimerSharp
                            className='grow'
                            onClick={() => setIsSelected('tab3')} />
                        <MdDescription
                            className='grow hidden sm:block'
                            onClick={() => setIsSelected('tab4')}
                        />
                        <HiDotsHorizontal
                            className='grow block sm:hidden'
                            onClick={() => setIsSelected('tab5')}
                        />
                        <IoPerson
                            className='grow hidden sm:block'
                            onClick={() => setIsSelected('tab6')}
                        />
                        <IoLogOutSharp
                            className='grow text-3xl hidden sm:block items center mt-20'
                            onClick={() => setIsSelected('tab7')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
