import React, { useEffect, useState } from "react";
import { convertToPersianDigits } from "../tools/common";

export default function Aliam_TP_Gusture_Year_Fix({ sety, y }) {
  const options = Array.from({ length: 300 }, (_, i) => 1300 + i);
  const thisYear = new Date();
  console.log();

  const [selectedIndex, setSelectedIndex] = useState(y - 1300);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(80);

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches ? e.touches[0].clientX + 80 : e.clientX + 80;
    const diff = x - startX;
    setCurrentTranslate(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Snap to nearest item
    const itemWidth = 80; // Should match your CSS
    const snapIndex = Math.round((-currentTranslate + 80) / itemWidth);
    const newIndex = Math.min(
      Math.max(selectedIndex + snapIndex, 0),
      options.length - 1
    );
    setSelectedIndex(newIndex);
    setCurrentTranslate(80);
  };

  useEffect(() => {
    sety(options[selectedIndex]);
  }, [selectedIndex]);

  return (
    <div className="Aliam_TP_GYF_horizontal_picker_container">
      <div
        className="Aliam_TP_picker_wheel"
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="Aliam_TP_picker_items"
          style={{
            transform: `translateX(${
              -selectedIndex * 80 + currentTranslate
            }px)`,
          }}
        >
          {options.map((option, index) => {
            return (
              <div
                className={`Aliam_TP_picker_item ${
                  index === selectedIndex ? "selected" : ""
                } `}
                onClick={() => handleItemClick(index)}
                key={index}
              >
                {convertToPersianDigits(option)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
