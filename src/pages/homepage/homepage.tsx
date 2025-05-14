import { Box } from '@mui/material'
import { Index } from './components'
import { Exp } from './components/exp'
import { Contact } from './components/contact'
import { MenuButton } from '../../components/MenuButton'
export function Homepage() {
    return (
        <Box width={'100%'} height={'auto'} margin={'0 auto'}>
            <MenuButton />
            <Index />

            <Exp />

            <Contact />
        </Box>
    )
}
