import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 0.3fr 0.3fr 2fr 0.8fr 1fr 0.1fr;
    grid-gap: 2px;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;


    input {
        display: flex;
        height: 36px;
        width: 100%;
        padding: 0 8px;
        border: 2px solid #e1e1e1;
        border-radius: 4px;
        color: #666;
        background-color: #e1e1e1;

        &::placeholder {
            font-weight: 400;
            color: #999;
        }

        font-weight: 400;

        &:focus {
            background-color: #f2f2f2;
        }
    }

    .delete-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 36px;
        width: 100%;
        border-radius: 4px;

        button {
            height: 36px;
            width: 100%;
            border: none;
            border-radius: 4px;
            background-color: #eee;

            font-weight: 600;
            color: #ccc;

            transition: all 0.2s;

            &:hover {
                background-color: #D3455B;
                color: #f2f2f2;
            }
        }
    }
`;

/**
 * export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    margin-bottom: 2px;
`;
 */
