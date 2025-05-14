import React from 'react'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'

const LanguageSwitch: React.FC = () => {
    const { i18n } = useTranslation()
    const isEnglish = i18n.language === 'en'

    const handleToggleLanguage = () => {
        i18n.changeLanguage(isEnglish ? 'vi' : 'en')
    }

    return (
        <Typography
            onClick={handleToggleLanguage}
            sx={{
                color: 'white',
                cursor: 'pointer',
                fontWeight: 'bold',
            }}
        >
            {isEnglish ? 'EN' : 'VN'}
        </Typography>
    )
}

export default LanguageSwitch
