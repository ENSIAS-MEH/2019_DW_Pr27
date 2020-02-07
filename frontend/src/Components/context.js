import React, { Component } from 'react';
import Client from '../Client';

const InfoContext = React.createContext();

class InfoProvider extends Component {

    constructor (props) {
      super(props);
      this.client = new Client();
      this.state = {creature: []};
      this.client.creatures().then(result => this.setState( {creature : result}));
    }

    getItem = id => {
        const item = this.state.creature.find(
            item => item.id === id);
        return item;
      };
    
      handleDetail = id => {
        const item = this.getItem(id);
        this.setState(() => {
          return {
            creature: item
          };
        });
      };
    render() {
        return (
            <InfoContext.Provider value={{
                creature: this.state.creature,
                name: this.state.name,
                synonym: this.state.synonym,
                famille: this.state.famille,
                embranchement: this.state.embranchement,
                classe: this.state.classe,
                subclasse: this.state.subclasse,
                genre: this.state.genre,
                description: this.state.description,
                distribution: this.state.distribution,
                groupetrophique:this.state.groupetrophique,
                groupeecologique: this.state.groupeecologique,
                categorie: this.state.categorie,
                handleDetail: this.handleDetail,
                x1 : this.state.x1,
                x2 : this.state.x2,
                y1 : this.state.y1,
                y2 : this.state.y2,      
            }}>
                {this.props.children}}
            </InfoContext.Provider>
        )
    }
}
const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
