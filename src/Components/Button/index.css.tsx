import { css } from '@emotion/react'
import { bp, transition } from '../../shared/css'

export default css`
    font-size: 16px;
    line-height: 18px;
    padding: 13px 16px;
    border-radius: 8px;
    font-weight: 700;
    border: none;
    ${transition('all')};

    ${bp('medium')}{
        
    }

    &:hover {
        cursor: pointer;
    }

    &.primary {
        background-color: #085FF7;
        color: #FFF;
        
    }

    &.primary:hover{
        background-color: #FFF;
        color: #085FF7;
        border: 1px solid #D4D2D0;
    }

    &.secondary {
        background-color: #FFF;
        color: #085FF7;
        border: 1px solid #D4D2D0;
    }

    &.secondary:hover {
        background-color: #085FF7;
        color: #FFF;
        border: none;
    }
`