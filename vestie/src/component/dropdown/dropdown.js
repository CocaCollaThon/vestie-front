import React from 'react';

const Dropdown = (prop) => {
    return (
        <form>
            <select name="question_type" onChange={prop.acting}>
                <option value="choice">객관식</option>
                <option value="short_answer">주관식</option>
            </select>
        </form>
    )
};

export default Dropdown;