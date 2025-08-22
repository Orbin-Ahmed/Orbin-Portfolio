import code from "@/assets/code.png";
import live from "@/assets/pc.png";
import { Project } from "@/Data/data";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.25 } },
};

const ProjectCard: React.FunctionComponent<Project> = ({
  title,
  projectImg,
  demoLink,
  codeLink,
  details,
  category,
  stack,
}) => {
  return (
    <motion.div
      className="group border border-border-100 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      variants={itemVariants}
      whileHover={{ y: -4 }}
    >
      <div className="relative">
        <img
          src={projectImg}
          alt={`${title} preview`}
          className="w-full h-44 object-cover"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 flex gap-1 flex-wrap">
          {Array.isArray(category) ? (
            category.map((c, i) => (
              <span
                key={i}
                className="text-[10px] uppercase bg-black/70 text-white px-2 py-0.5 rounded-full"
              >
                {c}
              </span>
            ))
          ) : (
            <span className="text-[10px] uppercase bg-black/70 text-white px-2 py-0.5 rounded-full">
              {category}
            </span>
          )}
        </div>
      </div>

      {/* card details area */}
      <div className="p-4">
        <p className="font-semibold text-base mb-1 line-clamp-1">{title}</p>
        <p className="text-primary-200 text-sm mb-3 line-clamp-3">{details}</p>

        {stack && stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {stack.map((t: any, i: any) => (
              <span
                key={i}
                className="text-[10px] md:text-[11px] bg-primary-200/10 text-primary-100 border border-border-100 rounded-full px-2 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between gap-2">
          <a
            href={codeLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium border border-border-100 rounded-xl px-3 py-1.5 hover:bg-gray-50"
            aria-label={`${title} source code`}
          >
            <img src={code} alt="" className="w-5 h-5" />
            Code
          </a>

          {demoLink ? (
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium rounded-xl px-3 py-1.5 bg-button-primary text-white hover:opacity-95"
              aria-label={`${title} live demo`}
            >
              <img src={live} alt="" className="w-5 h-5" />
              Live
            </a>
          ) : (
            <span className="text-xs text-primary-200 italic">
              Demo coming soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
