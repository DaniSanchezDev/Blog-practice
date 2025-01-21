import { Link } from 'react-router-dom';
import './ListItem.css'

type ListItemProps= {
    text: string;
    link: string;
}

function ListItem({ text, link }: ListItemProps) {
  return (
    <div className='link'>
      <Link to={link}>{text}</Link>
    </div>
  )
}

export default ListItem
