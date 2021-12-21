import Header from "../../components/Header";
import NotFoundImg from "../../assets/undraw_page_not_found_re_e9o6.svg";
import "./styles.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="dialog_404">
        <img
          src={NotFoundImg}
          alt="Página não encontrada!"
          className="img_404"
        />
        <h2>
          Desculpe, ocorreu um erro! Retorne a
          página <Link to="/">Home</Link>, ou tente novamente buscar novamente!
        </h2>
      </div>
    </>
  );
}
