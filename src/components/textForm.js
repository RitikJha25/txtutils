/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

function TextForm() {
    const [text, setText] = useState("Enter Text Here...");
    const handleEdit = (event) => {
        setText(event.target.value);
    };
    const changeToUpper = () => {
        console.log("upperCase");
        console.log(text.toUpperCase());
        setText(text.toUpperCase());
    };
    const changeToLower = (event) => {
        setText(text.toLowerCase());
    };
    const changeToCapitalise = () => {
        let result = "";
        text.split(" ").forEach((item) => {
            if (item !== "") {
                item = item.charAt(0).toUpperCase() + item.slice(1);
            }
            result += item + " ";
        });
        setText(result);
    };
    const removeExtraSpaces = () => {
        setText(text.replace(/\s+/g, " ").trim());
    };
    const lineSeperate = () => {
        setText();
    };
    return (
        <>
            <div className="container">
                <div className="form-group">
                    <label htmlFor="comment"><h1>Text Formatter</h1></label>
                    <textarea className="form-control" value={text} onChange={handleEdit} rows="8" id="comment"></textarea>
                    <span>
                        words typed: {text.split(" ").length} with {text.length} characters
                    </span>
                </div>
                <button type="button" onClick={changeToUpper} className="btn btn-primary ml-5">
                    Upper Case
                </button>
                <button type="button" onClick={changeToLower} className="btn btn-secondary m-1">
                    Lower Case
                </button>
                <button type="button" onClick={changeToCapitalise} className="btn btn-success m-1">
                    Capitalise
                </button>
                <button type="button" onClick={removeExtraSpaces} className="btn btn-danger m-1">
                    Remove Extra Spaces
                </button>
                <button type="button" onClick={lineSeperate} className="btn btn-warning m-1">
                    line Seperate
                </button>

                <button type="button" className="btn btn-link">
                    Link
                </button>
            </div>
        </>
    );
}

export default TextForm;
