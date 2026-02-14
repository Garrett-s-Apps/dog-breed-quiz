export default function ProgressBar({ current, total }) {
  const progress = ((current) / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-text">
        <span>Question {current + 1} of {total}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
