import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5174/API/today.json"; // เปลี่ยนเป็น URL จริง

function formatThaiTime(dateString) {
  if (!dateString) return "--:--";
  const dateObj = new Date(dateString);
  return dateObj.toLocaleTimeString("en-GB", {
    timeZone: "Asia/Bangkok",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const QueueDisplay = ({ category }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        const reservations = response.data;

        // เวลา "ตอนนี้" ตามโซนเวลาไทย
        const now = new Date(
          new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" })
        );

        // 1) สร้าง "occupiedMap" เก็บ booking ที่ยัง active "ตอนนี้"
        // Key: ชุดข้อมูล (booking_name + start_time + end_time)
        // Value: { bookingName, departmentId, studentYear, startTime, endTime, roomNames[] }
        let occupiedMap = {};

        reservations.forEach((res) => {
          const det = res.reservation_detail;
          const bookingName = det.booking_name;
          const departmentId = det.booking_participant.department_id;
          const studentYear = det.booking_participant.student_year;

          const startTime = new Date(det.start_time);
          const endTime = new Date(det.end_time);

          // ถ้าเวลาปัจจุบันอยู่ในช่วง => ถือว่า booking นี้ active
          if (now >= startTime && now < endTime) {
            // สร้าง key (รวม bookingName + start_time + end_time)
            const key = `${bookingName}-${det.start_time}-${det.end_time}`;

            // ถ้ายังไม่มีใน occupiedMap => สร้าง object ใหม่
            if (!occupiedMap[key]) {
              occupiedMap[key] = {
                bookingName,
                departmentId: departmentId, 
                // ถ้า studentYear มีค่า => "Year X" ถ้าไม่มี => "N/A"
                studentYear: studentYear ? studentYear : "N/A",
                startTime: det.start_time,
                endTime: det.end_time,
                roomNames: [],
              };
            }

            // เพิ่มชื่อห้อง (ยกเว้น "SIM0" ถ้าไม่ต้องการ)
            res.reservation_room.forEach((r) => {
              if (r.room_id !== "SIM0") {
                if (!occupiedMap[key].roomNames.includes(r.room_id)) {
                  occupiedMap[key].roomNames.push(r.room_id);
                }
              }
            });
          }
        });

        // 2) แปลง occupiedMap => Array (occupiedList)
        let occupiedList = Object.values(occupiedMap).map((item) => {
          return {
            status: "occupied",
            bookingName: item.bookingName,
            departmentId: item.departmentId,
            studentYear: item.studentYear,
            startTime: item.startTime,
            endTime: item.endTime,
            roomNames: item.roomNames,
          };
        });

        // 3) ห้องทั้งหมดในระบบ (21 ห้อง)
        const allRooms = [
          { name: "A10" },
          { name: "B27" },
          { name: "B28" },
          { name: "B29" },
          { name: "B30" },
          { name: "B03" },
          { name: "B19" },
          { name: "B18" },
          { name: "B11" },
          { name: "B10" },
          { name: "B09" },
          { name: "SIM5" },
          { name: "SIM4" },
          { name: "SIM3" },
          { name: "SIM2" },
          { name: "SIM1" },
          { name: "B08" },
          { name: "B04" },
          { name: "B05" },
          { name: "B06" },
          { name: "B07" },
        ];

        // รวมชื่อห้องที่อยู่ใน occupiedList => allOccupiedRooms
        let allOccupiedRooms = [];
        occupiedList.forEach((occ) => {
          allOccupiedRooms.push(...occ.roomNames);
        });
        // ลบซ้ำ
        allOccupiedRooms = [...new Set(allOccupiedRooms)];

        // 4) สร้างรายการ availableList สำหรับห้องที่ไม่อยู่ใน allOccupiedRooms
        let availableList = [];
        allRooms.forEach((r) => {
          if (!allOccupiedRooms.includes(r.name)) {
            availableList.push({
              status: "available",
              bookingName: "Available",
              departmentId: "-",
              studentYear: "-",
              startTime: null,
              endTime: null,
              roomNames: [r.name],
            });
          }
        });

        // 5) รวม occupiedList + availableList => finalRooms
        let finalRooms = [...occupiedList, ...availableList];

        setRooms(finalRooms);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();

    // รีเฟรชทุก 4 ชม.
    const intervalId = setInterval(() => {
      fetchData();
    }, 4 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  // แยกตาม category
  const occupiedRooms = rooms.filter((r) => r.status === "occupied");
  const availableRooms = rooms.filter((r) => r.status === "available");

  let filteredRooms = [];
  if (category === "left") {
    filteredRooms = occupiedRooms;
  } else if (category === "right") {
    filteredRooms = availableRooms;
  } else {
    filteredRooms = rooms;
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {filteredRooms.map((item, idx) => {
        const showTime =
          item.status === "occupied"
            ? `${formatThaiTime(item.startTime)} - ${formatThaiTime(item.endTime)}`
            : "--:-- - --:--";

        return (
          <div
            key={idx}
            className={
              "p-3 flex flex-col items-center text-white font-bold rounded-lg shadow-2xl border-4 border-white " +
              (item.status === "occupied" ? "bg-red-500" : "bg-green-500")
            }
          >
            {item.status === "occupied" && (
              <div className="text-center mb-2">
                <div className="text-lg font-bold">📍: {item.bookingName}</div>
                <div className="text-md">🏫 Dept: {item.departmentId}</div>
                <div className="text-md">
                  🎓 Year:{" "}
                  {item.studentYear !== "N/A" ? `Year ${item.studentYear}` : "N/A"}
                </div>
                <div className="text-md">🕒 : {showTime}</div>
                <hr className="border-dashed border-2 my-2" />
              </div>
            )}
            <div className="text-xl text-center">
              {item.status === "available" && "✅ "}
              {item.roomNames.join(", ")}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QueueDisplay;
