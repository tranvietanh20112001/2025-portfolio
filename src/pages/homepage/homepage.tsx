import { Box } from '@mui/material'
import { Index } from './components'
import { Exp } from './components/exp'
import { Contact } from './components/contact'
import { MenuButton } from '../../components/MenuButton'
import { Projects } from './components/projects'
import { Blogs } from './components/blogs'
export function Homepage() {
    return (
        <Box width={'100%'} height={'auto'} margin={'0 auto'}>
            <MenuButton />
            <Index />
            <Exp />
            <Projects />
            <Blogs />
            <Contact />
        </Box>
    )
}
