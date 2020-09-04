import React, { useState, useEffect, useCallback } from 'react';
import { subMonths, addMonths, getDate } from 'date-fns';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { Container, Header, Content, Days, Day, Activities} from './styles';

import { getDataOfMonth } from '../../utils/date';

import Register from '../../components/Register';

const Activity: React.FC = () => {
    const [month, setMonth] = useState(getDataOfMonth(new Date()));
    const [day, setDay] = useState(month.days[getDate(new Date()) - 1]);

    const handleChangeMonth = useCallback((to: 'forward' | 'backward') => {
        to === 'forward' 
            ? setMonth(getDataOfMonth(addMonths(new Date(month.year, month.month), 1))) 
            : setMonth(getDataOfMonth(subMonths(new Date(month.year, month.month), 1)));
        
        handleChangeDay(month.days[0].number);
        console.log(month);
    }, [month]);

    const handleChangeDay = useCallback((to: number) => {
        setDay(month.days[to - 1]);
    }, [day]);


    return (
        <Container>
                <Header>
                    <div className="toggle-container">
                        <button onClick={() => handleChangeMonth('backward')}>
                            <AiOutlineLeft size={18}/>
                        </button>
                        
                        <span>{month.name}</span>

                        <button onClick={() => handleChangeMonth('forward')}>
                            <AiOutlineRight size={18}/>
                        </button>
                    </div>
                </Header>
                <div className="wrapper-content">
                    <Days>
                        <div className="wrapper-days">
                            { month.days.map((day) => {                              
                                return (
                                    <Day 
                                        key={day.number}
                                        onClick={() => handleChangeDay(day.number)}
                                    >
                                        {day.number}
                                    </Day>
                                );
                            })}
                        </div>
                    </Days>
                    <Content>
                        <Activities>
                        <span>{`${day.name}, ${day.number}`}</span>
                            <Register uuid="hjasd857dasd"/>
                        </Activities>         
                    </Content>
                    
                </div>     
        </Container>
    );
};

export default Activity;

/* 
    <DaysContainer>
                    <span>Quarta-feira, 27</span>
                    <Register uuid="a5asd312a3s"/>
                    <Register uuid="a5asd312a3s"/>
                </DaysContainer>

                <DaysContainer>
                    <span>Quinta-feira, 28</span>
                    <Register uuid="a5asd312a3s"/>
                    <Register uuid="a5asd312a3s"/>
                </DaysContainer>
*/