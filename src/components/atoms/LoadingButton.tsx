import { LoadingButton as LoaderButton } from '@mui/lab'

interface PropTypes {
    title: string
    theme: any
    size: any
    isLoading?: boolean
    disabled?: boolean
    onClick?: ()=> void
}

const LoadingButton = (
    {
        title,
        theme,
        size,
        isLoading,
        disabled,
        onClick
    }:PropTypes
) => (
    <LoaderButton 
        variant={theme} 
        onClick={onClick} 
        size={size}
        loading={isLoading}
        disabled={disabled}
    >
        { title }
    </LoaderButton>
)

export default LoadingButton