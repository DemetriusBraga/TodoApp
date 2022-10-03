import './Card.css';
import React from 'react';

function getColor(props) {
    if (props.color1) return 'color1';
    if (props.color2) return 'color2';
    if (props.color3) return 'color3';
    return '';
}

const Card = function (props) {
    return (
        <div className={`card ${getColor(props)}`}>
            <div className="content">{props.children}</div>
        </div>
    );
};

export default Card;
