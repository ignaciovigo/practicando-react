import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { IconContext } from "react-icons";
import Logo from "./Logo";
import SidebarData from "./SidebarData";

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Navbar
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={isExpanded ? "sidebar" : "sidebar tight"}
    >
      <Navbar.Brand href="#home" className="border-gris m-0 p-0 w-100">
        <Logo
          img={isExpanded}
          className="justify-content-center overflow-hidden"
        />
      </Navbar.Brand>
      <IconContext.Provider value={{ className: "text-naranja fs-2" }}>
        {SidebarData.map(({ icon, title }, idx) => {
          return (
            <Nav.Link
              key={title + idx}
              className={isExpanded 
                ?"d-flex justify-content-start align-items-center bg-n effect-link rounded-3 p-2 w-100 overflow-hidden"
                :"bg-n effect-link rounded-3 p-2 overflow-hidden"}
            >
              {icon}
              {isExpanded && (
                <p className="fs-5 m-0 text-gris position-absolute bottom-75 start-50 translate-middle-x title-xp">
                  {title}
                </p>
              )}
            </Nav.Link>
          );
        })}
      </IconContext.Provider>
    </Navbar>
  );
};

export default SideBar;
