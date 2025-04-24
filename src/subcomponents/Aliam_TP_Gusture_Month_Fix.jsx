import React, { useEffect, useState } from "react";
import monthName from "../tools/month_name_array.json";
import { convertToPersianDigits } from "../tools/common";

export default function Aliam_TP_Gusture_Month_Fix({ setm, m }) {
  const options = Array.from({ length: 12 }, (_, i) => 0 + i);
  options.reverse();
  const [selectedIndex, setSelectedIndex] = useState(m - 1);
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
    // setm(options[selectedIndex]);
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
                {monthName.array[option]}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
