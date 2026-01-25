import HText from "@/components/HText";
import PublicationCard from "@/components/Publicationcard";
import { publicationsData } from "@/Data/data";
import { motion } from "framer-motion";

type PublicationsProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

function Publications({ setSelectedPage }: PublicationsProps) {
  return (
    <section id="Publications" className="bg-gray-50">
      <motion.div
        className="py-12 w-4/5 mx-auto"
        onViewportEnter={() => setSelectedPage("publications")}
      >
        <HText header="Publications" subHeader="Research Contributions" />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {publicationsData.map((pub, index) => (
            <PublicationCard key={pub.id} {...pub} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Publications;
