import React, { useState } from 'react';
import * as ACTIONS from "../Redux/action_fonction";

const ButtonAdd = function(props){

    const [elemenTtoAdd, useelementToADD] =  useState('')
    const [removeElement, useelremoveElement] =  useState('')
    const [textmodifier, useeltextmodifier] =  useState('')
    const [idmodifier, useelidmodifier] =  useState('')

    function handlerClickadd(){
        const { store } = props;
        var elems = store.getState().elems;
        store.dispatch(ACTIONS.add_elem(elemenTtoAdd));
        useelementToADD('')
    }
    function handlerClickremove(){
        const { store } = props;
        var elems = store.getState().elems;
        store.dispatch(ACTIONS.remove_elem(removeElement));
        useelremoveElement('')
    }

    function handlerClickModifier(){
        const { store } = props;
        var elems = store.getState().elems;
        store.dispatch(ACTIONS.modify_elem(idmodifier, textmodifier));
        useeltextmodifier('' )
        useelidmodifier('')
    }

    function handlerClickInverser(){
        const { store } = props;
        var elems = store.getState().elems;
        store.dispatch(ACTIONS.revert_list());
    }

    
    const SetElementToadd = (e)=>
    {
        useelementToADD(e.target.value)
    }

    const RemoveElement = (e)=>
    {
        useelremoveElement(e.target.value)
    }
    const Textmodifier = (e)=>
    {
        useeltextmodifier( e.target.value)
    }
    const Idmodifier = (e)=>
    {
        useelidmodifier(e.target.value )
    }

    return (
        <div>
            <p>Texte à ajouter <input type='text' name='elementtoadd' value={elemenTtoAdd} onChange={SetElementToadd} ></input>
            <button onClick={handlerClickadd}>{props.text}</button></p>
            
            <p>Id de l'élément à supprimer <input type='text' name='removeElement' value={removeElement} onChange={RemoveElement} ></input>
            <button  onClick={handlerClickremove}>Supprimer</button></p>

            
            <p>
            Nouveau text <input type='text' name='Text to modifie' value={textmodifier} onChange={Textmodifier} ></input> 
             Id de l'élément <input type='text' name='Keyoftheelement' value={idmodifier} onChange={Idmodifier} ></input>
            <button  onClick={handlerClickModifier}>Modifier</button></p>

            <p><button  onClick={handlerClickInverser}>Inverser la liste</button></p>
        </div>
            )
}

export default ButtonAdd;