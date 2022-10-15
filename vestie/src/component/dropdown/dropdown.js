import React from 'react';

const Dropdown = props => {
    return (
        <form>
            <select name="question_type" >
                <option value="choice">객관식</option>
                <option value="short_answer">주관식</option>
            </select>
        </form>
    )
};

export default Dropdown;