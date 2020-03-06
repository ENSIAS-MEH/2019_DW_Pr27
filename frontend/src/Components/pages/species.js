import React, { Component } from 'react';
import mollusque from './mollusques.png';
import echinoderme from './echinoderme.jpg';
import polychete from './polychete.JPG'
import corde from './cordes.jpg'
import crustace from './Crustacea.jpg'
import { Link } from 'react-router-dom'
import { InfoConsumer } from '../context'
import './species.css'



class species extends Component {
  render() {
    return (
      <div className="ba3oucha">


        <div className="fuego">
          <div className="bixbox">
            <div id="animated-example" className="animated fadeInLeft corona">
              <h1>Mollusque</h1>
              <p>Les mollusques (Mollusca) sont un embranchement d'animaux Lophotrochozoaires. Ce sont des animaux non segmentés, à symétrie bilatérale quelquefois altérée.</p>
              <Link
                className="btn btn-outline-secondary text-uppercase"
                to="/home"
              >
                Découvrir >>
              </Link>

            </div>
            <div id="animated-example" className="animated fadeInRight ebola ">
              <img src={mollusque} alt="Avatar" />


            </div>
          </div>
          <div className="bixbox">
            <div id="animated-example" className="animated fadeInRight2 corona">
              <h1>Echinoderme</h1>
              <p>Les échinodermes (Echinodermata) forment un embranchement d'animaux marins benthiques présents à toutes les profondeurs océaniques, et dont les premières traces fossiles remontent au Cambrien</p>
              <Link
                className="btn btn-outline-secondary text-uppercase"
                to="/"
              >
                Découvrir >>
              </Link>
            </div>
            <div id="animated-example" className="animated fadeInLeft2 ebola ">
              <img src={echinoderme} alt="Avatar" />

            </div>
          </div>
          <div className="bixbox">
            <div id="animated-example" className="animated fadeInLeft corona">
              <h1>Polychete</h1>
              <p>Les polychètes (Polychaeta) sont une classe de l'embranchement des Annélides. Ils constituent le groupe de vers annélides comportant le plus grand nombre d'espèces, soit plus de 13 000</p>
              <Link
                className="btn btn-outline-secondary text-uppercase"
                to="/"
              >
                Découvrir >>
              </Link>
            </div>
            <div id="animated-example" className="animated fadeInRight ebola ">
              <img src={polychete} alt="Avatar" />

            </div>
          </div>
          <div className="bixbox">
            <div id="animated-example" className="animated fadeInRight2 corona">
              <h1>Corde</h1>
              <p>Ce catalalogue ne traite pas tous les taxons échantillonnés dans la baie d'Oued Laou. Il concernes le animaux entiers qui étaient correctement prélevés à l'aide de la draque conique utilisée.</p>
              <Link
                className="btn btn-outline-secondary text-uppercase"
                to="/"
              >
                Découvrir >>
              </Link>
            </div>
            <div id="animated-example" className="animated fadeInLeft2 ebola ">
              <img src={corde} alt="Avatar" />

            </div>
          </div>
          <div className="bixbox last">
            <div id="animated-example" className="animated fadeInLeft corona">
              <h1>Crustace</h1>
              <p>Les Crustacés (Crustacea) sont un sous-embranchement des Arthropodes. Ce sont des animaux dont le corps est revêtu d’un exosquelette chitinoprotéique appelé exocuticule et souvent imprégné de carbonate de calcium</p>
              <Link
                className="btn btn-outline-secondary text-uppercase"
                to="/"
              >
                Découvrir >>
              </Link>
            </div>
            <div id="animated-example" className="animated fadeInRight ebola ">
              <img src={crustace} alt="Avatar" />

            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default species;