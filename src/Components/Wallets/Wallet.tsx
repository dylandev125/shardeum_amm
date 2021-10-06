import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import Metamask from '../../Assets/Images/connectors/MetaMask.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        MianDiv: {
            display: 'flex', flexDirection: 'column',width:168,alignItems:'center',justifyContent:'center',
            marginBottom:'1.5rem',height:111,
            color:'#401395',
            "&:hover":{
                cursor:'pointer',
                background:'#4013951a',
                boxShadow:'rgb(74 74 104 / 10%) 0px 2px 2px -1px inset',
                borderRadius:10,
                border:'1px solid #40139552',
            },
            [theme.breakpoints.down('xs')]:{
                width:125
            }
        }
    }),
);

export default function Wallet({image,imageWidth,name}) {
    const classes = useStyles();

    return (
        <div >
            <div className={classes.MianDiv}>
                <img src={image} width={imageWidth} />
                <span style={{marginTop:'0.5rem'}}>{name}</span>
            </div>
        </div>
    );
}