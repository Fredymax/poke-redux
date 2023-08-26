import { Input } from 'antd'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface Props {
  setValue: Dispatch<SetStateAction<string>>
  value: string
}

export const InputSearch = (props: Props) => {
  const { setValue, value } = props

  const handleChange = (ev: ChangeEvent<HTMLInputElement>): void => {
    setValue(ev.target.value)
  }

  return <Input size="large" placeholder="Search" onChange={handleChange} value={value} />
}
