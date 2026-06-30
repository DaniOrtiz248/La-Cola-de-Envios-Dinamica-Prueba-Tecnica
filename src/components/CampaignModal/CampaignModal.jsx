import style from "./CampaignModal.module.css";

function CampaignModal({ isVisible, queue, sendStatuses, campaignStatus, onClose }) {
  if (!isVisible) return null;

  const getStatusLabel = (client) => {
    const status = sendStatuses[client.id];
    if (status === "pending") return "En espera...";
    if (status === "sending") return `Enviando a ${client.email}...`;
    if (status === "success") return "Éxito";
    if (status === "error") return "Fallo";
    return "";
  };

  return (
    <div className={style.CampaignModal} role="dialog" aria-modal="true">
      <div className={style.panel}>
        <h2>Campaña en progreso</h2>
        <ul className={style.queueList}>
          {queue.map((client) => (
            <li key={client.id} className={style.queueItem}>
              <div className={style.clientName}>{client.nombre}</div>
              <div className={style.clientStatus}>{getStatusLabel(client)}</div>
            </li>
          ))}
        </ul>
        <button
          className={style.closeButton}
          onClick={onClose}
          disabled={campaignStatus !== "finished"}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default CampaignModal;