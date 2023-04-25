import { useNavigate } from 'react-router-dom';
import {AiOutlineArrowRight} from 'react-icons/ai';
import { StaffList } from "../../components/StaffList"
import { Container, HeadContainer } from "./styles"
export const Cooks = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <HeadContainer>
                <h2>Cooks</h2>
                <h3 onClick={() => navigate('/Waiters')}> Waiters <AiOutlineArrowRight /></h3>
            </HeadContainer>
            
            <StaffList />
        </Container>
    )
}