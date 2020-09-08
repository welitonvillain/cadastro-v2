import React, { useState, useEffect, useCallback } from 'react';
import { subMonths, addMonths, getMonth, getDate } from 'date-fns';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { Container, Header, Content, Days, Day, Activities} from './styles';

import { getDataOfMonth } from '../../utils/date';

import Register from '../../components/Register';

const Activity: React.FC = () => {
    const [month, setMonth] = useState(getDataOfMonth(new Date()));
    const [day, setDay] = useState(month.days[getDate(new Date()) - 1]);
    const [registers, setRegisters] = useState([{ id: 1, uuid: 'asdasasdasd'}]);

    const handleChangeMonth = useCallback((to: 'forward' | 'backward') => {
      if (to === 'forward') {
        const data = getDataOfMonth(addMonths(new Date(month.year, month.month), 1));
        setDay(data.days[0]);
        setMonth(data);
      }

      if (to === 'backward') {
        const data = getDataOfMonth(subMonths(new Date(month.year, month.month), 1));
        setDay(data.days[0]);
        setMonth(data);
      }

    }, [month]);

    const handleChangeDay = useCallback((to: number) => {
      let days = month.days;
      // Define o dia atual como false para o caso de mudança de mês
      days[new Date().getDate() - 1].selected = false;
      // Define o dia selecionado como false
      days[day.number - 1].selected = false;
      // Define o novo dia como true
      days[to - 1].selected = true;

      month.days = days;

      setMonth(month);
      setDay(month.days[to - 1]);
    }, [day]);

    const handleIncrementRegister = () => {
      setRegisters([...registers, { id: 2, uuid: 'kakakakakaka'}]);
    }


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
                        {month.days.map((day) => {
                            return (
                              <Day
                                  key={day.number}
                                  onClick={() => handleChangeDay(day.number)}
                                  isSelected={day.selected}
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
                      {registers.map((register) => {
                        return (
                          <Register
                            key={register.id}
                            uuid={register.uuid}
                            date={day.dateISO}
                            increment={handleIncrementRegister}
                          />
                        );
                      })
                      }
                    </Activities>
                  </Content>
                </div>
        </Container>
    );
};

export default Activity;
