import { setFavorite } from '@/Actions'
import { StarOutlined, StarFilled } from '@ant-design/icons'
import { useDispatch } from 'react-redux'

interface ButtonFavoriteProps {
  id: number
  favorite: boolean
}

export const ButtonFavorite = ({ id, favorite }: ButtonFavoriteProps) => {
  const dispatch = useDispatch()

  const IconStart = (props: any) => (favorite ? <StarFilled {...props} /> : <StarOutlined {...props} />)
  return (
    <button className={`btn start ${favorite ? 'active' : ''}`} onClick={() => dispatch(setFavorite(id))}>
      <IconStart className="select-none" style={{ fontSize: '1.2rem' }} />
    </button>
  )
}
