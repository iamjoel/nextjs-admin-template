export type Item = {
  value: number | string
  name: string
  example: string
}

export type I18nText = {
  'en-US': string
  'zh-Hans': string
  
}

export const languages = [
  {
    value: 'en-US',
    name: 'English',
    supported: true,
  },
  {
    value: 'zh-Hans',
    name: '简体中文',
    supported: true,
  },
]

export const LanguagesSupported = languages.filter(item => item.supported).map(item => item.value)
export type Locale = typeof LanguagesSupported[number]

export const getLanguage = (locale: string) => {
  if (locale === 'zh-Hans')
    return locale.replace('-', '_')

  return LanguagesSupported[0].replace('-', '_')
}

