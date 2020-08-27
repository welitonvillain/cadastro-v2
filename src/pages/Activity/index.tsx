import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { Container, Header, Content } from './styles';

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
                <Register />
                <Register />
            </Content>
        </Container>
    );
};

export default Activity;