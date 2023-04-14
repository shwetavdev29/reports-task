import React, { ReactNode, useState } from "react";
import { Container, Nav as BootstrapNav, Navbar } from "react-bootstrap";
import {
  HAMBURGER_IMG,
  LOGO_IMG,
  MENU_ICON1,
  MENU_ICON2,
  MENU_ICON3,
  MENU_ICON4,
  MENU_ICON5,
} from "../../assets";
import SideNav, { NavItem } from "@trendmicro/react-sidenav";
import styles from "./Layout.module.css";

const Header = ({ handleToggle }: { handleToggle: any }) => {
  return (
    <div>
      <Navbar
        className={`shadow-sm bg-white ${styles.navbarStyles}`}
        bg="light"
        variant="light"
      >
        <Container fluid>
          <Navbar.Brand>
            <img src={LOGO_IMG} alt="logo" className={styles.logoImg} />
          </Navbar.Brand>
          <BootstrapNav className="flex w-100 justify-content-start">
            <BootstrapNav.Item>
              {/* <SideNav.Toggle /> */}
              <img
                onClick={handleToggle}
                role={"button"}
                src={HAMBURGER_IMG}
                alt="menu"
                className={styles.logoImg}
              />
              {/* </SideNav.Toggle> */}
            </BootstrapNav.Item>
          </BootstrapNav>

          <div
            className={`d-flex w-25 flex-row justify-content-end align-items-center`}
          >
            <div className={styles.profileIcon}>JD</div>
            <span className={`ms-2 ${styles.userName}`}>John Doe</span>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

const Sidebar = ({
  expanded,
  children,
}: {
  expanded: boolean;
  children: ReactNode;
}) => {
  return (
    <>
      <div className="d-flex">
        <SideNav
          className="h-100  bg-white reportsidenav"
          defaultExpanded={false}
          
          style={{ display: expanded ? "block" : "none", position: "relative" }}
          onSelect={(selected: any) => {
            // Add your code here
          }}
        >
          <SideNav.Nav className="mt-4 pt-3 bg-white" defaultSelected="home">
            <NavItem eventKey="home">
              <img
                className={styles.not_allowed}
                src={MENU_ICON1}
                alt="MENU_ICON1"
              />
            </NavItem>
            <NavItem eventKey="home">
              <img
                className={styles.not_allowed}
                src={MENU_ICON2}
                alt="MENU_ICON2"
              />
            </NavItem>
            <NavItem eventKey="home">
              <img
                className={styles.not_allowed}
                src={MENU_ICON3}
                alt="MENU_ICON3"
              />
            </NavItem>
            <NavItem eventKey="home">
              <img
                className={styles.pointer}
                src={MENU_ICON4}
                alt="MENU_ICON4"
              />
            </NavItem>
            <NavItem eventKey="home">
              <img
                className={styles.not_allowed}
                src={MENU_ICON5}
                alt="MENU_ICON5"
              />
            </NavItem>
          </SideNav.Nav>
        </SideNav>
        <main className={styles.pagewrapper}>{children}</main>
      </div>
    </>
  );
};

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const toggleMenu = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Header handleToggle={toggleMenu} />
      <Sidebar expanded={expanded}>{children}</Sidebar>
    </>
  );
};

export { MainLayout };
