import React from "react";
import { MenuItem,Menu,createStyles,makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Account = (props) => {
  const classes = useStyles();
  const { open, handleClose,anchorEl } = props;
  const data = [
    {
    name: `My Profile`,
      link: '/Profile'
    },
    {
      name: 'My wishlist',
      link: '/Wishlist'
    },
    {
      name: 'My Order',
      link: '/Order'
    },
    {
      name: 'Logout',
      link:'/logout'
    }
  ]

  return (
    <div>
      <Menu
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        keepMounted
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
         open={open}
         onClose={handleClose}
      >
        {data.map((list,index) =>{
          return (
          <Link className={classes.Link} key={index} to={list.link}>
            <MenuItem onClick={handleClose}>{list.name}</MenuItem>
            </Link>
            )
        })}
      </Menu>
    </div>
  );
};

const useStyles = makeStyles(theme =>
  createStyles({
    Link: {
      textDecoration: 'none',
      color:'#24011e'
    }
  }))

export default Account;