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
              <p>Ce catalalogue ne traite pas tous les taxons échantillonnés dans la baie d'Oued Laou. Il concernes le animaux entiers qui étaient correctement prélevés à l'aide de la draque conique utilisée.</p>
              <Link
                className="btn btn-outline-secondary text-uppercase"
                to="/home"
              >
                More Info >>
              </Link>

            </div>
            <div id="animated-example" className="animated fadeInRight ebola ">
              <img src={polychete} alt="Avatar" />


            </div>
          </div>
          <div className="bixbox">
            <div id="animated-example" className="animated fadeInRight2 corona">
              <h1>Echinoderme</h1>
              <p>Ce catalalogue ne traite pas tous les taxons échantillonnés dans la baie d'Oued Laou. Il concernes le animaux entiers qui étaient correctement prélevés à l'aide de la draque conique utilisée.</p>
              <Link
                className="btn btn-outline-secondary text-uppercase"
                to="/"
              >
                More Info >>
              </Link>
            </div>
            <div id="animated-example" className="animated fadeInLeft2 ebola ">
              <img src={polychete} alt="Avatar" />

            </div>
          </div>
          <div className="bixbox">
            <div id="animated-example" className="animated fadeInLeft corona">
              <h1>Polychete</h1>
              <p>Ce catalalogue ne traite pas tous les taxons échantillonnés dans la baie d'Oued Laou. Il concernes le animaux entiers qui étaient correctement prélevés à l'aide de la draque conique utilisée.</p>
              <Link
                className="btn btn-outline-secondary text-uppercase"
                to="/"
              >
                More Info >>
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
                More Info >>
              </Link>
            </div>
            <div id="animated-example" className="animated fadeInLeft2 ebola ">
              <img src={polychete} alt="Avatar" />

            </div>
          </div>
          <div className="bixbox last">
            <div id="animated-example" className="animated fadeInLeft corona">
              <h1>Crustace</h1>
              <p>Ce catalalogue ne traite pas tous les taxons échantillonnés dans la baie d'Oued Laou. Il concernes le animaux entiers qui étaient correctement prélevés à l'aide de la draque conique utilisée.</p>
              <Link
                className="btn btn-outline-secondary text-uppercase"
                to="/"
              >
                More Info >>
              </Link>
            </div>
            <div id="animated-example" className="animated fadeInRight ebola ">
              <img src={polychete} alt="Avatar" />

            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default species;