type ExpertiseCardProps = {
  header: string;
  skills: string[];
  icon?: string;
};

const ExpertiseCard = ({ header, skills, icon }: ExpertiseCardProps) => {
  return (
    <div
      className="flex flex-col border border-border-100 bg-white/70 backdrop-blur
      rounded-2xl p-5 text-left w-full shadow-sm hover:shadow-lg hover:border-primary-200/30 
      transition-all duration-300 h-full"
    >
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border-100">
        {icon && <span className="text-3xl">{icon}</span>}
        <h3 className="text-lg font-semibold text-primary-200">{header}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="inline-flex items-center px-3 py-1.5 rounded-lg
            bg-gradient-to-r from-primary-200/5 to-primary-200/10
            border border-primary-200/20 text-primary-200/90
            text-xs font-medium hover:border-primary-200/40 hover:shadow-sm
            transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseCard;
