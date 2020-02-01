import React from 'react';
import Client from './Client';

export default class Creatures extends React.Component {

    constructor (props) {
        super(props);
        this.client = new Client();
        this.state = {creatures: []};
        this.client.creatures().then(result => this.setState( {creatures : result}));
    }
    
    render() {
        return (
            <section>
                {this.state.creatures.map(creature => <div> {creature.name}<br/> {creature.synonym}<br/> {creature.embranchement}<br/> {creature.classe}<br/> {creature.subclasse}<br/> {creature.famille}<br/> {creature.genre}<br/> {creature.description}<br/> {creature.distribution}<br/> {creature.groupetrophique}<br/> {creature.groupeecologique}<br/> {creature.categorie}</div>)}
            </section>
        )
    }
}