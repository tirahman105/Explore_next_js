// "use client"
import loadBlogData from "@/utils/loadBlogData";
import Link from "next/link";

import { useRouter } from "next/navigation";

export const metadata = {
  title: "AnonnoTa | Blogs",
  description: "Spread your business with AnonnoTa",
};

// const blogs = [
//   {
//     id: 1,
//     year: 2023,
//     title: "Title -1",
//   },
//   {
//     id: 2,
//     year: 2023,
//     title: "Title -2",
//   },
//   {
//     id: 3,
//     year: 2023,
//     title: "Title -3",
//   },
// ];

const BlogsPage = async () => {
  // const router = useRouter();

  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //   cache: "force-cache",
  // });
  // const blogs = await res.json();

const blogs = await loadBlogData();

  return (
    <div className="container mx-auto">
      <h1>Blogs Page</h1>
      <div className="grid grid-cols-3 gap-6 my-10 ">
        {blogs.map(({ id, body, title }) => (
          <div className="p-10 bg-slate-100 py-4 border rounded-md shadow-md" key={id}>
  <div className="flex flex-col h-full"> {/* Add a flex container */}
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <hr />
    <p className="my-4">{body}</p>
    <div className="flex-grow" /> {/* Add a flex-grow element to push the button to the bottom */}
    <Link href={`/blogs/${id}`}>
      <button className="btn p-2 mt-2 rounded bg-slate-400">Details</button>
    </Link>
  </div>
</div>


          /* <button
            className="btn bg-teal-400 py-4 border rounded-md shadow-md"
             onClick={()=> router.push(`/blogs/${year}/${id}?title=${title}`)}
            key={id}
          >
            {title}
          </button> */
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
