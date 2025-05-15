import { Box, Typography, useMediaQuery } from '@mui/material'
import { Color } from './color'
import { Link } from 'react-scroll'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useTranslation } from 'react-i18next'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../assets/logo.png'
import LazyImage from './lazyImage'

export function Header() {
    const { t } = useTranslation()
    const isMobile = useMediaQuery('(max-width: 780px)')

    const Links = [
        { name: t('HomeBtn'), to: 'index' },
        { name: t('ExpBtn'), to: 'exp' },
        { name: t('ProjectsBtn'), to: 'projects' },
        { name: t('BlogsBtn'), to: 'blogs' },
        { name: t('GetInTouchBtn'), to: 'contact' },
    ]

    const ExternalLinks = [
        { icon: GitHubIcon, href: 'https://github.com/tranvietanh20112001' },
        {
            icon: LinkedInIcon,
            href: 'https://linkedin.com/in/tranvietanh20112001',
        },
    ]

    const linkStyle = {
        color: Color.grayText,
        fontSize: '14px',
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': { color: 'white' },
    }

    return (
        <>
            {isMobile ? (
                <Box
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    height="70px"
                    margin="0 auto"
                    bgcolor={Color.gray}
                    borderRadius="0 0 10px 10px"
                    sx={{
                        animation: 'fadeIn 1s ease-in-out',
                        '@keyframes fadeIn': {
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                        },
                    }}
                >
                    <Box width="32px" height="32px" marginLeft="20px">
                        <LazyImage src={logo} alt="logo" placeholder="logo" />
                    </Box>
                    <MenuIcon
                        sx={{
                            color: Color.grayText,
                            fontSize: '30px',
                            marginRight: '20px',
                        }}
                    />
                </Box>
            ) : (
                <Box
                    width="100%"
                    maxWidth="1110px"
                    display="flex"
                    justifyContent="space-evenly"
                    alignItems="center"
                    height="70px"
                    margin="0 auto"
                    bgcolor={Color.gray}
                    borderRadius="0 0 10px 10px"
                    sx={{
                        animation: 'fadeIn 1s ease-in-out',
                        '@keyframes fadeIn': {
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                        },
                    }}
                >
                    {/* Internal scroll links */}
                    {Links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            smooth={true}
                            duration={500}
                        >
                            <Typography sx={linkStyle}>{link.name}</Typography>
                        </Link>
                    ))}

                    {/* External icons */}
                    {ExternalLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <item.icon
                                sx={{
                                    color: Color.grayText,
                                    fontSize: '20px',
                                    '&:hover': { color: 'white' },
                                }}
                            />
                        </a>
                    ))}
                </Box>
            )}
        </>
    )
}
