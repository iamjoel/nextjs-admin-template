import i18nNext from 'i18next'
import Cookies from 'js-cookie'
import { initReactI18next } from 'react-i18next'
import { LanguagesSupported, Locale } from '@/i18n/language'

export const LOCALE_COOKIE_NAME = 'locale'

export const i18n = {
  defaultLocale: 'en-US',
  locales: LanguagesSupported,
} as const

const loadLangResources = (lang: string) => ({
  translation: {
    ...require(`./${lang}`).default
  }
})

const resources = LanguagesSupported.reduce((acc: any, lang: string) => {
  acc[lang] = loadLangResources(lang)
  return acc
}, {})


export const changeLanguage = i18nNext.changeLanguage

export const setLocaleOnClient = (locale: Locale, reloadPage?: boolean) => {
  Cookies.set(LOCALE_COOKIE_NAME, locale)
  changeLanguage(locale)
  reloadPage && location.reload()
}

export const getLocaleOnClient = () => {
  return Cookies.get(LOCALE_COOKIE_NAME) || i18n.defaultLocale
}

console.log(getLocaleOnClient())
i18nNext.use(initReactI18next)
  .init({
    lng: undefined,
    fallbackLng: i18n.defaultLocale, // getLocaleOnClient() use this will cause Error: Text content does not match server-rendered HTML.
    resources,
  })

export default i18nNext
