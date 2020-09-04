import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    height: 100vh;
    width: 100vw;

    background-color: #f2f2f2;

    .wrapper-content {
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 1496px;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100px;
    width: 1280px;
    padding-top: 16px;


    .toggle-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        width: 600px;

        span {
            font-size: 18px;
            font-weight: 600;
            color: #293845;
        }

        button {
            height: 36px;
            width: 36px;
            border: 2px solid transparent;
            border-radius: 4px;

            background-color: #e1e1e1;
            
            transition: border 0.2s;

            svg {
                color: #293845;
                transition: color 0.2s;
            }

            &:hover {
                border: 2px solid #536DFE;

                svg {
                    color: #536DFE;
                }
            }
        }
    }
`;

export const Days = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 500px;
    min-width: 100px;
    padding: 4px 0;

    overflow-y: hidden;

    &::-webkit-scrollbar {
            width: 4px;
            background-color: #f2f2f2;
    }

    &::-webkit-scrollbar-track {
        border-radius: 4px;
        background-color: #f2f2f2;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 4px; 
    }

    &:hover {
        overflow-y: scroll;
    }

    .selected {
        color: #f2f2f2;
        background-color: ${lighten(0, '#536DFE')};
    }

    .aaa {
        color: #f2f2f2;
        background-color: ${lighten(0, '#ff8c42')};
    }

    .deselected {
        color: #f2f2f2;
    background-color: ${lighten(0, '#D3455B')};
    }
    
    .finished {
        color: #f2f2f2;
        background-color: ${lighten(0, '#169873')};
    }

    .bbb {
        margin-left: 12px;
        background-color: ${darken(0.1, '#fff')};
    }
`;

export const Day = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60px;
    width: 60px;
    
    border: 2px solid transparent;
    border-radius: 4px;

    background-color: #e1e1e1;

    transition: all 0.2s;

    font-weight: 600;
    font-size: 14px;
    color: #293845;

    & + div {
        margin-top: 4px;
    } 

    &:hover {
        border-color: #536DFE;
        color: #536DFE;
        margin-left: 12px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 8px;
    margin-left: 24px;
`;

export const Activities = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 24px;

    span {
        font-weight: 600;
        font-size: 16px;
        color: #293845;
        margin-bottom: 16px;
    }
`;

