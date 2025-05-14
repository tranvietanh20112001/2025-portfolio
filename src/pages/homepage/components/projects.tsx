import { Box, Typography } from '@mui/material'
import { Color } from '../../../components/color'
import { useTranslation } from 'react-i18next'
import LazyImage from '../../../components/lazyImage'
import VietNam from '../../../assets/vietnam.png'

export function Projects() {
    const { t } = useTranslation()

    const projectImages = [
        { src: VietNam, alt: 'Project 1' },
        { src: VietNam, alt: 'Project 2' },
        { src: VietNam, alt: 'Project 3' },
        { src: VietNam, alt: 'Project 4' },
    ]

    return (
        <Box width="100%" height="100vh" bgcolor={Color.black}>
            <Box
                display="flex"
                alignItems="center"
                height="100%"
                width="90%"
                m="0 auto"
                flexDirection="column"
                gap="40px"
                maxWidth={'1100px'}
                margin={'0 auto'}
            >
                <Typography
                    variant="h4"
                    color={Color.white}
                    fontWeight={600}
                    mt="40px"
                >
                    {t('ProjectTitle')}
                </Typography>

                <Typography
                    variant="body1"
                    color={Color.grayText}
                    fontWeight={400}
                    width="50%"
                    textAlign="center"
                >
                    {t('ProjectDescription')}
                </Typography>

                <Box
                    width="100%"
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="space-between"
                    margin="0 auto"
                    rowGap="40px"
                >
                    {projectImages.map((project, index) => (
                        <Box
                            key={index}
                            width="45%"
                            height="200px"
                            position="relative"
                            overflow="hidden"
                            sx={{
                                '&:hover .overlay': {
                                    opacity: 1,
                                },
                                cursor: 'pointer',
                            }}
                        >
                            <LazyImage src={project.src} alt={project.alt} />
                            <Box
                                className="overlay"
                                position="absolute"
                                top={0}
                                left={0}
                                width="100%"
                                height="100%"
                                bgcolor="rgba(0, 0, 0, 0.6)"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                color={Color.white}
                                textAlign="center"
                                fontWeight="bold"
                                fontSize="1.2rem"
                                sx={{
                                    transition: 'opacity 0.3s ease',
                                    opacity: 0,
                                }}
                            >
                                {t('ProjectOverlayText')}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
