import "./App.css";
import { useEffect, useState } from "react";

function Header() {
  return <h1 className="title">CI/CD Dashboard</h1>;
}

function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.value}</p>
    </div>
  );
}

function App() {
  const [data, setData] = useState({
    status: "Loading...",
    deployments: "...",
    env: "Loading..."
  });

  useEffect(() => {
    setTimeout(() => {
      setData({
        status: "Success",
        deployments: 24,
        env: "Production"
      });
    }, 2000);
  }, []);

  return (
    <div className="container">
      <Header />

      <div className="grid">
        <Card title="Build Status" value={data.status} />
        <Card title="Deployments" value={data.deployments} />
        <Card title="Environment" value={data.env} />
        <Card title="Branch" value="main" />
      </div>
    </div>
  );
}

export default App;
