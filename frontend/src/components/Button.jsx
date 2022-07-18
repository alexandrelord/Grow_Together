import Button from '@mui/material/Button'

export default function CustomButton(props) {
 
  return (
    <Button 
      variant='contained' 
      sx={{ 
        bgcolor: 'custom.medium',
        borderRadius: 5,
        '&.MuiButtonBase-root:hover': {
        bgcolor: 'custom.medium'
        } 
      }} 
      type='submit' 
      disableRipple
    >
    {props.label}
    </Button>
  )
}
