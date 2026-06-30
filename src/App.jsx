import { useState } from "react";
import { clients } from "./data/clients";
import Banner from "./components/Banner/Banner";
import ClientList from "./components/ClientList/ClientList";
import CampaignButton from "./components/CampaignButton/CampaignButton";
import CampaignModal from "./components/CampaignModal/CampaignModal";

function App() {
  const [selectedIds, setSelectedIds] = useState([]);
  const [campaignStatus, setCampaignStatus] = useState("idle");
  const [sendStatuses, setSendStatuses] = useState({});

  // Busca clientes seleccionados y busca si alguno de ellos tiene puntuacion > 80
  const SelectRisk = clients
    .filter((cliente) => selectedIds.includes(cliente.id))
    .some((cliente) => cliente.puntuacion > 80);

  // Ahora vamos a guardar los clientes inactivos si SelectRisk es true
  const disabledIds = SelectRisk
    ? clients.filter((cliente) => cliente.estado === "inactivo").map((cliente) => cliente.id)
    : [];


  
  //Cambios de estado entre cliente seleccionado y no seleccionado, regla del > 80
  const toggleSelection = (clientId) => {
    setSelectedIds((actual) => {
      const newIds = actual.includes(clientId)
        ? actual.filter((id) => id !== clientId)
        : [...actual, clientId];

      // Revisa si hay clientes > 80 en ele nuevo arreglo
      const Risk = clients
        .filter((cliente) => newIds.includes(cliente.id))
        .some((cliente) => cliente.puntuacion > 80);

      if (Risk) {
        // Si hay clientes inactivos se les quita el check
        const inactiveIds = clients
          .filter((cliente) => cliente.estado === "inactivo").map((cliente) => cliente.id);
        return newIds.filter((id) => !inactiveIds.includes(id));
      }

      return newIds;
    });
  };

  // Cambia el estado de la campaña
  const startCampaign = () => {
    //Creo cola de envio
    const queue = clients.filter((cliente) => selectedIds.includes(cliente.id));

    // Inicializo los estados de envio de cada cliente en la cola
    const initialStatuses = {};
    queue.forEach((cliente) => { initialStatuses[cliente.id] = "pending"; });
    setSendStatuses(initialStatuses);
    setCampaignStatus("running");

    // Envio de la campaña
    queue.forEach((cliente, indice) => {
      setTimeout(() => {
        setSendStatuses((actual) => ({ ...actual, [cliente.id]: "sending" }));

        //Tiempo de envio
        setTimeout(() => {
          const hasError = cliente.email.endsWith(".org");
          setSendStatuses((actual) => ({
            ...actual,
            [cliente.id]: hasError ? "error" : "success",
          }));

          if (indice === queue.length - 1) {
            setCampaignStatus("finished");
          }
        }, 1500);
      }, indice * 1500);
    });
  };

  const closeCampaign = () => {
    setCampaignStatus("idle");
    setSendStatuses({});
    setSelectedIds([]);
  };

  const queue = clients.filter((cliente) => selectedIds.includes(cliente.id));

  return (
    <div>
      <Banner />
      <ClientList
        clients={clients}
        selectedIds={selectedIds}
        disabledIds={disabledIds}
        onToggle={toggleSelection}
        campaignStatus={campaignStatus}
      />
      <CampaignButton
        disabled={selectedIds.length === 0 || campaignStatus !== "idle"}
        onStart={startCampaign}
      />
      <CampaignModal
        isVisible={campaignStatus !== "idle"}
        queue={queue}
        sendStatuses={sendStatuses}
        campaignStatus={campaignStatus}
        onClose={closeCampaign}
      />
    </div>
  );
}

export default App;