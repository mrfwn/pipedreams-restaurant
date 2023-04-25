import { useNavigate } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { StaffList } from "../../components/StaffList"
import { Container, HeadContainer } from "./styles"
export const Waiters = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <HeadContainer>
                <h2>Waiters</h2>
                <h3 onClick={() => navigate('/Cooks')}><AiOutlineArrowLeft /> Cooks</h3>
            </HeadContainer>
            <StaffList />
        </Container>
    )
}