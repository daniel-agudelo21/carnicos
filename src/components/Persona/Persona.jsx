import { NavLink } from "react-router-dom";
import style from "./Persona.module.css";
import Detalle from "../../views/Detalle/Detalle";
const Persona = () => {
  return (
    <tr className={style.tr}>
      <td>
        <div className={style.nombre_logo}>
          <div className={style.logoCircle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-user-circle"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#9e9e9e"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
            </svg>
          </div>
          <p>Pepito perez</p>
        </div>
      </td>
      <td>Auxiliar</td>
      <td>3.0</td>
      <td>50%</td>
      <td className={style.boton}>
        <NavLink to="/detail" element={<Detalle />}>
          <button className={style.button}>Ver mas</button>
        </NavLink>
      </td>
    </tr>
  );
};
export default Persona;
