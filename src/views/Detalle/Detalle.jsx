import BarraDetail from "../../components/BarraDetail/BarraDetail";
import CardDetail from "../../components/CardDetail/CardDetail";
import Navbar from "../../components/Navbar/Navbar";
import style from "./Detalle.module.css";

const Detalle = () => {
  return (
    <>
      <Navbar />
      <main className={style.container}>
        <div className={style.nombreImg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-user-circle"
            width="250"
            height="250"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#0074fe"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
          </svg>
          <div className={style.nombre}>
            <h1 className={style.name}>Blanca Ruiz Suarez</h1>
            <h4 className={style.cargo}>Analista de Nomina</h4>
            <p className={style.datos}>Datos de contacto</p>
          </div>
        </div>
        <BarraDetail />
        <h2>Temas asignados</h2>
        <CardDetail/>
        <CardDetail/>
        <CardDetail/>
      </main>
    </>
  );
};

export default Detalle;
