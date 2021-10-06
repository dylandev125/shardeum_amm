import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper(props) {
    return (
        

            <Paper elevation={0}  style={{padding:28,border:'0px solid #E1E1E1',borderRadius:15,background:'#fff',maxHeight:150,marginTop:'2rem',boxShadow:'0 0 0.5px rgba(6, 10, 13, 0.4), 0 8px 16px rgba(113, 121, 128, 0.08)'}}>
                {props.children}
            </Paper>
       
    );
}
