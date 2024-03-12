'use client'
import React, { FC } from 'react'
import { usePathname } from 'next/navigation'

import Item from './item'

const Menu: FC = () => {
  // get url path use next
  const pathname = usePathname()

  return (
    <div className='pt-4 shrink-0 w-[240px] px-8 space-y-1 border-r border-gray-50'>
      <div className='space-y-1'>
        <Item text="Users" href="/user/list" isActive={pathname.includes('user')} />
        <Item text="Apps" href="/app" isActive={pathname.includes('app')} />
      </div>
    </div>
  )
}
export default React.memo(Menu)

