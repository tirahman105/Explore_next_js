import Link from "next/link";

const navLinks = [
    {
        Path: '/dashboard',
        title: 'Dashboard'
    },
    {
        Path: '/dashboard/add-product',
        title: 'Add Product'
    },
    {
        Path: '/dashboard/manage-product',
        title: 'Manage-Product'
    },
    {
        Path: '/',
        title: 'Home'
    },
]

const Sidebar = () => {
    return (
        <aside className="mr-10 bg-blue-200 ">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <ul>
        {
            navLinks.map(({Path, title})=> (
                <li className="my-2" key={Path}>
                <Link href={Path}>{title}</Link>
            </li> ))
        }

        </ul>
            
        </aside>
    );
};

export default Sidebar;