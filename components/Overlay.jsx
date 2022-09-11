import React from 'react';
import Image from "next/image";

const Overlay = () => {
    return (
        <>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[1]'/>
            <Image
                src='https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80'
                layout='fill'
                className='object-cover'/>
        </>
    );
};

export default Overlay;