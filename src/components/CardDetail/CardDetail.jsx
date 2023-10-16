import style from "./CardDetail.module.css";
import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import TableDetail from "../TableDetail/TableDetail";
const CardDetail = () => {
  const [clicked, setClicked] = useState(false);
  let value = true;
  const toggle = (value) => {
    if (clicked === value) return setClicked(null);
    setClicked(value);
  };

  return (
    <div className={style.container}>
      <div className={style.nombre_logo}>
        <div className={style.logoCircle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-flag"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z" />
            <path d="M5 21v-7" />
          </svg>
        </div>
        <div className={style.a}>
          <h3>Linux</h3>
          <div className={style.avance}>
            <h4 className={style.numero}>Avance: 80%</h4>
            <progress
              className={style.progress}
              max="100"
              value="80"
            ></progress>
          </div>
        </div>
        
      </div>
        
      <span className={style.span} onClick={() => toggle(value)}>
        {clicked === value ? (
          <HiChevronUp style={{ color: "#0074fe", fontSize: "50px" }} />
        ) : (
          <HiChevronDown style={{ color: "#0074fe", fontSize: "50px" }} />
        )}
      </span>
      {clicked === value ? <TableDetail /> : null}
    </div>
  );
};
export default CardDetail;
