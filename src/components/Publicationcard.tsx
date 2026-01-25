import { Publication } from "@/Data/data";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

const PublicationCard: React.FunctionComponent<
  Publication & { index: number }
> = ({
  title,
  authors,
  venue,
  year,
  link,
  type,
  status,
  citations,
  abstract,
}) => {
  return (
    <motion.div
      className="border border-border-100 bg-white/70 backdrop-blur rounded-2xl p-6 
        shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary-200/30 
        flex flex-col h-full"
      variants={itemVariants}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-100/10 text-primary-100 rounded-full text-xs font-medium border border-primary-100/30">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          {type || "Conference Paper"}
        </span>
        {status && (
          <span className="inline-flex items-center px-2.5 py-1 bg-green-100 text-green-700 rounded-md text-xs font-semibold">
            {status}
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-primary-200 mb-3 leading-tight">
        "{title}"
      </h3>

      {authors && (
        <p className="text-sm text-primary-200/70 mb-3 italic">{authors}</p>
      )}

      <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
        <span className="font-semibold text-primary-200">{venue}</span>
        <span className="text-primary-200/40">•</span>
        <span className="text-primary-200/80">{year}</span>
        {citations !== undefined && (
          <>
            <span className="text-primary-200/40">•</span>
            <span className="text-primary-200/80">{citations} citations</span>
          </>
        )}
      </div>

      {abstract && (
        <p className="text-sm text-primary-200/80 leading-relaxed mb-4 flex-grow">
          {abstract}
        </p>
      )}

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-200 
            hover:text-primary-100 transition-colors group mt-auto"
        >
          <svg
            className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          View Publication
        </a>
      )}
    </motion.div>
  );
};

export default PublicationCard;
