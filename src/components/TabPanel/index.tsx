import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SelfHosting from "../../pages/SelfHosting";
import TabHeader from "./TabHeader";
import Liquidity from "../Liquidity";
import RemoveLiquidityModal from "../RemoveLiquidityModal";
import { makeStyles } from "@material-ui/core/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  Tab: {
    width: "240px",
    color: "#A80084 !important",
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: 600,
    fontSize: "14px !important",
    lineHeight: "24px !important",
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
  },
  indicator: {
    background: "#A80084 !important",
  },
}));

export default function BasicTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "90%", padding: "30px 0px", margin: "0px auto" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          classes={{ indicator: classes.indicator }}
        >
          <Tab
            label="SWAP"
            {...a11yProps(0)}
            className={classes.Tab}
            style={{ fontWeight: 600 }}
          />
          <Tab
            label="LIQUIDITY"
            {...a11yProps(1)}
            className={classes.Tab}
            style={{ fontWeight: 600 }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TabHeader
          title="Swap"
          text="Trade tokens in an instant with UniFarm for verified tokens and low fee"
        />
        <SelfHosting />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabHeader
          title="Liquidity"
          text="Add Liquidity and earn a 0.3% fee on all trades proportional to your contribution in the pool"
        />
        <Liquidity />
        {/* <RemoveLiquidityModal /> */}
      </TabPanel>
    </Box>
  );
}
