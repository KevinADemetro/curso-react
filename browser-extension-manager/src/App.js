import extensionsData from "./data.json";

function App() {
  return (
    <div className="App">
      <ExtensionsSection />
    </div>
  );
}

function ExtensionsSection() {
  return (
    <section>
      <div className="header-section">
        <h2>Lista de Extensões</h2>
        <ExtensionsFilters />
      </div>
      <ExtensionsGrid />
    </section>
  );
}

function ExtensionsFilters() {
  return (
    <ul className="filters">
      <Filter>Todos</Filter>
      <Filter>Ativo</Filter>
      <Filter>Inativo</Filter>
    </ul>
  );
}

function Filter({ children }) {
  return (
    <li>
      <button className="button">{children}</button>
    </li>
  );
}

function ExtensionsGrid() {
  const extensionsList = extensionsData;
  return (
    <ul className="extensions-list">
      {extensionsList.map((extension) => (
        <li>
          <ExtensionCard extension={extension} />
        </li>
      ))}
    </ul>
  );
}

function ExtensionCard({ extension }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={extension.logo} alt="" />
        <div>
          <h3>{extension.name}</h3>
          <p>{extension.description}</p>
        </div>
      </div>
      <div className="card-buttons">
        <button className="button">Remover</button>
        <Switch isChecked={extension.isActive} />
      </div>
    </div>
  );
}

function Switch({ isChecked }) {
  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} />
      <span className="slider"></span>
    </label>
  );
}
export default App;
