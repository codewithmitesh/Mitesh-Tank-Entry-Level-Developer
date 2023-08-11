import { React, useState } from 'react'
import Logo from '../../assets/Logo/logo.png'


const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
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
                        <button className='bg-transparent hover:bg-white-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-black     rounded ' onClick={() => setShowModal(true)}> Login</button>
                        <button className='bg-transparent hover:bg-white-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-black     rounded ' onClick={() => setShowModal(true)}> Register</button>

                    </div>
                </div>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Login/Register
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            saff
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        fsf
                                    </p>
                                </div>
                                <div>
                                    Email
                                </div>
                                <div>
                                    <input />
                                </div>
                                <div>
                                    Password
                                </div>
                                <div>
                                    <input />
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justif    y-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default Header