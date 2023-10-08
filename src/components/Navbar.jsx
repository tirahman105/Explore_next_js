import Link from "next/link";

const navLinks = [
    {
        Path: '/',
        title: 'Home'
    },
    {
        Path: '/about',
        title: 'About'
    },
    {
        Path: '/profile',
        title: 'Profile'
    },
    {
        Path: '/blogs',
        title: 'Blogs'
    },
    {
        Path: '/dashboard',
        title: 'Dashboard'
    },
]

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between container mx-auto">
            <h1 className="text-3xl font-bold">AnonnoTa</h1>
            <ul className="flex items-center justify-center">
            {
                navLinks.map(({Path, title})=> <li className="mx-2" key={Path}>
                    <Link href={Path}>{title}</Link>
                </li>)
            }

            </ul>

        </nav>
    );
};

export default Navbar;