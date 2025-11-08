import { useState } from "react";
import blogPosts from "./assets/articoli";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [articoli, setArticoli] = useState(blogPosts);
  const [nuovoArticolo, setNuovoArticolo] = useState("")

  function aggiungiArticolo(event){
    event.preventDefault();
    setArticoli((event) => [...event, nuovoArticolo])
  }

  return (
    <>
      <main className="container">
        <div className="row text-center">
          <h1>Articoli</h1>
          <form className="d-flex my-4">
            <label>
              Nome:
              <input
                type="text"
                className="col-form-label"
                value={nuovoArticolo}
                onChange={(event) => setNuovoArticolo(event.target.value)}
              />
            </label>
            <button type="submit" className="btn btn-primary mb-3">Aggiungi articolo</button>
          </form>
        </div>
        <div className="row">
          <ul className="list-group">
            {blogPosts.map((articolo, index) => (
              <li className="list-group-item" key={articolo.id}>
                {articolo.titolo}
              </li>
            ))}
          </ul>
          
        </div>
      </main>
    </>
  );
}

export default App;
