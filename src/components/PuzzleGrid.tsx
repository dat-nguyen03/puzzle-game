import React, { useState } from "react";
import { motion } from "framer-motion";
import Tile from "./Tile";

const PuzzleGrid: React.FC = () => {
  const shuffleArray = (array: number[]): number[] => {
    return array.sort(() => Math.random() - 0.5);
  };
  const [tiles, setTiles] = useState<number[]>(() => {
    let numbers = Array.from({ length: 9 }, (_, i) => i);
    return shuffleArray(numbers);
  });

  const handleTileClick = (index: number) => {
    const emptyIndex = tiles.indexOf(0);
    const isValidMove = [1, -1, 3, -3].includes(index - emptyIndex);

    if (isValidMove) {
      const newTiles = [...tiles];
      [newTiles[emptyIndex], newTiles[index]] = [
        newTiles[index],
        newTiles[emptyIndex],
      ];
      setTiles(newTiles);
    }
  };

  const getGridPosition = (index: number) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    return { top: row * 110, left: col * 110 };
  };

  const isWin = tiles.every((tile, index) => {
    console.log(index + 1, "index", tile, "tile");
    if (tile === 0) {
      return true;
    }
    return tile - 1 === index;
  });
  // console.log(tiles, isWin);

  return (
    <>
      <div style={{ position: "relative", width: "330px", height: "330px" }}>
        {tiles.map((tile, index) => {
          const position = getGridPosition(index);
          return (
            <motion.div
              key={index}
              className="tile-container"
              initial={false} // Chúng ta không cần hoạt ảnh khi bắt đầu
              animate={{
                x: position.left,
                y: position.top,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
              }}
              style={{
                position: "absolute",
                width: "100px",
                height: "100px",
              }}
            >
              {tile !== 0 && (
                <Tile
                  number={tile}
                  position={index}
                  onClick={() => handleTileClick(index)}
                />
              )}
            </motion.div>
          );
        })}
      </div>
      {isWin && <h2>Bạn đã chiến thắng!</h2>}
    </>
  );
};

export default PuzzleGrid;
