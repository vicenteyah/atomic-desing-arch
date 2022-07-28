import React from 'react'
import Button from '@mui/material/Button'

interface PropTypes {
    title: string
    theme: any
    size: any
    disabled?: boolean
    onClick?: ()=> void
}

const CustomButton = (props:PropTypes) => (
    <Button
        onClick={props.onClick}
        variant={props.theme}
        disabled={props.disabled}
        size={props.size}
    >
        {props.title}
    </Button>
)


export default CustomButton