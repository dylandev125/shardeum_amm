import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function Brodcame({title,content}) {
    return (
        <div>
            <Box
            style={{width:400,textAlign:'left'}}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 'fit-content',
                    border: (theme) => `0px solid ${theme.palette.divider}`,
                    borderRadius: 1,
                    
                    color: 'text.secondary',
                    '& svg': {
                        m: 1.5,
                    },
                    '& hr': {
                        mx: 0.5,
                    },
                }}
            >
                <h2 style={{color:'#6338BC',marginRight:'0.5rem'}}>{title}</h2>
                <Divider orientation="vertical" flexItem />
                <p style={{marginLeft:'0.5rem'}}>{content}</p>
            </Box>
        </div>
    );
}
