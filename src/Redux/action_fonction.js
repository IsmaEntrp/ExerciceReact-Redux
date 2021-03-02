import *  as ACTIONS from "./action_types.js";

//fonction interne au module permettant de retourner une clé unique
function getUniqueKey() {
    var key = Math.random() + ""; // Retourner une chaîne de caractères
    return key;
}
// Créateurs d'actions
export function add_elem(txt){
    var ukey = getUniqueKey(); //Attribuer une clé unique à l'élément créé
    return {
        type : ACTIONS.ADD_ELEM,
        txt : txt,
        ukey : ukey
    }
}

export function remove_elem(ukey) {
    return {
        type : ACTIONS.REMOVE_ELEM,
        ukey : ukey
    }
}
export function modify_elem(ukey,txt){
    return {
        type : ACTIONS.MODIFY_ELEM,
        ukey : ukey,
        txt : txt
    }
}
export function revert_list() {
    return {
        type : ACTIONS.REVERT_LIST
    }
}

export function find_tag(tag){
    return {
        type : ACTIONS.FIND_TAG,
        tag : tag
    }
}