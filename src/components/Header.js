import React, {useState} from "react";
import "../styles/Header.css";



function Header(props){
    let [count, setNewCount] = React.useState(0)
    const handleClick = () =>{
        setNewCount(count + 1)
        console.log('hello', count);
        count ++;
    };

    return (
        <header>
            This is header
            <button className={ "some-button" } onClick={ handleClick }>
                {props.buttonName}, counted: {count} times
            </button>
        </header>

    )
}

export default Header;