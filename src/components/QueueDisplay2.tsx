import React, { useEffect, useState } from "react";
import axios from "axios";
import mapImage from "./../assets/map.jpg";

const API_URL = "http://localhost:5174/API/today.json";

const QueueDisplay2 = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(API_URL)
        .then((response) => {
          const reservations = response.data;
          const now = new Date(
            new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" })
          );

          // set สำหรับห้องที่ occupied
          let occupiedSet = new Set();

          reservations.forEach((res) => {
            const { start_time, end_time } = res.reservation_detail;
            const st = new Date(start_time);
            const et = new Date(end_time);

            if (now >= st && now < et) {
              res.reservation_room.forEach((r) => {
                // ถ้าไม่เอา SIM0 ก็ตัด
                if (r.room_id !== "SIM0") {
                  occupiedSet.add(r.room_id);
                }
              });
            }
          });

          // รายชื่อห้องในแผนที่
          const allRooms = [
            { name: "A10", top: 0, left: 0, width: 60, height: 70 },
            { name: "B27", top: 203, left: 57, width: 91, height: 72 },
            { name: "B28", top: 275, left: 0, width: 148, height: 72 },
            { name: "B29", top: 347, left: 0, width: 148, height: 72 },
            { name: "B30", top: 419, left: 0, width: 147, height: 270 },
            { name: "B03-part1", top: 0, left: 475, width: 109, height: 156 },
            { name: "B03-part2", top: 110, left: 397, width: 79, height: 46 },
            { name: "B19", top: 203, left: 193, width: 81, height: 90 },
            { name: "B18", top: 203, left: 273, width: 116, height: 90 },
            { name: "B11", top: 203, left: 388, width: 66, height: 90 },
            { name: "B10", top: 203, left: 453, width: 66, height: 90 },
            { name: "B09", top: 203, left: 518, width: 66, height: 90 },
            { name: "SIM5", top: 330, left: 388, width: 66, height: 88 },
            { name: "SIM4", top: 330, left: 453, width: 66, height: 88 },
            { name: "SIM3", top: 330, left: 518, width: 66, height: 88 },
            { name: "SIM2", top: 477, left: 388, width: 128, height: 89 },
            { name: "SIM1", top: 477, left: 515, width: 69, height: 88 },
            { name: "B08", top: 611, left: 485, width: 99, height: 78 },
            { name: "B04", top: 155, left: 621, width: 78, height: 137 },
            { name: "B05", top: 292, left: 621, width: 78, height: 135 },
            { name: "B06", top: 427, left: 621, width: 78, height: 136 },
            { name: "B07", top: 563, left: 621, width: 78, height: 126 },
          ];

          const updatedRooms = allRooms.map((room) => {
            const status = occupiedSet.has(room.name)
              ? "occupied"
              : "available";
            return { ...room, status };
          });

          setRooms(updatedRooms);
        })
        .catch((err) => console.error(err));
    };

    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 4 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative max-w-[850px] mx-auto">
      <div className="relative" style={{ width: "700px", height: "650px" }}>
        <img
          src={mapImage}
          alt="Map"
          className="absolute top-0 left-0 object-cover rounded-lg shadow-lg"
        />
        {rooms.map((room, i) => {
          const style = {
            top: `${room.top}px`,
            left: `${room.left}px`,
            width: `${room.width}px`,
            height: `${room.height}px`,
            background: room.status === "occupied" ? "#ef4444" : "#22c55e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            border: "2px solid white",
          };
          if (room.name === "B03-part1") {
            return (
              <div key={i} style={{ ...style, borderLeft: "0px" }}>
                <span>B03</span>
              </div>
            );
          }
          if (room.name === "B03-part2") {
            return (
              <div key={i} style={{ ...style, borderRight: "0px" }} />
            );
          }
          return (
            <div key={i} style={style}>
              {room.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QueueDisplay2;
