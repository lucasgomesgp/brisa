import { useEffect, useState } from "react";
import CardComic from "../../components/CardComic";
import Header from "../../components/Header";
import { getAllComics } from "../../services/comicsOperations";
import NoDataImg from "../../assets/undraw_logistics_x-4-dc.svg";
import "./styles.css";

export default function Comics() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    async function getComics() {
      try {
        const { data } = await (await getAllComics()).json();
        setComics(data);
      } catch (error) {
        console.log("Erro ao buscar todos os Comics!", error);
      }
    }
    getComics();
  }, []);
  return (
    <>
      <Header />
      <main className="comics">
        {comics.results ? (
          comics.results.map((comic) => (
            <CardComic
              key={`${comic.id}.${Date.now()}`}
              id={comic.id}
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              title={comic.title}
            />
          ))
        ) : (
          <section className="nodata_sec">
            <div className="loading"></div>
            <img src={NoDataImg} alt="Dados vazios" className="nodata_img" />
          </section>
        )}
      </main>
    </>
  );
}
