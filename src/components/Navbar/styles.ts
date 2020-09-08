import styled, { css, keyframes } from 'styled-components';
import { MdSearch, MdMenu } from 'react-icons/md';

interface SearchProps {
    isSearching: boolean;
}

interface MenuProps {
    isOpen: boolean;
}

interface SlideBarProps {
    isOpen: boolean;
}

export const Container = styled.div`
    position: fixed;
    top: 0;
    z-index: 100;

    display: flex;
    justify-content: space-between;
    height: 40px;
    width: 100vw;

    background-color: #f2f2f2;

    box-shadow: 0 2px 4px #ddd;
`;

export const Menu = styled.div<MenuProps>`
    display: flex;
    align-items: center;
    width: 240px;
    height: 40px;

    .menu-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        border-right: 1px solid #e1e1e1;

        transition: margin-left 0.2s ease-in;

        cursor: pointer;

        &:hover {
            svg {
                color: #536DFE;
            }
        }
    }

    ${(props) =>
        props.isOpen && css`
            .menu-container {
                margin-left: 200px;
            }

        `
    }
`;

export const MenuIcon = styled(MdMenu)`
    height: 24px;
    width: 24px;
    color: #293845;
    transition: color .2s ease;
`;

export const Center = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-right: 140px;

    span {
        margin: 0 auto;
        width: 200px;
        font-size: 16px;
        font-weight: 600;
        color: #293845;
    }

`;

export const Search = styled.div<SearchProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80px;
    height: 40px;

    transition: width 0.2s ease-in;

    .select-container {
        display: none;
        width: 350px;
        height: 40px;
        padding: 4px;
        justify-content: center;
        align-items: center;
    }

    ${(props) =>
        props.isSearching ?
            css`
                width: 450px;

                .select-container {
                    display: flex;
                }
            `
            :
            css`
                width: 80px;

                .select-container {
                    display: none;
                }
            `
    }
`;

export const SearchBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-right: 1px solid #e1e1e1;

    cursor: pointer;

    &:hover {
        svg {
            color: #536DFE;
        }
    }
`;

export const SearchIcon = styled(MdSearch)`
    height: 24px;
    width: 24px;
    color: #293845;
    transition: color .2s ease;
`;

export const UserBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;

    .user-icon {
        width: 28px;
        height: 28px;
        border-radius: 50%;

        background-color: #999;
    }
`;

export const SlideBar = styled.div<SlideBarProps>`
    position: absolute;
    top: 40px;
    left: -240px;
    z-index: 100;

    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 240px;
    padding: 24px 8px;
    background-color: #f2f2f2;
    border-top: 1px solid #e1e1e1;

    box-shadow: 2px 2px 4px #ddd;

    transition: left 0.2s ease-in;

    ${(props) =>
        props.isOpen && css`
            left: 0;
        `
    }
`;

export const Option = styled.div`
    position: relative;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    width: 100%;
    margin-bottom: 8px;
    border-radius: 4px;
    color: #293845;

    transition: background 0.2s;

    cursor: pointer;

    span {
        margin-left: 8px;
        font-weight: 600;
        font-size: 14px;
    }

    .option-icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;

        svg {
            transition: color 0.2s;
        }
    }

    &:hover {
        background-color: #e7e7e7;

        svg {
            color: #536DFE;
        }
    }
`;
