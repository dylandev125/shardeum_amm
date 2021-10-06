import React from "react";
import { Menu, ProSidebar, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./SideBar.scss";
import Home from "../../assets/svg/home";
import Earn from "../../assets/svg/earn";
import Trade from "../../assets/svg/trade";
import Bridge from "../../assets/svg/bridge";
import Governance from "../../assets/svg/governance";
import Refferal from "../../assets/svg/refferal";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/brand/Logo.svg";

const Sidebar = (props) => {
  const history = useHistory();

  const openPage = (url) => {
    history.push(url);
  };
  return (
    <ProSidebar
      collapsed={props.open ? false : true}
      style={{ position: "fixed" }}
    >
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        {props.open ? (
          <img src={Logo} style={{ width: 180 }} />
        ) : (
          <span>Close Icone</span>
        )}
      </div>
      <Menu iconShape="square">
        <MenuItem icon={<Home />} style={{ color: "black" }}>
          Dashboard
        </MenuItem>
        <SubMenu title="Earn" icon={<Earn />}>
          <MenuItem onClick={() => history.push("/farm")}>All Frams</MenuItem>

          <MenuItem onClick={()=>history.push('/mystake')}>My Stakes </MenuItem>
        </SubMenu>
        <SubMenu title="Trade" icon={<Trade />}>
          <MenuItem>Exchange</MenuItem>
          <MenuItem>Liquidity</MenuItem>
        </SubMenu>
        <MenuItem icon={<Bridge />} style={{ color: "black" }}>
          Bridge
        </MenuItem>
        <MenuItem icon={<Governance />} style={{ color: "black" }}>
          Governance
        </MenuItem>
        <MenuItem icon={<Refferal />} style={{ color: "black" }}>
          Referral
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};
export default Sidebar;
