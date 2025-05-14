import { Box } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import { useState } from 'react'
import { Color } from './color'
import LanguageSwitch from './languageSwitch'
import DownloadIcon from '@mui/icons-material/Download'

const actionButtons = [
    {
        key: 'lang',
        bottom: '120px',
        borderColor: Color.sun,
        content: <LanguageSwitch />,
        animate: true,
    },
    {
        key: '2',
        bottom: '180px',
        borderColor: 'white',
        content: (
            <Box
                component="a"
                href="/cv.pdf"
                download
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    color: 'white',
                    textDecoration: 'none',
                }}
            >
                <DownloadIcon />
            </Box>
        ),
    },
]

export function MenuButton() {
    const [isOpen, setIsOpen] = useState(false)

    const commonBoxStyles = {
        width: 48,
        height: 48,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        right: 32,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
        cursor: 'pointer',
    }

    return (
        <>
            <Box
                bottom={'60px'}
                bgcolor="white"
                border="2px solid"
                borderColor={Color.orange}
                onClick={() => setIsOpen(!isOpen)}
                sx={{
                    ...commonBoxStyles,
                    transition: 'transform 0.3s ease-in-out',
                    transform: `rotate(${isOpen ? 180 : 0}deg)`,
                    '&:hover': {
                        transform: `rotate(${isOpen ? 180 : 0}deg) scale(1.05)`,
                    },
                    '&:active': {
                        transform: `rotate(${isOpen ? 180 : 0}deg) scale(0.95)`,
                    },
                }}
            >
                <SettingsIcon sx={{ color: Color.orange, fontSize: 32 }} />
            </Box>

            {isOpen &&
                actionButtons.map(
                    ({ key, bottom, borderColor, content, animate }) => (
                        <Box
                            key={key}
                            bottom={bottom}
                            bgcolor={Color.orange}
                            border="2px solid"
                            borderColor={borderColor}
                            sx={{
                                ...commonBoxStyles,
                                ...(animate && {
                                    opacity: 0,
                                    transform: 'translateY(20px)',
                                    animation:
                                        'fadeIn 0.3s ease-in-out forwards',
                                    '@keyframes fadeIn': {
                                        '0%': {
                                            opacity: 0,
                                            transform: 'translateY(20px)',
                                        },
                                        '100%': {
                                            opacity: 1,
                                            transform: 'translateY(0)',
                                        },
                                    },
                                }),
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    transition: 'transform 0.3s ease-in-out',
                                },
                                '&:active': {
                                    transform: 'scale(0.95)',
                                    transition: 'transform 0.1s ease-in-out',
                                },
                            }}
                        >
                            {content}
                        </Box>
                    )
                )}
        </>
    )
}
