import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { Color } from '../../../components/color'
import { Header } from '../../../components/header'
import logo from '../../../assets/logo.png'
import { useTranslation } from 'react-i18next'
import LazyImage from '../../../components/lazyImage'
import Cypress from '../../../assets/cypress.svg'
import Playwright from '../../../assets/playwright.svg'
import Reflect from '../../../assets/reflect.png'
import ReactLogo from '../../../assets/react.png'
import NextJS from '../../../assets/nextjs.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export function Index() {
    const { t } = useTranslation()

    const isMobile = useMediaQuery('(max-width: 780px)')

    const boxStyle = {
        width: '15%',
        height: '60px',
        borderRadius: '10px',
        border: `.25px solid ${Color.grayText}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const iconBoxStyle = {
        width: '24px',
        height: '24px',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '8px',
    }

    const Experienced = [
        { name: 'Cypress', href: '/' },
        { name: 'Playwright', href: '/' },
        { name: 'Reflect', href: '/' },
        { name: 'React', href: '/' },
        { name: 'NextJS', href: '/' },
    ]

    const ExperiencedIcon = [
        { name: Cypress, href: '/' },
        { name: Playwright, href: '/' },
        { name: Reflect, href: '/' },
        { name: ReactLogo, href: '/' },
        { name: NextJS, href: '/' },
    ]
    return (
        <Box
            width={'100%'}
            minWidth={'320px'}
            bgcolor={Color.black}
            height={'100vh'}
            margin={'0 auto'}
        >
            <Box
                width={'90%'}
                maxWidth={'1110px'}
                margin={'0 auto'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                height={'100vh'}
            >
                <Header />

                <Box
                    width={'100%'}
                    display={isMobile ? 'block' : 'flex'}
                    justifyContent={isMobile ? 'center' : 'space-between'}
                >
                    {isMobile ? (
                        <>
                            <Box width={'auto'} height={'auto'}>
                                <LazyImage src={logo} alt="" />
                            </Box>

                            <Box
                                width={'100%'}
                                display={'flex'}
                                flexDirection={'column'}
                                justifyContent={'center'}
                                mt={isMobile ? '24px' : 0}
                            >
                                <Typography
                                    variant="h2"
                                    color="white"
                                    gutterBottom
                                >
                                    {t('MyName')}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color={Color.grayText}
                                    gutterBottom
                                >
                                    {t('ShortDescription')}
                                </Typography>

                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        height: '48px',
                                        borderRadius: '8px',
                                        marginTop: '24px',
                                        backgroundColor: Color.green,
                                    }}
                                >
                                    {t('StartBtn')}
                                </Button>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box
                                width={'50%'}
                                display={'flex'}
                                flexDirection={'column'}
                                justifyContent={'center'}
                                sx={{
                                    opacity: 0,
                                    transform: 'translateX(-40px)',
                                    animation: 'fadeInLeft 0.8s forwards',
                                    '@keyframes fadeInLeft': {
                                        to: {
                                            opacity: 1,
                                            transform: 'translateX(0)',
                                        },
                                    },
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    color="white"
                                    gutterBottom
                                >
                                    {t('MyName')}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color={Color.grayText}
                                    gutterBottom
                                    textAlign={'justify'}
                                >
                                    {t('ShortDescription')}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    color={Color.grayText}
                                    mt={'24px'}
                                    textAlign={'justify'}
                                >
                                    {t('Greeting')} ☀️
                                </Typography>

                                <Button
                                    variant="contained"
                                    endIcon={<ChevronRightIcon />}
                                    sx={{
                                        width: '50%',
                                        height: '60px',
                                        borderRadius: '4px',
                                        marginTop: '24px',
                                        backgroundColor: Color.orange,
                                    }}
                                >
                                    {t('StartBtn')}
                                </Button>
                            </Box>
                            <Box width={'40%'} height={'100%'}>
                                <LazyImage src={logo} alt="" />
                            </Box>
                        </>
                    )}
                </Box>

                <Box width={'100%'} height={'160px'}>
                    <Typography
                        variant="body1"
                        color="white"
                        mb="24px"
                        sx={{
                            opacity: 0,
                            transform: 'translateY(20px)',
                            animation: 'fadeInUp 0.7s 0.1s forwards',
                            '@keyframes fadeInUp': {
                                to: {
                                    opacity: 1,
                                    transform: 'translateY(0)',
                                },
                            },
                        }}
                    >
                        {t('Experienced')}
                    </Typography>

                    <Box
                        width={'100%'}
                        display={isMobile ? 'none' : 'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        {Experienced.map((item, index) => (
                            <Box
                                sx={{
                                    ...boxStyle,
                                    opacity: 0,
                                    transform: 'translateY(20px)',
                                    animation: `fadeInUp 0.6s ${
                                        0.2 + index * 0.1
                                    }s forwards`,
                                    '@keyframes fadeInUp': {
                                        to: {
                                            opacity: 1,
                                            transform: 'translateY(0)',
                                        },
                                    },
                                }}
                                key={index}
                            >
                                <Typography
                                    variant="body1"
                                    color={Color.grayText}
                                >
                                    {item.name}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    <Box
                        width={'100%'}
                        display={isMobile ? 'flex' : 'none'}
                        gap={'24px'}
                    >
                        {ExperiencedIcon.map((item, index) => (
                            <Box
                                sx={{
                                    ...iconBoxStyle,
                                    opacity: 0,
                                    transform: 'translateY(20px)',
                                    animation: `fadeInUp 0.6s ${
                                        0.2 + index * 0.1
                                    }s forwards`,
                                    '@keyframes fadeInUp': {
                                        to: {
                                            opacity: 1,
                                            transform: 'translateY(0)',
                                        },
                                    },
                                }}
                                key={index}
                            >
                                <LazyImage src={item.name} alt={item.name} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
