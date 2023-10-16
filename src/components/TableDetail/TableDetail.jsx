
import InfoModulo from "../InfoModulo/InfoModulo";
import style from "./TableDetail.module.css";

const TableDetail = () => {
  return (
    <main className={style.container} >
        <h3 className={style.title}>Avance por contenidos y acciones</h3>
      <div >
        <div>
          <table className={style.encabezado}>
            <thead>
              <tr>
                <th className={style.otros1}>
                  <h3 className={style.aver}>Contenidos</h3>
                </th>
                <th className={style.otros}>
                  <h4>Estado</h4>
                </th>
                <th className={style.otros}>
                  <h4>Avance</h4>
                </th>
                <th className={style.otros}>
                  <h4>Nota</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <InfoModulo />
              <InfoModulo />
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default TableDetail;
