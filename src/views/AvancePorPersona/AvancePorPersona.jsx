import Navbar from "../../components/Navbar/Navbar";
import PaginadoVisual from "../../components/PaginadoVisual/PaginadoVisual";
import Persona from "../../components/Persona/Persona";

import style from "./AvancePorPersona.module.css";

const AvancePorPersona = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className={style.container}>
          <div>
            <table className={style.encabezado}>
              <thead>
                <tr>
                  <th className={style.nombreColaborador}>
                    <h3 className={style.aver}>Nombre del colaborador</h3>
                  </th>
                  <th className={style.otros}>
                    <h4>Cargo</h4>
                  </th>
                  <th className={style.otros}>
                    <h4>Promedio</h4>
                  </th>
                  <th className={style.otros}>
                    <h4>Porcentaje</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                <Persona />
                <Persona />
                <Persona />
                <Persona />
                <Persona />
                <Persona />
                <Persona />
                <Persona />
                <Persona />
                <Persona />
                
              </tbody>
            </table>
            <div className={style.paginado}>
               <PaginadoVisual/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AvancePorPersona;
