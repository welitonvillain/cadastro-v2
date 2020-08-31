import React from 'react';
import { OptionTypeBase } from 'react-select';
import Select, { Props as CreatableProps } from 'react-select/creatable';

import { NavBarStyle, ActivityStyle } from './styles';

interface Props extends CreatableProps<OptionTypeBase> {
    type: 'select' | 'input';
    name: string;
    id: string;
    placeholder?: string;
}

const options = [
    { value: '08:00', label: '08:00' },
    { value: '09:00', label: '09:00' },
    { value: '10:00', label: '10:00' }
]

const Creatable: React.FC<Props> = ({ type, name, id, placeholder = "", ...rest }) => {
    return (
        <Select
            styles={type === 'select' ? ActivityStyle : NavBarStyle}
            options={options}
            placeholder={placeholder}
            noOptionsMessage={() => "Desculpe, nada foi encontrado!"}
            {...rest}
        />
    );
};

export default Creatable;