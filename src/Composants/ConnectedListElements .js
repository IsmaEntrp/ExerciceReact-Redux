import React from "react";
import ListeElements from "./ListeElements";
import * as ACTIONS from "../Redux/action_fonction"

class ConnectedListeElements extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.store.getState(); // Récupérer dans React l'état Redux
    }

    componentDidMount() {
        const { store } = this.props;
        // Rafraîchissement de la liste pour chaque action de Redux
        // On rafraîchit l'état de React
        this.unsubscribe = store.subscribe( () => {
            this.setState({ ...store.getState() }); // Mise à jour de l'état React
        });
        // Insertion des éléments de la liste de départ
        // ("Element1", ..., "Element5")
        this.props.elems.forEach(function(txt) {
            store.dispatch(ACTIONS.add_elem(txt));
        });
    }
    componentWillUnmount()
    {
        this.unsubscribe(); //Appel de la méhode retournée par store.subscribe()
    }
    render() {
        return <ListeElements elems={this.state.elems} store={this.props.store} />
    }
}

export default ConnectedListeElements;