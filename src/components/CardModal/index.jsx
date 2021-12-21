import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../hooks/useModal";
import { getOneComic } from "../../services/comicsOperations";
import { CloseIcon } from "../../utils/icons";
import "./styles.css";

export default function CardModal({ id }) {
  const { modalToggle, setModalToggle } = useContext(ModalContext);
  const [comicModal, setComicModal] = useState();

  useEffect(() => {
    async function getComic() {
      try {
        const { data } = await (await getOneComic(id)).json();
        setComicModal(data);
        console.log(data);
      } catch (error) {
        console.log("Erro ao buscar o Comic selecionado!");
      }
    }
    getComic(id);
  }, [id]);
  return comicModal.results && modalToggle && comicModal.results.id === id ? (
    <section className="modal">
      <div className="modal_area">
        <button className="btn_close" onClick={setModalToggle}>
          {CloseIcon}
        </button>
        <h1 className="modal_title">{comicModal.result.title}</h1>
        <div className="modal_description">
          <img
            src={`${comicModal.thumbnail.path}.${comicModal.thumbnail.extension}`}
            alt={comicModal.result.title}
          />
          <p>{comicModal.result.description}</p>
        </div>
      </div>
    </section>
  ) : null;
}
