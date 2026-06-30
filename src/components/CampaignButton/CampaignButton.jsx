import style from "./CampaignButton.module.css";

function CampaignButton({ disabled, onStart }) {
    return (
        <button
            className={style.CampaignButton}
            disabled={disabled}
            onClick={onStart}
        >
            Iniciar Campaña
        </button>
    );
}

export default CampaignButton;