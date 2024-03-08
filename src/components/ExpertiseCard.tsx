import ApprovalIcon from "@/assets/approval.png";
import { Skill } from "@/Data/data";

type ExpertiseCardProps = {
  header: string;
  skills: Skill[];
};

const ExpertiseCard = ({ header, skills }: ExpertiseCardProps) => {
  return (
    <div
      className="flex flex-col border border-border-100 bg-white rounded-2xl md:p-4
     p-2 text-center w-full"
    >
      <p className="text-2xl font-semibold text-primary-200 mb-4">{header}</p>
      <div className="flex justify-center items-center">
        {/* Skill Row */}
        <div className="flex flex-wrap gap-4 justify-between">
          {/* Skill Column 1 */}
          <div className="flex-1">
            {/* Skill */}
            {skills.map((value, index) =>
              index % 2 === 0 ? (
                <div className="flex items-center gap-2 pb-2" key={index}>
                  <div>
                    <img
                      src={ApprovalIcon}
                      alt="Icon"
                      className="w-10 h-auto"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-nowrap">{value.name}</p>
                    <p className="text-sm text-primary-200">{value.level}</p>
                  </div>
                </div>
              ) : undefined
            )}
            {/* Skill End */}
          </div>
          {/* Skill Column 2 */}
          <div className="flex-1">
            {/* Skill */}
            {skills.map((value, index) =>
              (index + 1) % 2 === 0 ? (
                <div className="flex items-center gap-2 pb-2" key={index}>
                  <div>
                    <img
                      src={ApprovalIcon}
                      alt="Icon"
                      className="w-10 h-auto"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-nowrap">{value.name}</p>
                    <p className="text-sm text-primary-200">{value.level}</p>
                  </div>
                </div>
              ) : undefined
            )}
            {/* Skill End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCard;
