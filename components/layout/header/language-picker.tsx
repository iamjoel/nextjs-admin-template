'use client'
import React, { FC } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { languages } from '@/i18n/language'
import { setLocaleOnClient, getLocaleOnClient } from '@/i18n'

const LanguagePicker: FC = () => {
  const lan = getLocaleOnClient()

  return (
    <Select value={lan} onValueChange={setLocaleOnClient}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {languages.map(({ value, name }) => (
          <SelectItem key={value} value={value}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
export default React.memo(LanguagePicker)

