import { Link } from 'react-router-dom';
import './ListItem.css'

export type ListItemType= {
    text: string;
    link: string;
}

type ListItemProp = {
    item: ListItemType;
}

function ListItem({ item }: ListItemProp) {
  return (
    <div className='link'>
      <Link to={item.link}>{item.text}</Link>
    </div>
  )
}

export default ListItem
