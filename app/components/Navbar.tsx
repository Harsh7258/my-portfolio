'use client';

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Navbar() {

    let pathName = usePathname() || '/'; 

    return(
        <Disclosure as="nav">
            {({open}) => (
                <>
                <div className="nav-wrapper">
                    <div className="flex justify-between h-16">
                        <div className="flex justify-between w-full">
                            <div className="flex items-center">
                                <Link href="/">
                                    <h1 className="text-2xl font-medium">
                                        K. Harsh <span className="text-teal-500">Naidu</span>
                                    </h1>
                                </Link>
                            </div>
                          <div className="nav-link-wrapper">
                            <Link
                                href="/"
                                prefetch
                                className={`${
                                pathName == "/"
                                    ? "nav-active-link"
                                    : "nav-notactiive-link"
                                } `}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about-me"
                                prefetch
                                className={`${
                                pathName == "/about-me"
                                    ? "nav-active-link"
                                    : "nav-notactiive-link"
                                } `}
                            >
                                About Me
                            </Link>
                            <Link
                                href="/projects"
                                prefetch
                                className={`${
                                pathName == "/projects"
                                    ? "nav-active-link"
                                    : "nav-notactiive-link"
                                } `}
                            >
                                Projects
                            </Link>
                            <Link
                                href="/contact-me"
                                prefetch
                                className={`${
                                pathName == "/contact-me"
                                    ? "nav-active-link"
                                    : "nav-notactiive-link"
                                } `}
                            >
                                Contact Me
                            </Link>
                          </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <Disclosure.Button className="hamburger">
                                {open ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )}
                            </Disclosure.Button>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">

                        <Link href="/" prefetch className={`${pathName == "/" ? 
                        "mobile-nav-open" 
                        : "mobile-nav-close"}`}>
                            Home
                        </Link>

                        <Link href="/about-me" prefetch className={`${pathName == "/about-me" ? 
                        "mobile-nav-open" 
                        : "mobile-nav-close"}`}>
                            About Me
                        </Link>

                        <Link href="/projects" prefetch className={`${pathName == "/projects" ? 
                        "mobile-nav-open" 
                        : "mobile-nav-close"}`}>
                            Projects
                        </Link>

                        <Link href="/contact-me" prefetch className={`${pathName == "/contact-me" ? 
                        "mobile-nav-open" 
                        : "mobile-nav-close"}`}>
                            Contact Me
                        </Link>
                    </div>
                </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}