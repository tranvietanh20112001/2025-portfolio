import {
    Box,
    Typography,
    IconButton,
    Button,
    useMediaQuery,
} from '@mui/material'
import { Color } from '../../../components/color'
import { useTranslation } from 'react-i18next'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import LazyImage from '../../../components/lazyImage'
import VietNam from '../../../assets/vietnam.png'
import { useState } from 'react'

const blogs = [
    {
        id: 1,
        title: 'My Blog 1',
        descriptionKey: 'BlogDescription',
        image: VietNam,
    },
    {
        id: 2,
        title: 'My Blog 2',
        descriptionKey: 'BlogDescription',
        image: VietNam,
    },
    {
        id: 3,
        title: 'My Blog 3',
        descriptionKey: 'BlogDescription',
        image: VietNam,
    },
    {
        id: 4,
        title: 'My Blog 4',
        descriptionKey: 'BlogDescription',
        image: VietNam,
    },
]

export function Blogs() {
    const { t } = useTranslation()
    const [startIndex, setStartIndex] = useState(0)
    const isMobile = useMediaQuery('(max-width: 780px)')

    const handlePrev = () => {
        setStartIndex((prev) => (prev - 2 + blogs.length) % blogs.length)
    }

    const handleNext = () => {
        setStartIndex((prev) => (prev + 2) % blogs.length)
    }

    const visibleBlogs = [
        blogs[startIndex],
        blogs[(startIndex + 1) % blogs.length],
    ]

    return (
        <Box
            width="100%"
            maxWidth="1440px"
            height={isMobile ? 'auto' : '100vh'}
            paddingBottom={isMobile ? '20px' : 0}
            bgcolor="white"
            margin={'0 auto'}
        >
            <Box
                display="flex"
                alignItems="center"
                height="100%"
                width="100%"
                m="0 auto"
                flexDirection="column"
                gap="40px"
            >
                <Typography
                    variant="h4"
                    color={Color.black}
                    fontWeight={600}
                    mt="40px"
                >
                    {t('BlogTitle')}
                </Typography>

                <Typography
                    variant="body1"
                    color={Color.grayText}
                    fontWeight={400}
                    width="50%"
                    textAlign="center"
                >
                    {t('BlogDescription')}
                </Typography>

                <Box
                    width={isMobile ? '100%' : '80%'}
                    display="flex"
                    justifyContent="space-between"
                    height={isMobile ? 'auto' : '500px'}
                    margin="0 auto"
                >
                    <Box
                        width="10%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <IconButton onClick={handlePrev}>
                            <NavigateBeforeIcon />
                        </IconButton>
                    </Box>

                    <Box
                        width="80%"
                        display="flex"
                        justifyContent="space-between"
                    >
                        {visibleBlogs.map((blog) => (
                            <Box
                                key={blog.id}
                                width="45%"
                                height="100%"
                                display="flex"
                                flexDirection="column"
                                gap="20px"
                            >
                                <Box width="100%" height="300px">
                                    <LazyImage
                                        src={blog.image}
                                        alt={blog.title}
                                    />
                                </Box>

                                <Typography variant="h6" fontWeight={600}>
                                    {blog.title}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    color={Color.grayText}
                                    fontWeight={400}
                                    display={isMobile ? 'none' : 'block'}
                                >
                                    {t(blog.descriptionKey)}
                                </Typography>

                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: Color.green,
                                        width: 'fit-content',
                                        fontSize: '10px',
                                    }}
                                    endIcon={<NavigateNextIcon />}
                                >
                                    Know more
                                </Button>
                            </Box>
                        ))}
                    </Box>

                    <Box
                        width="10%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <IconButton onClick={handleNext}>
                            <NavigateNextIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
