import style from "./ClientCard.module.css";

function ClientCard({ client, isSelected, isDisabled, onToggle }) {
    return (
        <div className={style.ClientCard}>
            
            <p>{client.nombre}</p>
            <p>{client.email}</p>
            <p>{client.estado}</p>
            <p>{client.puntuacion}</p>
            <label>
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onToggle(client.id)}
                    disabled={isDisabled}
                />
            </label>
        </div>
    );
}

export default ClientCard;