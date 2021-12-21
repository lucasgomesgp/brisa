import { Link } from "react-router-dom";
import { HomeIcon, SearchIcon } from "../../utils/icons";
import "./styles.css";

export default function Header() {
  function sendSearchComic(event) {
    event.preventDefault();
    const comicChoose = event.target.comic.value;
    alert(comicChoose);
  }

  return (
    <header className="header_menu">
      <Link to="/">
        <h3 className="heroes_title">
          {HomeIcon}
          Heroes
        </h3>
      </Link>
      <form onSubmit={sendSearchComic}>
        <input type="text" name="comic" placeholder="O que deseja buscar?" />
        <button type="submit">{SearchIcon}</button>
      </form>
    </header>
  );
}
