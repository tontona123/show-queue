import React from "react";

const rooms = [
  { id: 1, name: "A10", status: "occupied", extraInfo: "CU-MEDi" },
  { id: 2, name: "B03", status: "occupied", extraInfo: "Pediatrics" },
  { id: 3, name: "B04", status: "occupied", extraInfo: "Surgery" },
  { id: 4, name: "B05", status: "available", extraInfo: "DDD" },
  { id: 5, name: "B06", status: "available", extraInfo: "EEE" },
  { id: 6, name: "B07", status: "available", extraInfo: "FFF" },
  { id: 7, name: "B08", status: "available", extraInfo: "GGG" },
  { id: 8, name: "B09", status: "available", extraInfo: "HHH" },
  { id: 9, name: "B10", status: "available", extraInfo: "III" },
  { id: 10, name: "B11", status: "available", extraInfo: "JJJ" },
  { id: 11, name: "B11", status: "available", extraInfo: "KKK" },
];

const QueueDisplay = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 p-6">
      {rooms.map((room) => (
        <div
          key={room.id}
          className={`p-5 text-center text-white font-bold text-xl rounded-lg shadow-lg ${
            room.status === "available" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {room.name} <br /> {room.extraInfo}
        </div>
      ))}
    </div>
  );
};

export default QueueDisplay;
