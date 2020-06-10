import React,{useState} from 'react';
import { makeStyles,createStyles,Box,Paper, Container } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ShopItems from '../ShopItems/ShopItems';


function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component={'div'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const ShopLists = (props) =>{
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <Box padding="1% 0 0 0%">
            <Box component={Paper} className={classes.root} elevation={0}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Tab classes={{root:classes.rootTabs}} label="T-shirt"/>
                    <Tab classes={{root:classes.rootTabs}} label="Toys"/>
                    <Tab classes={{root:classes.rootTabs}} label="Shampoo"/>
                    <Tab classes={{root:classes.rootTabs}} label="Cosmetic"/>
                    <Tab classes={{root:classes.rootTabs}} label="Diapers"/>
                    <Tab classes={{root:classes.rootTabs}} label="Pants" />
                    <Tab classes={{root:classes.rootTabs}} label="Pregenacy kit"  />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <ShopItems/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ShopItems/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ShopItems/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <ShopItems/>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <ShopItems/>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <ShopItems/>
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <ShopItems/>
                </TabPanel>
            </Box>
       </Box>
    )
}

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.paper,
            display: 'flex',
            height: 350
          },
          tabs: {
            border: `1px solid ${theme.palette.divider}`,
            width:'70%'
          },
          rootTabs: {
            maxWidth: '600px'
          }
    })
)

export default ShopLists;