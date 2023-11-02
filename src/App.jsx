import { useState } from "react";
import "./App.css";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faPen } from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faPen);

// Component
import Input from "./components/Input";
function App() {
  // Ces 3 states sont relié aux input correspondants
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  //Gestion des messages d'erreurs
  const [showError, setShowError] = useState(false);

  // Fonction qui est déclenchée lors de la soumission du formulaire
  const handleSubmit = (event) => {
    // Empêche le rafraichissement par défaut du navigateur lors de la soumission
    console.log(event);
    event.preventDefault();
    // Vérifier que mon mot de passe fait plus de 8 caractères
    if (password.length >= 8) {
      // J'affiche une alerte
      alert("Vous avez créé un compte !");
    } else {
      // Je fais apparaître mon message d'erreur
      setShowError(true);
    }
  };

  return (
    <>
      <header>
        <h1>Create account</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <Input
          id="idName"
          label="Name"
          type="text"
          placeholder="Fernand Naudin"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          // value={userName}
        />
        <Input
          id="idEmail"
          label="Email"
          type="email"
          placeholder="distributeurdebourpifs@gmail.com"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          // value={email}
        />
        <Input
          id="idPassword"
          label="Password"
          helpMessage="(8 caractères nimimum)"
          type="password"
          placeholder="Jean Dupont"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          errorMessage="Trop court !!!"
          // value={password} Fout la merde !!!
          state={showError}
          setState={setShowError}
        />
        <Input
          id="idConfirmeEmail"
          label="Confirm your password"
          type="password"
          placeholder="Jean Dupont"
          onChange={(event) => {
            setconfirmPassword(event.target.value);
          }}
          errorMessage="c'est moche !!!"
          // value={confirmPassword}
          state={showError}
          setState={setShowError}
        />

        <button className="button-primary" type="submit">
          Créer mon compte
        </button>
      </form>
      <section className="section">
        <p>
          Name : <strong>{userName}</strong>
        </p>
        <p>
          Email : <strong>{email}</strong>
        </p>
        <p>
          Password :<strong>{password}</strong>
        </p>
        <button className="button-primary" type="submit">
          Modifier mes informations
        </button>
      </section>
      <footer>Footer</footer>
    </>
  );
}

export default App;
