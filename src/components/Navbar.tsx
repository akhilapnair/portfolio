import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { cn } from "../lib/utils";
import APIcon from "./APIcon";

const menuVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};
 const scrollToSection = (section:any) => {
  console.log("Scrolling to section:", section);
    section[section].current.scrollIntoView({ behavior: "smooth" });
  };

const Menu = ({ close }) => (
  <motion.div
    className="menu bg-neutral-800"
    variants={menuVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    transition={{ duration: 0.3 }}
    style={{
      position: "fixed",
      top: 0,
      right: 0,
      width: "250px",
      height: "100vh",
      color: "#fff",
      padding: "2rem",
      zIndex: 1000,
    }}
  >
    <motion.ul
      style={{ listStyle: "none", padding: 0 }}
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      {["Home", "About", "Experience","Skills","Contact"].map((item) => (
        <motion.li
          key={item}
          style={{ padding: "1rem 0", cursor: "pointer" }}
          variants={itemVariants}
          onClick={() => scrollToSection(item)}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);


  return (
    <nav
      className=" fixed top-0 left-0 w-full flex items-center justify-between px-14 py-10 text-white z-[9999] "
      style={{ isolation: "isolate" }}
    >
      <div className="flex items-center gap-2">
        <div className="mb-8 transition duration-300 text-white hover:text-oceanSky">
          <APIcon size={60} color="#ffffff" />
        </div>
      </div>

      <button
        className={cn(
          "group size-12 absolute top-8 right-6 md:right-10  z-[1100]"
        )}
        onClick={() => {
          console.log("Button clicked, current open:", open);
          setOpen(!open);
        }}
      >
        <span
          className={cn(
            "inline-block w-3/5 h-0.5 bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px] ",
            {
              "rotate-45 -translate-y-1/2": open,
              "md:group-hover:rotate-12": !open,
            }
          )}
        ></span>
        <span
          className={cn(
            "inline-block w-3/5 h-0.5 bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px] ",
            {
              "-rotate-45 -translate-y-1/2": open,
              "md:group-hover:-rotate-12": !open,
            }
          )}
        ></span>
      </button>
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[900]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />

            {/* Menu */}
            <Menu close={closeMenu} />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
