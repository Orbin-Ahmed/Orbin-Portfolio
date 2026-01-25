import { Experience } from "@/Data/data";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.4 } },
};

const ExperienceCard: React.FunctionComponent<
  Experience & { index: number }
> = ({ role, company, location, period, type, highlights, technologies }) => {
  return (
    <motion.div className="relative md:pl-12" variants={itemVariants}>
      <div className="hidden md:block absolute left-0 top-2 w-3 h-3 rounded-full bg-primary-200 ring-4 ring-primary-200/20 -translate-x-[5px]" />

      <div className="border border-border-100 bg-white/70 backdrop-blur rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary-200/30">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary-200 mb-1">{role}</h3>
            <div className="flex flex-wrap items-center gap-2 text-primary-200/80">
              <span className="font-semibold">{company}</span>
              <span className="text-primary-200/40">•</span>
              <span className="text-sm">{location}</span>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-200/10 text-primary-200 rounded-full text-sm font-medium">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {period}
            </span>
            {type && (
              <span className="text-xs px-2.5 py-1 bg-primary-100/10 text-primary-100 rounded-md border border-primary-100/20 font-medium">
                {type}
              </span>
            )}
          </div>
        </div>

        {highlights && highlights.length > 0 && (
          <div className="space-y-2.5 mb-4">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex gap-3 text-sm text-primary-200/90">
                <span className="text-primary-200 mt-1.5 flex-shrink-0">▸</span>
                <p className="leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        )}

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border-100">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 bg-primary-200/5 text-primary-200/80 border border-primary-200/20 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
