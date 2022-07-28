import React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

interface propTypes {
    children?: React.ReactNode 
}

const LayoutContent = ({
    children
}:propTypes
) => (
    <Box component="main" sx={{ p:3 }}>
        <Toolbar/>
        { children }
    </Box>
)


export default LayoutContent