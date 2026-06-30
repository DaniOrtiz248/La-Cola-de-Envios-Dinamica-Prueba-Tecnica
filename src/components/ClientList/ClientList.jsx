import ClientCard from "../ClientCard/ClientCard";
import styles from "./ClientList.module.css";

function ClientList({ clients, selectedIds, disabledIds, onToggle, campaignStatus }) {
  return (
    <div className={styles.clientList}>
      {clients.map((client) => (
        <ClientCard
          key={client.id}
          client={client}
          isSelected={selectedIds.includes(client.id)}
          isDisabled={disabledIds.includes(client.id) || campaignStatus !== "idle"}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default ClientList;
