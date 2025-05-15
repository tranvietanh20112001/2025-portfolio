import { Box, Typography, useMediaQuery } from '@mui/material'
import { Color } from '../../../components/color'
import { useTranslation } from 'react-i18next'
import LazyImage from '../../../components/lazyImage'
import Pro2 from '../../../assets/pro2.jpg'
import Pro3 from '../../../assets/pro3.jpg'
import Pro4 from '../../../assets/pro4.jpg'
import Pro1 from '../../../assets/pro1.jpg'
export function Projects() {
    const { t } = useTranslation()
    const isMobile = useMediaQuery('(max-width: 780px)')

    const projectImages = [
        { src: Pro1, alt: 'Project 1', description: t('Project1') },
        { src: Pro2, alt: 'Project 2', description: t('Project2') },
        { src: Pro3, alt: 'Project 3', description: t('Project3') },
        { src: Pro4, alt: 'Project 4', description: t('Project4') },
    ]

    return (
        <Box
            width="100%"
            height={isMobile ? 'auto' : '100vh'}
            bgcolor={Color.black}
            paddingBottom={isMobile ? '40px' : '0'}
        >
            <Box
                display="flex"
                alignItems="center"
                height="100%"
                width="90%"
                m="0 auto"
                flexDirection="column"
                gap={isMobile ? '20px' : '40px'}
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
                    width={isMobile ? '90%' : '50%'}
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
                                <Typography
                                    variant="body1"
                                    color={Color.white}
                                    fontWeight={600}
                                    padding="10px"
                                    textAlign="center"
                                    fontSize={isMobile ? '12px' : '16px'}
                                >
                                    {project.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
