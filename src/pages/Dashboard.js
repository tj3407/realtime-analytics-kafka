import React from "react";
import Grid from "@material-ui/core/Grid";
import socketIOClient from "socket.io-client";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { connect } from "react-redux";
import LineChart from "../components/charts/LineChart";
import DonutChart from "../components/charts/DonutChart";
import BarChart from "../components/charts/BarChart";

// const URL = 'ws://localhost:5000'

const testData = [
    { x: 0, y: 20 },
    { x: 150, y: 150 },
    { x: 300, y: 100 },
    { x: 450, y: 20 },
    { x: 600, y: 130 }
  ];

  const testDonutData = [
    { "Hi": 20 },
    { "Hello There": 46 },
    { "Click Me": 76 }
  ];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Dashboard(props) {
  const classes = useStyles();
  const [message, setMessage] = React.useState(null);

  React.useEffect(() => {
    //   const socket = socketIOClient(URL);
    //   socket.on('message', data => {
    //     console.log(data)
    //     setMessage(data);
    //   })
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header cssFor={classes.appBar} />
      <Sidebar
        cssForDrawer={classes.drawer}
        cssForDrawerContainer={classes.drawerContainer}
        cssForDrawerPaper={classes.drawerPaper}
      />
      <main className={classes.content}>
        <Toolbar />
        <LineChart data={testData} />
        <DonutChart data={testDonutData} />
        <BarChart data={testDonutData} />
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
    // <Grid>
    //     { (message !== null && message.length > 0) ? message.map((info, index) => {
    //         return (
    //         <div key={index}>
    //             {JSON.stringify(info)}
    //         </div>
    //         )
    //     }) : "Retrieving message..."}
    // </Grid>
  );
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
