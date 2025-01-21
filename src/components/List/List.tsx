import ListItem, { ListItemType } from '../ListItem/ListItem'
import './List.css'

type ListProps = {
    items: ListItemType[];
};

function List({ items }: ListProps) {
  return (
    <div className='items'>
      {items.map((item, index) => (
        <ListItem 
            key={`item-${index}`} 
            item={item} 
        />
    ))}
    </div>
  )
}

export default List
