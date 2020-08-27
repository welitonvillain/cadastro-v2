import React from 'react';

import { Container } from './styles';

import Select from '../Select';

const Register: React.FC = () => {
    return (
        <Container>
            <Select name={"hour-init"} id={"init01"} />
        </Container>
    );
}

export default Register;