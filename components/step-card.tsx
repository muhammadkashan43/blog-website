interface StepCardProps {
  number: string;
  title: string;
  description: string;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function StepCard({
  number,
  title,
  description,
  isActive = false,
  onMouseEnter,
  onMouseLeave,
}: StepCardProps) {
  return (
    <div
      className={`p-6 rounded-lg ${
        isActive ? "bg-purple-600 text-white" : "bg-gray-50 text-gray-900"
      } transition-colors`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="space-y-4">
        <div
          className={`text-4xl font-bold ${
            isActive ? "text-white" : "text-purple-600"
          }`}
        >
          {number}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className={`${isActive ? "text-purple-100" : "text-gray-600"}`}>
          {description}
        </p>
        <button
          className={`text-sm font-medium ${
            isActive ? "text-white" : "text-purple-600"
          } hover:underline`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}


