import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';
import { StaffList } from '../../components/StaffList';
import { Container, HeadContainer } from './styles';
import { useWeekday } from '../../hooks/AppProvider';
import api from '../../service/api';

export const Cooks = () => {
    const navigate = useNavigate();
    const { weekday } = useWeekday();
    const [cooksSchedule, setCooksSchedule] = useState({});

    const fetchCooksSchedule = async () => {
        try{
            const { data } = await api.get('/GetCooks');
            setCooksSchedule(data);
        }catch(e){
            console.log(e);
            throw new Error("Error when trying to capture cooks schedule information")
        }
    }

    useEffect(() => {fetchCooksSchedule()}, []);

    return (
        <Container>
            <HeadContainer>
                <h2>Cooks</h2>
                <h3 onClick={() => navigate('/Waiters')}> Waiters <AiOutlineArrowRight /></h3>
            </HeadContainer>
            
            <StaffList list={cooksSchedule[weekday.nameWeekday.toLowerCase()]}/>
        </Container>
    )
}