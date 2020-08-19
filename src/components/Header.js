import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function Header(props) {
  return (
    <div>
      <AppBar position="fixed" className={props.cssFor} elevation={0}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Realtime Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
