import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const TopBar = (props) => {
  return (
    <React.Fragment>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <ElevationScroll {...props}>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              backgroundImage: "none",
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs></Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h2"
                  component="h2"
                  align="center"
                  sx={{ flexGrow: 1 }}
                  gutterBottom
                >
                  Zoi Kousteni
                </Typography>
              </Grid>
              <Grid item xs>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    background: "rgba(196, 196, 196, 0.3)",
                    border: "none",
                    display: { xs: "none", sm: "block" },
                    "&:hover": {
                      border: "1px solid black",
                      background: "rgba(196, 196, 196, 0.3)",
                    },
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "black", textTransform: "Capitalize" }}
                  >
                    Contact me
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </AppBar>
        </ElevationScroll>
      </Box>
    </React.Fragment>
  );
};
export default TopBar;
