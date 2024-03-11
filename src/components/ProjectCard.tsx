import code from "@/assets/code.png";
import live from "@/assets/pc.png";
import { Project } from "@/Data/data";
import { Link } from "react-router-dom";

const ProjectCard: React.FunctionComponent<Project> = ({
  title,
  projectImg,
  demoLink,
  codeLink,
  details,
}) => {
  return (
    <div className="border border-border-100 bg-white rounded-xl text-center">
      <img src={projectImg} alt="img" className="w-full h-36 rounded-t-xl" />
      {/* card details area */}
      <div className="mt-4 md:p-4 p-2 text-justify">
        <p className="font-medium xs:text-base text-sm text-nowrap">{title}</p>
        <div className="xs:text-sm text-xs text-primary-200">{details}</div>
        <div className="flex justify-between mt-2">
          {demoLink ? (
            <p className="flex items-center">
              <img src={live} alt="Live" className="w-6 h-auto mr-1" />
              <Link to={demoLink} target="_blank">
                <span className="text-sm">Live</span>
              </Link>
            </p>
          ) : undefined}
          <p className="flex items-center">
            <img src={code} alt="Code" className="w-6 h-auto mr-1" />
            <Link to={codeLink} target="_blank">
              <span className="text-sm">Code</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
