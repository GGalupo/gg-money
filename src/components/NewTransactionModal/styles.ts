import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        height: 4rem;

        padding: 0 1.5rem;

        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;

        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        & + input {
            margin-top: 1rem;
        }

        &::placeholder {
            color: var(--text-body);
        }
    }

    button[type="submit"] {
        width: 100%;
        height: 4rem;
        
        background: var(--green);
        color: #FFF;

        border-radius: 0.25rem;
        border: 0;

        padding: 0 1.5rem;
        margin-top: 1.5rem;

        font-size: 1rem;
        font-weight: 600;

        transition: filter .2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    gap: 0.5rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
`
interface RadioBoxProps {
    isActive: boolean
    activeColor: 'green' | 'red'
}

const colors = {
    green: '#33CC95',
    red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 4rem;

    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${props => props.isActive
        ? transparentize(0.87, colors[props.activeColor])
        : 'transparent'
    };

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')}
    }

    img {
        width: 20px;
        height: 20px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`