import React from "react";
import './../style/contentdash.css';
import {AulasDadas, LucroMensal , UsuariosMeses} from "../dashs/ChartsApplication";
//import api from '../contentDashs/api'

function ApplicationDash() {

//    const {dado} = await api.get('/qtd-aulas-hoje');

    return(
        <div className="generalDash">
            <div className="boxesDash">
                <div className="box">
                    <div className="card">
                        <h2>Aulas de Hoje</h2>
                        <div>
                            <strong>
                                2020: 2020
                            </strong>
                        </div>
                    </div>
                    <div className="card_dash">
                        <AulasDadas />
                    </div>
                    <div className="card_dash">
                        <UsuariosMeses />
                    </div>
                </div>
                <div className="box">
                    <div className="card_dash">
                        <LucroMensal  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationDash;