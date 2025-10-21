import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link } from "next/link";

import logo from "@/assets/images/logo-white.png";
import Image from "next/image";

export default function HeaderToolbar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "primary.main" }}
    >
      <Toolbar>
        <Box
          component="a"
          href="/"
          sx={{ display: "block", flexGrow: 0 }}
        >
          <Image
            src={logo.src}
            alt="Donezo logo"
            width="125"
            height="30"
            priority
            style={{ display: "block " }}
          />
        </Box>
        <Box sx={{ display: "block", flexGrow: 1 }} />
        <Box sx={{ display: "block", flexGrow: 0 }}>
          <Button
            variant="outlined"
            component={Link}
            href="/"
            color="white"
          >
            View all tasks
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
