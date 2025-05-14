import { Box } from '@mui/material'

export function MenuButton() {
    ;<Box
        width={'40px'}
        height={'40px'}
        bgcolor={'#f0f0f0'}
        borderRadius={'20px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        position={'fixed'}
        bottom={'20px'}
        right={'20px'}
        boxShadow={'0 4px 8px rgba(0, 0, 0, 0.2)'}
        zIndex={1000}
        sx={{
            '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease-in-out',
            },
            '&:active': {
                transform: 'scale(0.95)',
                transition: 'transform 0.1s ease-in-out',
            },
        }}
    ></Box>
}
