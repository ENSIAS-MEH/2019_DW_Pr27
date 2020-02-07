import React, { Component } from 'react'
import { InfoConsumer,handleDetail } from '../context'
import { Link } from 'react-router-dom'
import corde from './cordes.jpg'
import '../pages/details.css'

class Details extends Component {
    render() {
        return (
            <InfoConsumer>
                {data => {
                    const {
                        id,
                        name,
                        synonym,
                        famille,
                        description,
                        genre,
                        distribution,
                        embranchement,
                        classe,
                        subclasse,
                        groupetrophique,
                        groupeecologique,
                        categorie,
                    } = data.creature;

                    return (
                        <React.Fragment>
                            <div >
                                <body>
                                    <div className="box bg-info" >
                                        <div className="imgBx">
                                            <img src={corde} alt="" />
                                        </div>
                                        <div className="content">
                                            <h2>{name} </h2>
                                            <h>{synonym}</h>
                                            <ul>
                                                <table>
                                                    <tr><h3>Classification</h3></tr>
                                                    <tr>
                                                        <td><p>Embranchement : </p></td>
                                                        <td><p>{embranchement}</p></td>
                                                    </tr>
                                                    <tr>
                                                        <td><p>Classe :</p></td>
                                                        <td><p>{classe}</p></td>
                                                    </tr>
                                                    <tr>
                                                        <td><p>Ordre :</p></td>
                                                        <td><p>{subclasse}</p></td>
                                                    </tr>
                                                    <tr>
                                                        <td><p>Famille :</p></td>
                                                        <td><p>{famille}</p></td>
                                                    </tr>
                                                    <tr>
                                                        <td><p>Genre :</p></td>
                                                        <td><p>{genre}</p></td>
                                                    </tr>
                                                </table>
                                                <li>
                                                    <h3>Description</h3>
                                                    <p>{description}</p>
                                                </li>
                                                <li>
                                                    <h3>Habitat et distribution :</h3>
                                                    <p>{distribution}</p>
                                                </li>
                                                <li>
                                                    <h3>Groupe trophique : </h3>
                                                    <p>{groupetrophique}</p>
                                                </li>
                                                <li>
                                                    <h3>Groupe écologique</h3>
                                                    <p>{groupeecologique}</p>
                                                </li>
                                                <li>
                                                    <h3>Catégorie d'importance :</h3>
                                                    <p>{categorie}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </body>
                            </div>

                        </React.Fragment>
                    );
                }}
            </InfoConsumer>
        );
    }
}
export default Details