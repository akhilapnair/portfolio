import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "../lib/utils";
import APIcon from "./APIcon";

const menuVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

const Menu = ({ close: any }) => (
  <motion.div
    className="menu"
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
      background: "#111",
      color: "#fff",
      padding: "2rem",
      zIndex: 1000,
    }}
  >
    <ul style={{ listStyle: "none", padding: 0 }}>
      <li className="flex justify-end">
        <button onClick={close} aria-label="Close menu">
          <X className="w-6 h-6 hover:text-zinc-400" />
        </button>
      </li>
      {["Home", "About", "Services", "Contact"].map((item) => (
        <li key={item} style={{ padding: "1rem 0", cursor: "pointer" }}>
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="flex items-center justify-between px-5 py-4 bg-zinc-950 text-white relative z-10">
      <div className="flex items-center gap-2">
        <div className="mb-8 transition duration-300 text-white hover:text-oceanSky">
          <APIcon size={60} color="#ffffff" />
        </div>
      </div>

      <button
        className={cn("group size-12 absolute top-5 right-5 md:right-10 z-[2]")}
        onClick={() => setOpen(!open)}
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
        {open && <Menu close={closeMenu} />}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
