import React from "react";
import { motion } from "framer-motion";

type TileProps = {
  number: number;
  position: number;
  onClick: () => void;
};

const Tile: React.FC<TileProps> = ({ number, position, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="tile"
      // whileHover={{ scale: 1.1 }} // Hiệu ứng khi hover
      whileTap={{ scale: 0.9 }} // Hiệu ứng khi nhấn vào
      style={{
        width: "100px",
        height: "100px",
        border: "2px solid black",
        // backgroundColor: "lightcoral",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        fontWeight: "bold",
        background: number - 1 === position ? "green" : "lightcoral",
        color: "white",
      }}
    >
      {number}
    </motion.div>
  );
};

export default Tile;
