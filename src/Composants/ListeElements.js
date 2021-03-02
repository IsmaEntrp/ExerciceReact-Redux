import React from 'react';
import Element from './Element';

const ListeElements = function(props) {
    const { store,elems } = props;
    return (
        <ul>
         {
            elems.map(function(elem) {
                return (
                    <li key={elem.key}> 
                        <Element   key={elem.key} text={elem.txt} ukey={elem.ukey} store={store} />
                    </li>
                )
            })
         }
        </ul>
        )
}

export default ListeElements;