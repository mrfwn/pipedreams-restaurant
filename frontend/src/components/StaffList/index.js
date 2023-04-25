import { List } from './styles';

export const StaffList = () => {
    return(
        <List>
            {['mario', 'debora'].map((staff, index) => (
            <li key={String(index)}><span>{staff}</span></li>
          ))}
        </List>
    )
}