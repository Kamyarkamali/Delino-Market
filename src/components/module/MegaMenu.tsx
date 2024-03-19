import { FC } from "react";
import { ImegaMenu } from "../../types/type";
import { motion } from "framer-motion";

const MegaMenu: FC<ImegaMenu> = ({ megaMenu }) => {
  const menuVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      y: "100%",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={megaMenu ? "open" : "closed"}
      className="max-w-[1500px] bg-slate-50 h-[300px]"
    >
      MegaMenu
    </motion.div>
  );
};

export default MegaMenu;
