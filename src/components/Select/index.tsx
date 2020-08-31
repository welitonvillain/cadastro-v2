import React from 'react';
import ReactSelect, { 
    OptionTypeBase, 
    Props as SelectProps,
    ValueType,
    ActionMeta
} from 'react-select';

import { NavBarStyle, ActivityStyle } from './styles';

type OptionType = { label: string; value: string };
type OnChange = (value: ValueType<OptionType>, actionMeta: ActionMeta<OptionType>) => void;

interface Props extends SelectProps<OptionTypeBase> {
    type: 'select' | 'input';
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

const Select: React.FC<Props> = ({ type, name, id, placeholder = "", ...rest }) => {
    return (
        <ReactSelect
            styles={type === 'select' ? ActivityStyle : NavBarStyle}
            options={options}
            OnC
            placeholder={placeholder}
            noOptionsMessage={() => "Desculpe, nada foi encontrado!"}
            {...rest}
        />
    );
};

export default Select;