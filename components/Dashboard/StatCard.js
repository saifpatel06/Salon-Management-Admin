export default function StatCard({ title, value, icon, color = 'primary' }) {
  return (
    <div className={`card border-${color} shadow-sm`}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="text-muted mb-2">{title}</h6>
            <h2 className={`mb-0 fw-bold text-${color}`}>{value}</h2>
          </div>
          <div className="fs-1">{icon}</div>
        </div>
      </div>
    </div>
  );
}