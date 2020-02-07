import React, { Component } from 'react'
import { InfoConsumer, handleDetail } from '../context'
import polychete from './polychete.JPG'
import './species.css'
import { Link } from 'react-router-dom'

class Info extends Component {
    render() {
        const {
            id,
            name,
            synonym,
            famille
        } = this.props.item;
        return (
            <InfoConsumer>
                {value => (


                    <div className="fuego">
                        <div className="bixbox">
                            <div id="animated-example" className="animated fadeInLeft corona">
                                <h1>{name}</h1>
                                <p>{synonym}, Famille : {famille} </p>
                                <Link
                                    onClick={() => value.handleDetail(id)}
                                    to="/details"
                                    className="btn btn-outline-primary text-uppercase">
                                    More Info >>
                                 </Link>
                                <Link
                                    onClick={() => value.handleDetail(id)}
                                    to="/googlemap"
                                    className="btn btn-outline-primary text-uppercase">
                                    View Map >>
                                 </Link>
                                 <p></p>
                                 <p></p>
                                 <p></p>
                                 <p></p>


                            </div>
                            <div id="animated-example" className="animated fadeInRight ebola ">
                                <img src={polychete} alt="Avatar" />

                            </div>
                        </div>
                        </div>
                        )}
            </InfoConsumer>
                )
                }
                }
                
export default Info;