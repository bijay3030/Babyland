import React from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import AppCardList from '../AppCard/AppCardList';
import { Typography,makeStyles,createStyles } from '@material-ui/core';
import HomeBlog from '../HomeBlog/HomeBlog';
import Connect from '../Connect/Connect';

const Home = () =>{
    const classes = useStyles();
    return(
        <div style={{padding:'2% 0% 0% 0%'}}>
            <ImageSlider/>
            <div className={classes.CardTop}>
                <div className={classes.Typography}>
                    <Typography className={classes.Typo}>"With our exclusive collection be ready for big day"</Typography>
                </div>
                <AppCardList/> 
            </div>           
            <HomeBlog/>
            <Connect/>
        </div>
    )
}

const useStyles = makeStyles(theme =>
    createStyles({
        CardTop:{
            padding:'2% 6%  2% 11%'
        },
        Typography: {
            display:'flex',
            justifyContent:'center',
            padding:'3%'
        },
        Typo: {
            fontSize:'19px',
            fontFamily:'cursive'
        }
    }))


export default Home;