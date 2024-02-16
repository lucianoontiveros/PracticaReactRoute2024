import React from "react";
import { Link, NavLink} from "react-router-dom";
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

const Nav_bar = () => {
    return(
        <>
            <Navbar fluid rounded>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src="https://yt3.ggpht.com/KVOnT6xUvsO0KMt6RGrjT6ZPF7Z0JzJ0mMRAFIo19l4SLa_RctjrxWpLhiGsjvCiX4faB9y3WA=s900-c-k-c0x00ffffff-no-rj" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                    >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink to="/" >Inicio</NavLink>
                    <NavLink to="Nosotros" > Nosotros</NavLink>
                    <NavLink to="Blogs" > Blogs</NavLink>
                    <NavLink to="Contacto" > Contacto</NavLink>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Nav_bar