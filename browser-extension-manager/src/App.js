import { useState } from "react";
import extensionsData from "./data.json";

function App() {
  return (
    <div className="App">
      <ExtensionsSection />
    </div>
  );
}

function ExtensionsSection() {
  const [allExtensions, setAllExtensions] = useState(extensionsData);
  const [extensionsList, setExtensionList] = useState(extensionsData);
  const [selectedFilter, setSelectedFilter] = useState("Todos");

  function handleRemoveExetension(id) {
    const updated = allExtensions.filter((extension) => extension.id !== id);
    setAllExtensions(updated);
    applyFilter(selectedFilter, updated);
  }

  function handleFilter(filter) {
    setSelectedFilter(filter);
    applyFilter(filter, allExtensions);
  }

  function handleChangeActive(id) {
    const updated = allExtensions.map((extension) =>
      extension.id === id
        ? { ...extension, isActive: !extension.isActive }
        : extension
    );
    setAllExtensions(updated);
    applyFilter(selectedFilter, updated);
  }

  function applyFilter(filter, list) {
    if (filter === "Todos") {
      setExtensionList(list);
    } else if (filter === "Ativo") {
      setExtensionList(list.filter((extension) => extension.isActive));
    } else if (filter === "Inativo") {
      setExtensionList(list.filter((extension) => !extension.isActive));
    }
  }
  return (
    <section>
      <div className="header-section">
        <h2>Lista de Extensões</h2>
        <ExtensionsFilters
          onFilter={handleFilter}
          selectedFilter={selectedFilter}
        />
      </div>
      <ExtensionsGrid
        extensionsList={extensionsList}
        onRemoveExtension={handleRemoveExetension}
        onChangeActive={handleChangeActive}
      />
    </section>
  );
}

function ExtensionsFilters({ onFilter, selectedFilter }) {
  return (
    <ul className="filters">
      <Filter onClick={onFilter} selectedFilter={selectedFilter}>
        Todos
      </Filter>
      <Filter onClick={onFilter} selectedFilter={selectedFilter}>
        Ativo
      </Filter>
      <Filter onClick={onFilter} selectedFilter={selectedFilter}>
        Inativo
      </Filter>
    </ul>
  );
}

function Filter({ children, onClick, selectedFilter }) {
  const isSelected = selectedFilter === children;
  return (
    <li>
      <button
        className={`button ${isSelected ? "active" : ""}`}
        onClick={() => onClick(children)}
      >
        {children}
      </button>
    </li>
  );
}

function ExtensionsGrid({ extensionsList, onRemoveExtension, onChangeActive }) {
  return (
    <ul className="extensions-list">
      {extensionsList.map((extension) => (
        <li key={extension.id}>
          <ExtensionCard
            extension={extension}
            onClick={onRemoveExtension}
            onChangeActive={onChangeActive}
          />
        </li>
      ))}
    </ul>
  );
}

function ExtensionCard({ extension, onClick, onChangeActive }) {
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
        <button className="button" onClick={() => onClick(extension.id)}>
          Remover
        </button>
        <Switch extension={extension} onChangeActive={onChangeActive} />
      </div>
    </div>
  );
}

function Switch({ extension, onChangeActive }) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={extension.isActive}
        onChange={() => onChangeActive(extension.id)}
      />
      <span className="slider"></span>
    </label>
  );
}
export default App;
