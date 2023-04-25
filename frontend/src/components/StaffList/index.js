import { List } from './styles';

export const StaffList = ({list}) => {
    
    return(
        <List>
            {(list || []).map((staff, index) => (
            <li key={String(index)}><span>{staff}</span></li>
          ))}
        </List>
    )
}