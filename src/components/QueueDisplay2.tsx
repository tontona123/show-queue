import React from "react";
import mapImage from "./../assets/Map.gif"; // เปลี่ยนเป็น path รูปจริง

// กำหนดสถานะห้อง
const rooms = [
  { name: "A10", status: "available", top: 0, left: 0, width: 69, height: 60 },
  { name: "B03", status: "available", top: 0, left: 545, width: 120, height: 100 },
  { name: "B04", status: "available", top: 100, left: 700, width: 100, height: 80 },
  { name: "B05", status: "available", top: 180, left: 700, width: 100, height: 80 },
  { name: "B06", status: "available", top: 260, left: 700, width: 100, height: 80 },
  { name: "B07", status: "available", top: 340, left: 700, width: 100, height: 80 },
  { name: "B08", status: "available", top: 420, left: 500, width: 100, height: 80 },
  { name: "B30", status: "available", top: 420, left: 100, width: 100, height: 80 },
  { name: "Sim 5", status: "occupied", top: 300, left: 300, width: 80, height: 60 },
  { name: "Sim 4", status: "occupied", top: 300, left: 380, width: 80, height: 60 },
  { name: "Sim 3", status: "occupied", top: 300, left: 460, width: 80, height: 60 },
  { name: "Simulation Center", status: "occupied", top: 360, left: 300, width: 240, height: 60 },
  { name: "Sim 2", status: "occupied", top: 420, left: 300, width: 120, height: 80 },
  { name: "Sim 1", status: "occupied", top: 420, left: 420, width: 120, height: 80 }
];

const QueueDisplay = () => {
  return (
    <div className="relative w-[800px] h-[600px] mx-auto">
      {/* รูปแผนที่ */}
      <img src={mapImage} alt="Map" className="w-full h-full" />

      {/* สถานะห้อง */}
      {rooms.map((room, index) => (
        <div
          key={index}
          className={`absolute ${
            room.status === "available" ? "bg-green-500" : "bg-red-500"
          } opacity-50 rounded-md`}
          style={{
            top: `${room.top}px`,
            left: `${room.left}px`,
            width: `${room.width}px`,
            height: `${room.height}px`
          }}
        ></div>
      ))}
    </div>
  );
};

export default QueueDisplay;
