import style from "./PaginadoVisual.module.css";

const PaginadoVisual = () => {
  return (
    <div className={style.paginado_container}>
      <svg className={style.svg}
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-chevrons-left"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#9e9e9e"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M11 7l-5 5l5 5" />
        <path d="M17 7l-5 5l5 5" />
      </svg>
      <svg className={style.svg}
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-chevron-left"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#9e9e9e"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 6l-6 6l6 6" />
      </svg>
      <span className={style.paginado_round}>1</span>
      <span className={style.paginado_number}>2</span>
      <span className={style.paginado_number}>3</span>
      <span className={style.paginado_number}>4</span>
      <svg className={style.svg}
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-chevron-right"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#9e9e9e"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 6l6 6l-6 6" />
      </svg>
      <svg className={style.svg}
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-chevrons-right"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#9e9e9e"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 7l5 5l-5 5" />
        <path d="M13 7l5 5l-5 5" />
      </svg>
    </div>
  );
};

export default PaginadoVisual;
