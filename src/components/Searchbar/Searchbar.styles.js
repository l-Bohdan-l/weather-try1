/* eslint-disable no-unused-vars */
import styled from 'styled-components';

export const Input = styled.div`
    --background: #fff;
    --border-default: #D0D0DF;
    --border-active: #3D6DF9;
    --shadow-default: #{rgba(#202048, .12)};
    --shadow-active: #{rgba(#3D6DF9, .25)};
    --text-color: #818190;
    --placeholder-color: #C9C9D9;
    --placeholder-color-hover: #BABAC9;
    --close: #818190;
    --close-light: #BABAC9;
    --close-background: #F1F1FA;
    width: 100%;
    max-width: 240px;
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 8px;
    background: var(--background);
    box-shadow: inset 0 0 0 var(--border-width, 1px) var(--border, var(--border-default)), 0 1px 3px var(--shadow, var(--shadow-default));
    transition: box-shadow .2s;    
   
    #text {
        flex-grow: 1;
        input {
            -webkit-appearance: none;
            line-height: 24px;
            background: none;
            border: none;
            outline: none;
            display: block;
            width: 100%;
            margin: 0;
            padding: 12px 16px;
            font-family: inherit;
            font-size: 14px;
            font-weight: 500;
            color: var(--text-color);
            &::placeholder {
                color: var(--placeholder-color);
                transition: color .2s;
            }
        }
    }
    &:hover, &:focus {
        border-bottom: 1px solid black;
        #text {
            input {
                &::placeholder {
                    color: var(--placeholder-color-hover);
                }
            }
        }
    }
`;

export const ClearButton = styled.button`    

`