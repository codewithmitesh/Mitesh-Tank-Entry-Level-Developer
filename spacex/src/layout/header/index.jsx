import React from 'react'
import Logo from '../../assets/Logo/logo.png'


const Header = () => {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
            <div className="w-full flex flex-wrap items-center justify-between px-2 py-3 bg-transparent mb-3 overflow-x-hidden fixed z-50 top-0 left-0 ">
                <div className="px-4 py-3 mx-auto flex flex-wrap items-center justify-between">
                    {/* container uper wale me*/}
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            href="/"
                        >
                            <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>

                    <div
                        className={
                            "lg:flex flex-grow items-center justify-end " +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 transition duration-150 border-b-2 border-transparent hover:border-white"
                                    href="#"
                                >
                                    <span className="ml-2 mt-2 text-xs leading-lg text-white  transition duration-150 border-b-1 border-transparent hover:border-white ">FALCON</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 transition duration-150 border-b-2 border-transparent hover:border-white"
                                    href="#"
                                >
                                    <span className="ml-2 mt-2 text-xs leading-lg text-white ">FALCON HEAVY</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 transition duration-150 border-b-2 border-transparent hover:border-white"
                                    href="#"
                                >
                                    <span className="ml-2 mt-2 text-xs leading-lg text-white ">DRAGON</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 transition duration-150 border-b-2 border-transparent hover:border-white"
                                    href="#"
                                >
                                    <span className="ml-2 mt-2 text-xs leading-lg text-white ">STARSHIP</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 transition duration-150 border-b-2 border-transparent hover:border-white"
                                    href="#"
                                >
                                    <span className="ml-2 mt-2 text-xs leading-lg text-white ">STARLINK</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header