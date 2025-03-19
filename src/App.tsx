import React from "react";
import QueueDisplay from "./components/QueueDisplay";
import QueueDisplay2 from "./components/QueueDisplay2";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6 gap-6">
      {/* 🔹 แถวหลัก: ซ้าย (col-2) - กลาง (col-8) - ขวา (col-2) */}
      <div className="grid grid-cols-12 gap-4 w-full w-[97%] mx-auto">
        {/* 🔹 คอลัมน์ซ้าย (ห้องที่กำลังใช้งาน) */}
        <div className="col-span-4 flex flex-col w-full gap-3 min-w-[120px]">
          <QueueDisplay category="left" />
        </div>

        {/* 🔹 (แผนที่) */}
        <div className="col-span-5 flex items-center justify-center max-w-full">
          <QueueDisplay2 />
        </div>

        {/* 🔹 คอลัมน์ขวา (ห้องที่ว่าง) */}
        <div className="col-span-3 flex flex-col w-full gap-3 min-w-[120px]">
          <QueueDisplay category="right" />
        </div>
      </div>

  
    </div>
  );
}

export default App;
