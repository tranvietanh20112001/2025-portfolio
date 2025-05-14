import { Box, Typography, useMediaQuery } from '@mui/material'
import { Color } from '../../../components/Color'
import { Header } from '../../../components/Header'
import logo from '../../../assets/logo.png'
import { useTranslation } from 'react-i18next'
import LazyImage from '../../../components/LazyImage'
import Cypress from '../../../assets/cypress.svg'
import Playwright from '../../../assets/playwright.svg'
import Reflect from '../../../assets/reflect.png'
import ReactLogo from '../../../assets/react.png'
import NextJS from '../../../assets/nextjs.png'
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
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box
                                width={'40%'}
                                display={'flex'}
                                flexDirection={'column'}
                                justifyContent={'center'}
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
                            </Box>
                            <Box width={'40%'} height={'100%'}>
                                <LazyImage src={logo} alt="" />
                            </Box>
                        </>
                    )}
                </Box>

                <Box width={'100%'} height={'160px'}>
                    <Typography variant="body1" color="white" mb="24px">
                        {t('Experienced')}
                    </Typography>

                    <Box
                        width={'100%'}
                        display={isMobile ? 'none' : 'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        {Experienced.map((item, index) => (
                            <Box sx={boxStyle} key={index}>
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
                            <Box sx={iconBoxStyle} key={index}>
                                <LazyImage src={item.name} alt={item.name} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
