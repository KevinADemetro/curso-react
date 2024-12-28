import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar foto="devs/dev01.jpg" />
      <div className="data">
        <Bio
          nome="Desen Volvedor"
          descricao="Sou desenvolvedor web apaixonado por criar experiências digitais eficientes e responsivas. Com conhecimento em HTML, CSS, JavaScript e frameworks modernos, busco sempre soluções criativas e de alto desempenho para sites e aplicações."
        />
        <SkillList
          skills={[
            { nome: "HTML + CSS", backgroundColor: "red", emoji: "" },
            { nome: "JavaScript", backgroundColor: "green", emoji: "💡" },
            { nome: "React", backgroundColor: "grey", emoji: "🌧️" },
            { nome: "Git e Github", emoji: "💻" },
          ]}
        />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.foto} alt={props.foto} />;
}

function Bio(props) {
  return (
    <div className="bio">
      <h1>{props.nome}</h1>
      <p>{props.descricao}</p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <label style={{ backgroundColor: props.skills[0].backgroundColor }}>
        {props.skills[0].nome} {props.skills[0].emoji}
      </label>
      <label style={{ backgroundColor: props.skills[1].backgroundColor }}>
        {props.skills[1].nome} {props.skills[1].emoji}
      </label>
      <label style={{ backgroundColor: props.skills[2].backgroundColor }}>
        {props.skills[2].nome} {props.skills[2].emoji}
      </label>
      <label style={{ backgroundColor: props.skills[3].backgroundColor }}>
        {props.skills[3].nome} {props.skills[3].emoji}
      </label>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
