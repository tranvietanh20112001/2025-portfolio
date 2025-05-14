import { Box } from '@mui/material'
import { Index } from './components'
import { Exp } from './components/Exp'
import { Contact } from './components/Contact'
export function Homepage() {
    return (
        <Box width={'100%'} height={'auto'} margin={'0 auto'}>
            <Index />

            <Exp />

            <Contact />
        </Box>
    )
}
