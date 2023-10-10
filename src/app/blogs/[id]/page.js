// 'use client'

import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';

const SingleBlog = ({params}) => {
// const [year, id] = params.segments || [];

// const params2 = useParams();
// const searchParams2 = useSearchParams();

// console.log(params2.segments, searchParams2.get("title"))

    return (
        <div className='p-20 bg-slate-100 m-20'>
           

            <h1>{params.id}</h1>
        </div>
    );
};

export default SingleBlog;