import React, { useState, useEffect } from 'react';
import { Typography, Box, Container, Divider, Paper, Button } from '@material-ui/core';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Checkout from './Checkout/Checkout';

const Allitems = (props) => {

  const classes = UseStyles();
  const [total, setTotal] = useState(null);
  const [updatePrice, setUpdatePrice] = useState(null);
  const { CartData } = props;
  const [open, setOpen] = useState(false);


  useEffect(() => {
    function clear() {
      return new Promise((resolve, reject) => {
        resolve(setTotal(null));
        reject(!total.length)
      })
    }
    clear().then(result => {
      const datastore = () => {
        for (let i = 0; i < CartData.length; i++) {
          setTotal(prevState => prevState = prevState + (CartData[i].value * CartData[i].quantity));
        }
      }
      datastore();
    }).catch(error => {
      throw error;
    })

    // console.log("card",CartData)
  }, [CartData])

  useEffect(() => {
    if (total < 2000 && total !== null) {
      const price = total + 500;
      setUpdatePrice(price);
    }
  }, [total]);

  const handleClose = () => {
    setOpen(false);
  }

  const handleCheckOut = () => {
    if (!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  return (
    <Box component={Paper} className={classes.box}>
      <Container className={classes.container}>
        <div className={classes.Header}>
          <Typography style={{ fontSize: "20px" }}>Items </Typography>
          <Typography style={{ fontSize: "20px" }}>Price</Typography>
        </div>
        <Divider variant="middle" />
        <div style={{ textAlign: 'center' }}>
          {CartData.map((item, index) => (
            <div className={classes.Items} key={index}>
              <Typography  >{item.name} </Typography>
              <Typography > RS{item.value}{` x ${item.quantity}`}</Typography>

            </div>
          ))}
        </div>


        <div className={classes.Delivery}>
          <Typography  >Delivery </Typography>
          {total < 2000 ? <Typography  >500</Typography> : <Typography>No charge</Typography>}
        </div>

        <Divider variant="middle" />

        <div className={classes.Total}>
          <Typography style={{ fontSize: "20px" }}>Total </Typography>

          <Typography style={{ fontSize: "20px" }}>Rs {total < 2000 ? updatePrice : total} </Typography>

        </div>

        <div className={classes.buttonDiv}> <Button variant="contained" className={classes.button} onClick={handleCheckOut}>Checkout</Button></div>
      </Container>
      <Checkout
        open={open}
        handleClose={handleClose}
        price={total > 2000 ? total : updatePrice}
      />
    </Box>

  )
}

const UseStyles = makeStyles(
  createStyles({
    box: {
      width: "450px",
      maxheight: "900px",
      minWidth: "100px",
      minHeight: "300px"
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignContent: "center"
    },

    Header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "77%",
      marginLeft: "4%",
      color: "#00669b",
      wordSpacing: "80px"


    },
    Items: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      fontSize: "5px",
      marginTop: "15px"
    },

    Delivery: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      fontSize: "5px",
      marginTop: "15px"
    },

    Total: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: "20px",
      color: "rgb(232, 88, 49)",
    },
    buttonDiv: {
      textAlign: "center",
      padding: "6%"
    },
    button: {
      width: "150px",
      color: 'black',
      fontFamily: "sans-serif",
      backgroundColor: 'pink',
      textTransform: 'initial',
      fontSize: "20px",
      '&:hover': {
        backgroundColor: 'hotpink'
      }
    },

  })
);








export default Allitems;
