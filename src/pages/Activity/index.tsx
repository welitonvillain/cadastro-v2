import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { Container, Header, Content, DaysContainer } from './styles';

import Register from '../../components/Register';

const Activity: React.FC = () => {
    return (
        <Container>
            <Header>
                <div className="toggle-container">
                    <button>
                        <AiOutlineLeft size={24}/>
                    </button>
                    
                    <span>1ª Semana de Agosto</span>

                    <button>
                        <AiOutlineRight size={24}/>
                    </button>
                </div>
            </Header>
            <Content>
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
                
            </Content>
        </Container>
    );
};

export default Activity;