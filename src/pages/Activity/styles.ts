import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    height: 100vh;
    width: 100vw;

    background-color: #f2f2f2;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    width: 1280px;
    padding: 8px;

    .toggle-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 600px;

        span {
            font-size: 18px;
            font-weight: 600;
            color: #293845;
        }

        button {
            height: 40px;
            width: 40px;
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

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 1280px;
    padding: 8px;
`;

export const DaysContainer = styled.div`
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

