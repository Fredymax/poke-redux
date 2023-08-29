import { Input } from 'antd'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface InputSearchProps {
  setValue: Dispatch<SetStateAction<string>>
  value: string
}

export const InputSearch = (props: InputSearchProps) => {
  const { setValue, value } = props

  const handleChange = (ev: ChangeEvent<HTMLInputElement>): void => {
    setValue(ev.target.value)
  }

  return <Input size="large" placeholder="Search" onChange={handleChange} value={value} />
}
