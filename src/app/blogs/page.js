import Link from "next/link";

export const metadata = {
    title: "AnonnoTa | Blogs",
    description: "Spread your business with AnonnoTa",
  };
  

  const blogs = [
    {
        id: 1,
        year: 2023,
        title: 'Title -1'
    },
    {
        id: 2,
        year: 2023,
        title: 'Title -2'
    },
    {
        id: 3,
        year: 2023,
        title: 'Title -3'
    },
  ]

const BlogsPage = () => {
    return (
        <div className="container mx-auto">
            <h1>Blogs Page</h1>
            <div className="grid grid-cols-3 gap-6 my-10 ">

            {
                blogs.map (({id, year, title}) => <Link className="bg-blue-100 p-10 rounded-md shadow-md" href={`/blogs/${year}/${id}`} key={id}>{title}</Link>)
            }
            </div>

        </div>
    );
};

export default BlogsPage;