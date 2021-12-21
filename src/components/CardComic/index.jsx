import { AddIcon } from "../../utils/icons";
import "./styles.css";

export default function CardComic({src, title, description}) {
    return (
        <section className="card_comic">
            <h2>{title}</h2>
            <img src={src} alt={title} />
            <button className="open_modal">
                {AddIcon}
                Detalhes
            </button>
        </section>
    );
}