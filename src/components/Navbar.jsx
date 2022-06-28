import React, { useEffect } from "react";
import { Icon } from "@iconify/react";

const Navbar = ({ jsonData }) => {
    useEffect(() => {}, [jsonData]);
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
            <div className="container text-light">
                {jsonData && jsonData[0] && (
                    <div className="w-100 d-flex justify-content-between">
                        <div className="d-flex">
                            <div className="me-2 ">
                                <Icon className="me-2" icon="ph:envelope-thin" width="20" height="20" />
                                <a className="navbar-sm-brand text-light text-decoration-none" href={`mailto:${jsonData[0].contact.email}`}>
                                    {jsonData[0].contact.email}
                                </a>
                            </div>
                            <div>
                                <Icon className="me-2" icon="ant-design:phone-outlined" width="20" height="20" />
                                <a className="navbar-sm-brand text-light text-decoration-none" href={`tel:${jsonData[0].contact.phone}`}>
                                    {jsonData[0].contact.phone}
                                </a>{" "}
                            </div>
                        </div>
                        <div>
                            {jsonData[0].contact.socials.map((social) => {
                                return (
                                    <a key={social.name} className="text-light ms-3" href={social.address} target="_blank" rel="sponsored">
                                        <Icon icon={social.icon} width="20" height="20" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
