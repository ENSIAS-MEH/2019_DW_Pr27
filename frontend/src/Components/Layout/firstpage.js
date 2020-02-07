import React, { Component } from 'react';
import './firstpage.css'
import {Link} from 'react-router-dom'


class Firstpage extends Component{
render(){
    return(
        <div >
            <header>
                <div className="text-center">
                <div className ="miaow fadeInUp">
               <div className="welcome">
                        <h2>Catalogue du Macrobenthos de la baie d'Oued Laou</h2>
                </div>
                <div class="separator"></div>
                    <p>Ce catalogue est dédié au macrobenthos de la baie d'Oued Laou et vient apporter une contribution complémentaire pour mieux faire connaître la biodiversité côtière et marine du pays, en général, et de la Méditerranée marocaine, en particulier.</p>
                        <div class="home_btn">
                                <Link to = "/species" class="btn btn-primary">LEARN MORE >></Link>
                </div>
            </div>
            </div>
            </header>



        </div>
    
    )
}
    
}
export default Firstpage;