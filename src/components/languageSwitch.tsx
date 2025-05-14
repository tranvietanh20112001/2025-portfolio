import React from 'react'
import { useTranslation } from 'react-i18next'
import { FormControlLabel, Switch } from '@mui/material'

const LanguageSwitch: React.FC = () => {
    const { i18n } = useTranslation()

    const isEnglish = i18n.language === 'en'

    const handleToggleLanguage = () => {
        const newLang = isEnglish ? 'vi' : 'en'
        i18n.changeLanguage(newLang)
    }

    return (
        <FormControlLabel
            control={
                <Switch checked={isEnglish} onChange={handleToggleLanguage} />
            }
            label={isEnglish ? 'English' : 'Tiếng Việt'}
            sx={{ color: 'white' }}
        />
    )
}

export default LanguageSwitch
