import React from 'react';

const Element = function(props) {
    const {store, text, ukey } = props;
    return (
        <>
            <p><span style={{fontWeight:'900'}}>Text : </span> { text }<br/> <span style={{fontWeight:'900'}}>Id :</span> {ukey}</p>
        </>
    )
}

export default Element;