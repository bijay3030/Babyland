import React,{useState} from 'react';
import { Box, Container,Paper, makeStyles, createStyles,Typography,Button,Link,Fab } from '@material-ui/core';
import Input from '../../GlobalComponents/Input';

const data = [
    {
        label: 'Emailaddress',
        type: 'email'
    },
    {
        label: 'Password',
        type: 'password'
    }
];

const Login = () =>{
    const classes = useStyles();
    return(
        <Box component={Paper} padding="2%"  className={classes.loginPage}>
            <form className={classes.form} onSubmit={'/'}>
                <Typography className={classes.Typography1}>Login</Typography>
                {data.map((items,index) =>{
                    return(<div style={{padding:'7% 0%'}} key={index}>
                                <Input label={items.label} type={items.type}/>
                        </div>
                        )
                })}
                <div className={classes.ButtonLink} style={{display:'flex',justifyContent:'center',padding:'7% 0 0 0'}}>
                    <Button className={classes.button}>Login</Button>
                </div>
                <div className={classes.ButtonLink}>
                <Link>Forget your password?</Link>
                </div>
            </form>
        </Box>
    )
}

const useStyles = makeStyles(theme =>
    createStyles({
        form: {
            width:'70%',
            alignSelf:'center'
        },
        loginPage: {
            display:'flex',
            justifyContent:'center',
            height:'350px',
            position:'relative'
            
        },
        Typography1: {
            fontSize:'22px',
            display:'flex',
            justifyContent:'center',
            fontFamily:'inherit',
            fontWeight:'500',
            color:'#00669b'
        },
        button: {
            backgroundColor:'hotpink',
            textTransform:'initial',
            fontSize:'16px',
            "&:hover": {
                backgroundColor:'#fc03d7'
            }
        },
        ButtonLink: {
            display:'flex',
            justifyContent:'center',
            padding:'4% 0 0 0'
        },
    }))



export default Login;