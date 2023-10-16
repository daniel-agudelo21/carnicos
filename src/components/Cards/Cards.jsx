import style from "./Cards.module.css";
const Cards = () => {
  return (
    <div className={style.container}>
      <div className={style.nombre_logo}>
        <div className={style.logoCircle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-flag"
            width="30"
            height="30"
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
        <h3>Linux</h3>
      </div>
      <button className={style.button}>Ver tema</button>
    </div>
  );
};
export default Cards;
