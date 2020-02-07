import React, { Component } from 'react'
import { InfoConsumer } from '../context'
import { Link } from 'react-router-dom'
import Info from '../pages/info'

class Home extends Component {
    render() {
        return (    <div>
                    <InfoConsumer>
                        {value => {
                                return value.creature.map(item => {
                                    return <Info key={item.id} item={item} />;
                                });
                            }}
                    </InfoConsumer>
                    </div> );   
    }
}

export default Home