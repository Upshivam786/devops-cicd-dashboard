import "./App.css";

function StatCard({ title, value, sub }) {
  return (
    <div className="card">
      <p className="card-label">{title}</p>
      <h2>{value}</h2>
      {sub && <span>{sub}</span>}
    </div>
  );
}

function Stage({ name, status }) {
  return (
    <div className="stage">
      <span className="dot success"></span>
      <p>{name}</p>
      <small>{status}</small>
    </div>
  );
}

function App() {
  const now = new Date().toLocaleString();

  return (
    <div className="dashboard">
      <header className="hero">
        <div>
          <p className="tag">LIVE PRODUCTION</p>
          <h1>🚀 DevOps Deployment Dashboard</h1>
          <p className="subtitle">
            Automated CI/CD pipeline using Bitbucket, Docker, SSH & GCP VM
          </p>
        </div>

        <div className="status-box">
          <span className="pulse"></span>
          Pipeline Healthy
        </div>
      </header>

      <section className="grid">
        <StatCard title="Total Deployments" value="24" sub="Today +3" />
        <StatCard title="Success Rate" value="100%" sub="No failures" />
        <StatCard title="Avg Deploy Time" value="43 sec" sub="Fast delivery" />
        <StatCard title="Branch" value="main" sub="Production branch" />
      </section>

      <section className="panel">
        <h3>Pipeline Stages</h3>
        <div className="pipeline">
          <Stage name="Lint Check" status="Passed" />
          <Stage name="React Build" status="Passed" />
          <Stage name="Docker Push" status="Passed" />
          <Stage name="Deploy VM" status="Passed" />
        </div>
      </section>

      <section className="panel two-col">
        <div>
          <h3>Infrastructure</h3>
          <ul className="info">
            <li>Cloud Provider: GCP</li>
            <li>VM IP: 34.29.30.10</li>
            <li>Container: frontend-app</li>
            <li>Port: 8080</li>
          </ul>
        </div>

        <div>
          <h3>Last Deployment</h3>
          <ul className="info">
            <li>Status: Success</li>
            <li>Triggered By: Git Push</li>
            <li>Timestamp: {now}</li>
            <li>Auto Deploy: Enabled</li>
          </ul>
        </div>
      </section>

      <section className="panel">
        <h3>Recent Builds</h3>
        <table>
          <thead>
            <tr>
              <th>Build</th>
              <th>Commit</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#24</td>
              <td>f5aa638</td>
              <td className="green">Passed</td>
              <td>43s</td>
            </tr>
            <tr>
              <td>#23</td>
              <td>dd208bc</td>
              <td className="green">Passed</td>
              <td>45s</td>
            </tr>
            <tr>
              <td>#22</td>
              <td>01bfed0</td>
              <td className="green">Passed</td>
              <td>41s</td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer>
        Built with React • Docker • Bitbucket Pipelines • GCP VM
      </footer>
    </div>
  );
}

export default App;
