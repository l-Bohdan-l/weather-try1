/* eslint-disable no-unused-vars */
import {Input, ClearButton} from './Searchbar.styles';

export function Searchbar() {
    return (
        // <div className="searchbar">
        //     <input type="text" placeholder="Search for weather" />
        //     <button type='button' >Search</button>
        // </div>

        <Input>
            <div id="text">
                <input type="text" placeholder="Search for weather" />
            </div>
            <ClearButton id="clear">
                <svg viewBox="0 0 24 24">
                    <path id="line" d="M2 2L22 22" />
                    <path id="long" d="M9 15L20 4" />
                    <path id="arrow" d="M13 11V7" />
                    <path id="arrow" d="M17 11H13" />
                </svg>
            </ClearButton>
        </Input>
    )
}