import styles from './Banner.module.css';


function Banner () {
    return (
        <div className={styles.banner}>
            <h1>La Cola de Envíos Dinámica</h1>
            <p>Interfaz interactiva para seleccionar clientes y preparar una campaña de correo masivo, controlando los estados de manera estricta.</p>
        </div>
    );
}

export default Banner;