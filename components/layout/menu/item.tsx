'use client'
import React, { FC } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type Props = {
  text: string
  href: string
  isActive: boolean
}

const Item: FC<Props> = ({
  text,
  href,
  isActive
}) => {
  return (
    <Link href={href} className='block'>
      <Button
        variant="ghost"
        className='w-full justify-start'
        isActive={isActive}
      >{text}</Button>
    </Link>
  )
}
export default React.memo(Item)

