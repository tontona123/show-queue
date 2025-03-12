import React from "react";
import mapImage from "./../assets/Map.gif"; 

const rooms = [

// ซ้าย
  { name: "A10", status: "available", top: 0, left: 0, width: 68, height: 60 },
  { name: "AB27", status: "available", top: 178, left: 67, width: 100, height: 61 },
  { name: "AB28", status: "available", top: 240, left: 0, width: 167, height: 62 },
  { name: "AB29", status: "occupied", top: 303, left: 0, width: 167, height: 61 },
  { name: "B30", status: "available", top: 365, left: 0, width: 167, height: 235 },
  
  // กลาง
  // ส่วนแรกของ B03 (ด้านซ้าย)
  { name: "B03-part1", status: "available", top: 0, left: 543, width: 125, height: 135 },
  // ส่วนที่สองของ B03 (ด้านขวา)
  { name: "B03-part2", status: "available", top: 95, left: 455, width: 88, height: 40 },
  
  { name: "B19", status: "available", top: 178, left: 221, width: 90, height: 77 },
  { name: "B18", status: "occupied", top: 178, left: 311, width: 133, height: 77 },
  { name: "B11", status: "available", top: 178, left: 444, width: 74, height: 77 },
  { name: "B10", status: "occupied", top: 178, left: 519, width: 75, height: 77 },
  { name: "B09", status: "available", top: 178, left: 594, width: 73, height: 77 },


 { name: "Sim 5", status: "occupied", top: 287, left: 444, width: 74, height: 77 },
 { name: "Sim 4", status: "available", top: 287, left: 519, width: 74, height: 76 },
 { name: "Sim 3", status: "occupied", top: 287, left: 594, width: 73, height: 77 },
 { name: "Simulation Center", status: "available", top: 364, left: 444, width: 222, height: 51 },
 { name: "Sim 2", status: "occupied", top: 415, left: 444, width: 145, height: 75 },
 { name: "Sim 1", status: "available", top: 415, left: 589, width: 77, height: 75 },
 { name: "B08", status: "available", top: 531, left: 554, width: 113, height: 70 },


 // ขวา
  { name: "B04", status: "available", top: 135, left: 710, width: 89, height: 118 },
  { name: "B05", status: "occupied", top: 254, left: 710, width: 89, height: 117 },
  { name: "B06", status: "available", top: 373, left: 710, width: 89, height: 117 },
  { name: "B07", status: "available", top: 491, left: 710, width: 89, height: 110 },

];

const QueueDisplay = () => {
  return (
    <div className="relative mx-auto overflow-hidden" style={{ width: "800px", height: "600px" }}>
      {/* รูปแผนที่ (ล็อคขนาด) */}
      <div className="relative" style={{ width: "800px", height: "600px", transformOrigin: "top left" }}>
        <img src={mapImage} alt="Map" style={{ width: "800px", height: "600px", position: "absolute", top: 0, left: 0 }} />

        {/* ห้องที่แสดงบนแผนที่ */}
        {rooms.map((room, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              top: `${room.top}px`,
              left: `${room.left}px`,
              width: `${room.width}px`,
              height: `${room.height}px`,
              background: room.status === "available" ? "rgba(0, 255, 0, 0.5)" : "rgba(255, 0, 0, 0.5)",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default QueueDisplay;