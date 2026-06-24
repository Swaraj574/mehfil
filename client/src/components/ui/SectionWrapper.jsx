import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

const SectionWrapper = ({ children }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;