import logo from "./img/Logo.svg";

import styles from "./styles/home.module.css";

import { IoMdAddCircleOutline } from "react-icons/io";

function App() {
  return (
    <>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.task}>
        <input
          className={styles.textAdd}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button className={styles.btnAdd} type="submit">
          Criar <IoMdAddCircleOutline className={styles.icon} />
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles.sub}>
          <div className={styles.texto}>
            <h5 className={styles.nome1}>Tarefas criadas</h5>
            <h5 className={styles.num}>0</h5>
          </div>
          <div className={styles.texto}>
            <h5 className={styles.nome2}>Concluídas</h5>
            <h5 className={styles.num}>0</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
