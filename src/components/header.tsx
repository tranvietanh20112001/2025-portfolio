import { Box, Typography, useMediaQuery } from '@mui/material'
import { Color } from './color'
import { Link } from 'react-scroll'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useTranslation } from 'react-i18next'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../assets/logo.png'
import LazyImage from './lazyImage'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

export function Header() {
    const { t } = useTranslation()
    const isMobile = useMediaQuery('(max-width: 780px)')
    const [menuOpen, setMenuOpen] = useState(false)

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
                <>
                    <Box
                        width="100%"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        height="70px"
                        margin="0 auto"
                        bgcolor={Color.gray}
                        borderRadius="0 0 10px 10px"
                        mb={'20px'}
                        sx={{
                            animation: 'fadeIn 1s ease-in-out',
                            '@keyframes fadeIn': {
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                            },
                        }}
                    >
                        <Box width="32px" height="32px" marginLeft="20px">
                            <LazyImage
                                src={logo}
                                alt="logo"
                                placeholder="logo"
                            />
                        </Box>
                        <MenuIcon
                            sx={{
                                color: Color.grayText,
                                fontSize: '30px',
                                marginRight: '20px',
                                cursor: 'pointer',
                            }}
                            onClick={() => setMenuOpen(true)}
                        />
                    </Box>
                    {menuOpen && (
                        <Box
                            position="fixed"
                            top={0}
                            left={0}
                            width="100vw"
                            height="100vh"
                            bgcolor={Color.gray}
                            zIndex={1300}
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                animation: menuOpen
                                    ? 'slideInLeft 0.3s ease'
                                    : 'slideOutRight 0.3s ease',
                                '@keyframes slideInLeft': {
                                    from: { transform: 'translateX(100%)' },
                                    to: { transform: 'translateX(0)' },
                                },
                                '@keyframes slideOutRight': {
                                    from: { transform: 'translateX(0)' },
                                    to: { transform: 'translateX(100%)' },
                                },
                            }}
                        >
                            <CloseIcon
                                sx={{
                                    color: Color.grayText,
                                    fontSize: '36px',
                                    position: 'absolute',
                                    top: 20,
                                    right: 20,
                                    cursor: 'pointer',
                                }}
                                onClick={() => {
                                    const box =
                                        document.getElementById(
                                            'mobile-menu-box'
                                        )
                                    if (box) {
                                        box.style.animation =
                                            'slideOutRight 0.5s ease'
                                        setTimeout(
                                            () => setMenuOpen(false),
                                            100
                                        )
                                    } else {
                                        setMenuOpen(false)
                                    }
                                }}
                            />
                            <Box
                                id="mobile-menu-box"
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                width="100%"
                                height="100%"
                            >
                                {Links.map((link, index) => (
                                    <Link
                                        key={index}
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <Typography
                                            sx={{
                                                ...linkStyle,
                                                fontSize: '22px',
                                                margin: '20px 0',
                                            }}
                                        >
                                            {link.name}
                                        </Typography>
                                    </Link>
                                ))}
                                <Box display="flex" gap={3} mt={4}>
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
                                                    fontSize: '28px',
                                                    '&:hover': {
                                                        color: 'white',
                                                    },
                                                }}
                                            />
                                        </a>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    )}
                </>
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
