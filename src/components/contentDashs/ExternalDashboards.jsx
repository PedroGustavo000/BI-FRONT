import React from "react";
import './../style/contentdash.css'
import {PedidosIsencao, CursosDadas} from './../dashs/ChartsExternal';

function ExternalDashboards() {
    return(
        <div className="generalDash">
            <div className="boxesDash">
                <div className="box">
                    <div className="card">
                        <h3>Total de Inscritos: <strong>1000</strong></h3>
                        <div className="divisor"></div>
                        <span>
                            Concursados: <strong>50%</strong>
                        </span>
                        <span>
                            Desistentes: <strong>50%</strong>
                        </span>
                        <div className="divisor"></div>
                    </div>
                    <div className="card_dash">
                        <CursosDadas/>
                    </div>
                </div>
                <div className="box">
                    <div className="card_dash">
                        < PedidosIsencao/>
                    </div>
                    <div className="card_dash">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExternalDashboards;