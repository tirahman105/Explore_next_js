// 'use client'

import loadBlogData from '@/utils/loadBlogData';
import loadSingleBlogData from '@/utils/loadSingleBlogData';
// import { useParams, useSearchParams } from 'next/navigation';

export const generateMetadata =async ({params}) => {

    const { title} = await loadSingleBlogData(params.id);
    return{
    title: title,
    };
};

export const generateStaticParams = async  () => {
    const blogs = await loadBlogData();

    return blogs.map((id) => ({
        id: id.toString(),
    }))
}

const SingleBlog = async ({params}) => {
// const [year, id] = params.segments || [];

// const params2 = useParams();
// const searchParams2 = useSearchParams();

// console.log(params2.segments, searchParams2.get("title"))

const {id, title, body} = await loadSingleBlogData(params.id);

    return (
        <div className='p-20 bg-slate-100 m-20'>
           

            <h1 className='text-center text-3xl font-bold'>Title:{title}</h1>
            <p className='p-20 '>{body}</p>
        </div>
    );
};

export default SingleBlog;