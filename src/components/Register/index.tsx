import React, { useState, useCallback } from 'react';

import { Container } from './styles';

import Select from '../Select';
import Creatable from '../CreatableSelect';

type OptionType = { label: string; value: string };
type TFields = { id: number; value: string; }

interface IRegister {
    uuid: string;
}

const Register: React.FC<IRegister> = ({ uuid }) => {
    const [fields, setFields] = useState<TFields[]>([]);

    const handleChange = useCallback((id: number, value: string) => {

        let exists = fields.findIndex(field => field.id === id);

        exists !== -1 
            ? fields.splice(exists, 1, { id, value }) 
            : fields.push({ id, value });

        fields.sort((a, b) => a.id > b.id ? 1 : -1);

        if ((fields.length === 4 && (fields[fields.length - 1].id === 4)) ||
            (fields.length === 5 && (fields[fields.length - 1].id === 5))) {
            console.log("POST");
        }

        setFields(fields);

        console.log(fields);
    }, [fields]);
  

    return (
        <Container>
            <Creatable 
                type="select" 
                name={"hour-init"} 
                id={"init01"} 
                placeholder={"Inicio"} 
                onChange={(e) => handleChange(1, (e as OptionType).value)}
            />

            <Creatable 
                type="select" 
                name={"hour-end"} 
                id={"init01"} 
                placeholder={"Fim"}
                onChange={(e) => handleChange(2, (e as OptionType).value)}
            />

            <Select 
                type="select" 
                name={"activity"} 
                id={"init01"} 
                placeholder={"Atividade"}
                onChange={(e) => handleChange(3, (e as OptionType).value)}
            />

            <Select 
                type="select" 
                name={"classification"} 
                id={"init01"} 
                placeholder={"Classificação"}
                onChange={(e) => handleChange(4, (e as OptionType).value)}
            />

            <input 
                type="text" 
                name={"description"} 
                placeholder={"Descrição da atividade"}
                defaultValue="ola"
            />

            <div className="delete-container">
                <button tabIndex={-1}>X</button> 
            </div>
              
        </Container>
    );
}

export default Register;