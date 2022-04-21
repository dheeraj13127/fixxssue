import React from "react";
import "../../../styles/DashboardStyles/DashboardNavbar.css";
import { Menu, Button, Image } from "semantic-ui-react";
import fixxssue from '../../../assets/fixxssue.png'

function DashboardNavbar() {
  return (
    <div>
      <Menu size="small" borderless className="landingNav" fixed="top">
        <Menu.Item className="landingNavBrandImageBox">
          <Image
            size="small"
            src={fixxssue}
            alt="famjam"
            centered
            className="ui image landingNavBrandImage"
          />
        </Menu.Item>
        {/* <Menu.Menu position="right" className="mobile hidden">
          <Menu.Item>
            
              <Button size="mini" className="landingNavAuthBtns">
                Sign In
              </Button>
            
          </Menu.Item>
          <Menu.Item>
            
              <Button size="mini" className="landingNavAuthBtns ">
                Sign Up
              </Button>
            
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right" className="mobile only">
          <Menu.Item>
            <Button.Group>
            <a href="/signIn"> <Button size="mini" secondary>Sign In</Button></a>
              <Button.Or />
              <a href="/signUp"> <Button size="mini" secondary>Sign Up</Button></a>
            </Button.Group>
          </Menu.Item>
        </Menu.Menu> */}
      </Menu>
    </div>
  );
}

export default DashboardNavbar