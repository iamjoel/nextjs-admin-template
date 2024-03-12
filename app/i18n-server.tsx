import React from 'react'
import { cookies } from 'next/headers'
import I18N from '../i18n/i18n'

export type II18NServerProps = {
  children: React.ReactNode
}

const I18NServer = async ({
  children,
}: II18NServerProps) => {
  const locale = cookies().get('locale')?.value || 'en-US'
  return (
    <I18N {...{ locale }}>
      {children}
    </I18N>
  )
}

export default I18NServer
