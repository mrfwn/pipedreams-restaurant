import { Container, Button, CurrentDay } from "./styles"
import { useWeekday } from '../../hooks/AppProvider';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';

export const Header = () => {
    
    const { weekday, prevDay, nextDay } = useWeekday();
    return (
        <Container>
            <Button isLimit={weekday.isPrevLimit} onClick={prevDay}>Prev <AiOutlineArrowLeft size={30}/></Button>
            <CurrentDay>{weekday.nameWeekday}</CurrentDay>
            <Button isLimit={weekday.isNextLimit} onClick={nextDay}>Next <AiOutlineArrowRight size={30}/></Button>
        </Container>
    )
}