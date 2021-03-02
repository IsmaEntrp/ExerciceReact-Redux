import *  as ACTIONS from "./action_types.js"


const stateInit = {
    elems : [], // Tableau {ukey, txt }
    revert : false, // true si la liste est inversée
    find : {
        tag : "", // Tag à rechercher
        elems : [] //Elements contenant le tag recherché
    }
}


export default function reducer(state = stateInit ,action) {
    var newState; //Etat retourné par le reducer
    if (action.type == ACTIONS.ADD_ELEM) {
        var txt = action.txt;
        var ukey = action.ukey;
        var elems = state.elems; 
        elems.push({txt,ukey}); //Ajouter l'élément
        newState = Object.assign({},state,{elems : elems});
    }
    else if (action.type == ACTIONS.REMOVE_ELEM) {
        var ukey = action.ukey;
        var elems = state.elems; 
        elems = elems.filter(function(elem) {
            if (elem.ukey == ukey) return false; //Supprimer l'élément
            else return true; //Conserver l'élément
        });
        newState = Object.assign({},state,{elems : elems});
    }
    else if (action.type == ACTIONS.MODIFY_ELEM) {
        var txt = action.txt;
        var ukey = action.ukey;
        var elems = state.elems; 
        elems = elems.map(function(elem,i) {
         if (elem.ukey == ukey) return {txt, ukey} 
            else return elem; 
        });
        newState = Object.assign({},state,{elems : elems});
    }
    else if (action.type == ACTIONS.REVERT_LIST) {
        var elems = state.elems // Elements actuels
        var revert = state.revert; //Ordre actuel
        elems.reverse(); //Inverser les éléments du tableau
        newState = Object.assign({},state,{elems : elems, revert : !revert });
    }
    else if (action.type == ACTIONS.FIND_TAG) {
        var elems = state.elems; //Elements actuels
        var tag = action.tag; //Tag recherché
        elems = elems.filter(function(elem,i) {
            if (elem.indexOf(tag) >= 0) return true;
            else return false;
        });
        newState = Object.assign({},state,{find : {elems : elems, tag : tag }});
    }
    else {
        //Action inconnue
        newState = state; //Par défaut, on retourne l'état actuel 
    }
    return newState;
}