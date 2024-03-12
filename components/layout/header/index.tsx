'use client'
import React, { FC, useCallback } from 'react'
import { Button } from '../../ui/button'
import Link from 'next/link'
import LanguagePicker from './language-picker'
import { useTranslation } from 'react-i18next'
import { useAppContext } from '@/context/app-context'


type Props = {

}

const Header: FC<Props> = ({
}) => {
  const { user, setUser } = useAppContext()
  const handleChangeName = useCallback(() => {
    setUser({
      ...user,
      name: user.name === 'John Doe' ? 'Anna Swift' : 'John Doe'
    })
  }, [user, setUser])

  const { t } = useTranslation()

  return (
    <div className='flex items-center h-14 justify-between px-8 shadow-sm'>
      <Link className="font-bold" href='/'>
        Dashboard
      </Link>
      <div className='flex items-center space-x-2'>
        <div>{t('hello')} <span className='font-bold'>{user.name}</span></div>
        <Button size='sm' onClick={handleChangeName}>Change name</Button>
        <LanguagePicker />
        <Link href='/login'>
          <Button variant="ghost">Logout</Button>
        </Link>
      </div>
    </div>
  )
}
export default React.memo(Header)

