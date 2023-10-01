import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <NavLink to="/"><li><a className="hover:bg-transparent hover:text-[#FF444A]">Home</a></li></NavLink>
        <NavLink to="/login"><li><a className="hover:bg-transparent hover:text-[#FF444A]">Login</a></li></NavLink>
        <NavLink to="/register"><li><a className="hover:bg-transparent hover:text-[#FF444A]">Register</a></li></NavLink>
    </>

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <div className="navbar bg-base-100 px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden navbar-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="text-3xl font-semibold cursor-pointer">Firebase World</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;