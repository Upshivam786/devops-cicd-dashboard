import "./App.css";
import { useState } from "react";

function Card({ title, value }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

function App() {
  const [deployments, setDeployments] = useState(24);
  const status = "Success";
  const [updated, setUpdated] = useState(new Date().toLocaleTimeString());

  function deployNow() {
    setDeployments(deployments + 1);
    setUpdated(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1 className="title">🚀 CI/CD Dashboard</h1>

      <div className="status-row">
        <span className="badge success">{status}</span>
        <span>Last Updated: {updated}</span>
      </div>

      <div className="grid">
        <Card title="Deployments" value={deployments} />
        <Card title="Environment" value="Production" />
        <Card title="Branch" value="main" />
        <Card title="Pipeline" value="Passed" />
      </div>

      <button className="deploy-btn" onClick={deployNow}>
        Trigger Deployment
      </button>
    </div>
  );
}

export default App;
