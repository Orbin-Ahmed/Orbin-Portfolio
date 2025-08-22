import ApprovalIcon from "@/assets/approval.png";
import { Skill } from "@/Data/data";

type ExpertiseCardProps = {
  header: string;
  skills: Skill[];
  subHeader?: string;
};

const ExpertiseCard = ({ header, skills, subHeader }: ExpertiseCardProps) => {
  return (
    <div
      className="flex flex-col border border-border-100 bg-white/70 backdrop-blur
      rounded-2xl p-4 text-left w-full shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="mb-4">
        <p className="text-xl font-semibold text-primary-200">{header}</p>
        {subHeader && (
          <p className="text-sm text-primary-200/80 mt-1">{subHeader}</p>
        )}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 gap-2">
        {skills.map((s, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-xl border border-border-100
            bg-white px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <img src={ApprovalIcon} alt="Icon" className="w-5 h-5" />
              <span className="font-medium text-sm md:text-base">{s.name}</span>
            </div>
            <span
              className="text-[10px] md:text-xs text-primary-200 border border-primary-200/30
              rounded-full px-2 py-0.5 uppercase tracking-wide"
            >
              {s.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseCard;
