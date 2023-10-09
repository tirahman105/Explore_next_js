// "use client"
import Link from "next/link";

import { useRouter } from "next/navigation";


export const metadata = {
  title: "AnonnoTa | Blogs",
  description: "Spread your business with AnonnoTa",
};

const blogs = [
  {
    id: 1,
    year: 2023,
    title: "Title -1",
  },
  {
    id: 2,
    year: 2023,
    title: "Title -2",
  },
  {
    id: 3,
    year: 2023,
    title: "Title -3",
  },
];

const BlogsPage = () => {
    // const router = useRouter();
  return (
    <div className="container mx-auto">
      <h1>Blogs Page</h1>
      <div className="grid grid-cols-3 gap-6 my-10 ">
        {blogs.map(({ id, year, title }) => (
          <Link
            className="p-10 bg-teal-400 py-4 border rounded-md shadow-md"
            href={{
                pathname: `/blogs/${year}/${id}`,
                query: {
                    title: title
                }
            }}
            
            key={id}
          >
            {title}
          </Link>

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
