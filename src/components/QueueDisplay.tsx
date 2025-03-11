import React from "react";

const rooms = [
  { id: 1, name: "Room A", status: "available" },
  { id: 2, name: "Room B", status: "occupied" },
  { id: 3, name: "Room C", status: "available" },
  { id: 4, name: "Room D", status: "occupied" },
  { id: 5, name: "Room E", status: "occupied" },
  { id: 6, name: "Room F", status: "occupied" },
  { id: 7, name: "Room I", status: "available" },
  { id: 8, name: "Room J", status: "occupied" },
  { id: 9, name: "Room K", status: "available" },
  { id: 10, name: "Room L", status: "occupied" },
  { id: 11, name: "Room M", status: "occupied" },
];

const QueueDisplay = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {rooms.map((room) => (
        <div
          key={room.id}
          className={`p-6 text-center text-white font-bold text-xl rounded-lg shadow-lg ${
            room.status === "available" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {room.name}
        </div>
      ))}
    </div>
  );
};

export default QueueDisplay;
