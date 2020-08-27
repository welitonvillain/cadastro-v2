import React from 'react';
import ReactSelect, { OptionTypeBase, Props as SelectProps } from 'react-select';

import { Styles } from './styles';

interface Props extends SelectProps<OptionTypeBase> {
    name: string;
    id: string;
    placeholder?: string;
}

const options = [
    { value: 'Incidente', label: 'Incidente', color: '#5B91CC' },
    { value: 'Consultas', label: 'Consultas', color: '#5B91CC' },
    { value: 'Diagnóstico', label: 'Diagnóstico', color: '#5B91CC' },
    { value: 'Análise', label: 'Análise', color: '#5B91CC' },
    { value: 'Projeto', label: 'Projeto', color: '#5B91CC' },
    { value: 'Construção', label: 'Construção', color: '#5B91CC' },
]

const Select: React.FC<Props> = ({ name, id, placeholder, ...rest }) => {
    return (
        <ReactSelect
            styles={Styles}
            options={options}
            placeholder={placeholder}
            noOptionsMessage={() => "Desculpe, nada foi encontrado!"}
            {...rest}
        />
    );
};

export default Select;