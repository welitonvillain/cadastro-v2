import React, { useState, useCallback } from 'react';
import { AiOutlineFieldTime, AiOutlineBarChart } from 'react-icons/ai';

import Select from '../Select';

import { 
    Container,
    Menu, 
    Center, 
    Search, 
    SearchBox, 
    UserBox, 
    SearchIcon, 
    MenuIcon,
    SlideBar,
    Option
} from './styles';

const Navbar: React.FC = () => {
    const [isSearching, setSearching] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Container>
                <Menu isOpen={isOpen}>
                    <div className="menu-container" onClick={() => setIsOpen(!isOpen)}>
                        <MenuIcon /> 
                    </div>
                </Menu>
                <Center>
                    <span>Cadastro de Atividades</span>
                </Center>

                <Search isSearching={isSearching}>
                    <SearchBox onClick={() => setSearching(!isSearching)}>
                        <SearchIcon />
                    </SearchBox>
                    <div className="select-container">
                        <Select name="search" id="my-id" placeholder={"Que projeto está procurando?"}/>
                    </div>

                    <UserBox>
                        <div className="user-icon"></div>
                    </UserBox>
                </Search>
            </Container>
            <SlideBar isOpen={isOpen}>
                <Option>
                    <div className="option-icon-container">
                        <AiOutlineFieldTime size={24} />
                    </div>      
                    <span>Cadastro de atividades</span>
                </Option>
                <Option>
                    <div className="option-icon-container">
                        <AiOutlineBarChart size={24} />
                    </div>      
                    <span>Desempenho</span>
                </Option>
            </SlideBar>
        </>
    );
}

export default Navbar;