import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { StaffList } from '../../components/StaffList';
import { Container, HeadContainer } from './styles';
import { useWeekday } from '../../hooks/AppProvider';
import api from '../../service/api';

export const Waiters = () => {
    const navigate = useNavigate();
    const { weekday } = useWeekday();
    const [waitersSchedule, setWaitersSchedule] = useState({});

    
    useEffect(() => {
        async function fetchData() {
            try{
                const newWorkSchedule = await api.get('/GetWaiters');
                setWaitersSchedule(newWorkSchedule.data);
            }catch(e){
                console.log(e)
                throw new Error("Error when trying to capture work schedule information")
            }
            
        }
        fetchData()
    }, []);
    return (
        <Container>
            <HeadContainer>
                <h2>Waiters</h2>
                <h3 onClick={() => navigate('/Cooks')}><AiOutlineArrowLeft /> Cooks</h3>
            </HeadContainer>
            <StaffList list={waitersSchedule[weekday.nameWeekday.toLowerCase()]}/>
        </Container>
    )
}