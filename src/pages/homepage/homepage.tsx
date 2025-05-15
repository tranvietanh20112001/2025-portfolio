import { Box } from '@mui/material'
import { Index } from './components'
import { Exp } from './components/exp'
import { Contact } from './components/contact'
import { MenuButton } from '../../components/MenuButton'
import { Projects } from './components/projects'
import { Blogs } from './components/blogs'
import { Element } from 'react-scroll'
export function Homepage() {
    return (
        <Box width={'100%'} height={'auto'} margin={'0 auto'}>
            <MenuButton />
            <Element name="/">
                <Index />
            </Element>
            <Element name="exp">
                <Exp />
            </Element>
            <Element name="projects">
                <Projects />
            </Element>
            <Element name="blogs">
                <Blogs />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
        </Box>
    )
}
