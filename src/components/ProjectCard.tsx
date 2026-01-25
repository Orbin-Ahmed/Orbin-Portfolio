import code from "@/assets/code.png";
import live from "@/assets/pc.png";
import { Project } from "@/Data/data";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.25 } },
};

const ProjectCard: React.FunctionComponent<
  Project & { featured?: boolean }
> = ({
  title,
  projectImg,
  demoLink,
  codeLink,
  details,
  category,
  stack,
  metrics,
  featured = false,
}) => {
  return (
    <motion.div
      className={`group border border-border-100 bg-white rounded-2xl overflow-hidden 
        shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full
        ${featured ? "hover:border-primary-200/40" : ""}`}
      variants={itemVariants}
      whileHover={{ y: -4 }}
    >
      <div className="relative">
        <img
          src={projectImg}
          alt={`${title} preview`}
          className={`w-full object-cover ${featured ? "h-52" : "h-40"}`}
          loading="lazy"
        />

        <div className="absolute left-2 top-2 flex gap-1 flex-wrap">
          {Array.isArray(category) ? (
            category.map((c, i) => (
              <span
                key={i}
                className="text-[10px] uppercase bg-black/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full font-medium"
              >
                {c}
              </span>
            ))
          ) : (
            <span className="text-[10px] uppercase bg-black/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full font-medium">
              {category}
            </span>
          )}
        </div>

        {featured && (
          <div className="absolute right-2 top-2">
            <span className="text-lg">⭐</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3
          className={`font-semibold text-primary-200 mb-2 ${featured ? "text-lg" : "text-base"} line-clamp-2`}
        >
          {title}
        </h3>

        <p className="text-primary-200/80 text-sm mb-3 line-clamp-2 flex-grow">
          {details}
        </p>

        {featured && metrics && (
          <div className="grid grid-cols-2 gap-2 mb-3">
            {Object.entries(metrics).map(([key, value]) => (
              <div
                key={key}
                className="bg-primary-200/5 rounded-lg px-2 py-1.5 text-center"
              >
                <p className="text-xs text-primary-200/60 capitalize">{key}</p>
                <p className="text-sm font-semibold text-primary-200">
                  {value}
                </p>
              </div>
            ))}
          </div>
        )}

        {stack && stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {stack.slice(0, featured ? 6 : 5).map((tech, i) => (
              <span
                key={i}
                className="text-[10px] bg-primary-200/10 text-primary-200/90 border border-primary-200/20 rounded-md px-2 py-0.5"
              >
                {tech}
              </span>
            ))}
            {stack.length > (featured ? 6 : 5) && (
              <span className="text-[10px] text-primary-200/60 px-2 py-0.5">
                +{stack.length - (featured ? 6 : 5)}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center gap-2 mt-auto">
          <a
            href={codeLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium 
              border border-border-100 rounded-xl px-3 py-2 hover:bg-gray-50 hover:border-primary-200/30
              transition-all duration-200"
            aria-label={`${title} source code`}
          >
            <img src={code} alt="" className="w-4 h-4" />
            Code
          </a>

          {demoLink ? (
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium 
                rounded-xl px-3 py-2 bg-gradient-to-r from-primary-200 to-primary-100 text-white 
                hover:shadow-lg transition-all duration-200"
              aria-label={`${title} live demo`}
            >
              <img src={live} alt="" className="w-4 h-4" />
              Demo
            </a>
          ) : (
            <div className="flex-1 text-center">
              <span className="text-xs text-primary-200/50 italic">
                No demo
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
