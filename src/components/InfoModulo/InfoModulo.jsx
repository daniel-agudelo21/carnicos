import style from "./InfoModulo.module.css";
const InfoModulo = () => {
  return (
    <tr className={style.tr}>
      <td>
        <p>Modulo de bienvenida</p>
        <p>Accion 1</p>
        <p>Accion 2</p>
        <p>Accion 3</p>
        <p>Accion 4</p>
        <p>Accion 5</p>
      </td>
      <td>
        <p>Terminado</p>
        <p className={style.primero}>Terminado</p>
        <p className={style.primero}>Terminado</p>
        <p className={style.primero}>Terminado</p>
        <p className={style.primero}>Terminado</p>
        <p className={style.primero}>Terminado</p>
      </td>
      <td>
        <div className={style.avance}>
          <p>100%</p>
          <progress className={style.progress} max="100" value="100"></progress>
        </div>
        <p>{<br />}</p>
        <p>{<br />}</p>
        <p>{<br />}</p>
        <p>{<br />}</p>
        <p>{<br />}</p>
      </td>
      <td>
        <p>2.5</p>
        <p>{<br />}</p>
        <p>{<br />}</p>
        <p>{<br />}</p>
        <p>{<br />}</p>
        <p>{<br />}</p>
      </td>
    </tr>
  );
};
export default InfoModulo;
