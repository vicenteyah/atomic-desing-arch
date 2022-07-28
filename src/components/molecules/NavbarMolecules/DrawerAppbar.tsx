import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Navbar from '../../organisms/Navbar/index'
import LayoutContent from "../../organisms/layout/sectionContent";

const paths = ["Home", "About", "Contact"];

interface propTypes {
  window?: () => Window;
}

const DrawerAppBar = (props: propTypes) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = 
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Eliud Vicente Yah Dzul
      </Typography>
      <Divider />
      <List>
        {paths.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  ;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Navbar title="About Me"
        container={container}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawer={drawer}
    >
        <LayoutContent>
            <Typography>
                gdiasdhjkasdhjkasgd
            </Typography>
        </LayoutContent>
    </Navbar>
  )
}

export default DrawerAppBar;
