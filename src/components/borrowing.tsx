import React from "react";
import { Button } from "@/components/ui/button";
import { FaClipboardList, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const EduRules = () => {
  return (
    <div className="max-w-5xl mx-auto my-10 p-8 bg-gradient-to-br from-blue-100 to-blue-50 shadow-lg rounded-lg">
      {/* Header Section */}
      <h1 className="text-4xl font-extrabold text-red-600 text-center drop-shadow-lg">
        📌 ระเบียบการยืมหุ่น/อุปกรณ์ออกนอกศูนย์ฝึกทักษะการแพทย์เสมือนจริง
      </h1>
      <p className="text-lg text-gray-700 text-center mt-2 italic">
        ณ ศูนย์ฝึกทักษะการแพทย์เสมือนจริง
        <br />
        ฝ่ายนวัตกรรมแนวบูรณาการและเทคโนโลยีดิจิทัล คณะแพทยศาสตร์ จุฬาฯ <br />
        อาคารภูมิสิริมังคลานุสรณ์ ชั้น 11 โซน C
      </p>

      {/* Main Content */}
      <div className="mt-8 space-y-8">
        {/* Section: ระเบียบการขอดูงาน */}
        <section className="p-6 bg-white rounded-lg shadow-md border-l-8 border-blue-500">
          <h2 className="text-2xl font-bold text-blue-700 flex items-center">
            <FaClipboardList className="mr-2" /> ระเบียบการยืม
          </h2>
          <ul className="mt-3 space-y-4 text-gray-700">
            <li className="text-lg font-semibold">1. การขออนุญาตยืม:</li>
            <ul className="ml-10 list-disc space-y-2 text-gray-700">
              <li className="text-md">
                ผู้ขอยืมสามารถ check
                รายการหุ่น/อุปกรณ์ที่ทางศูนย์ฯสามารถให้ยืมได้ ผ่านระบบ Smart Sim
                หากเป็นหุ่นที่นอกเหนือจากรายการและมีมูลค่าสูงต้องผ่านการพิจารณาโดยประธานคณะกรรมการ
                CHAMPS หรือผู้ช่วยคณบดีฝ่ายนวัตกรรมแนวบูรณาการฯ
              </li>
              <li className="text-md">
                ผู้ขอยืมต้องกรอกรายละเอียดผ่านระบบ Smart Sim
                โดยต้องยื่นคำขอล่วงหน้าอย่างน้อย 7 วัน ก่อนวันยืม
              </li>
            </ul>

            <li className="text-lg font-semibold">2. การพิจารณาคำขอ</li>
            <ul className="ml-10 list-disc space-y-2 text-gray-700">
              <li className="text-md">
                ศูนย์ฯจะตรวจสอบว่าหุ่น/อุปกรณ์พร้อมให้ยืมได้หรือไม่
              </li>
              <li className="text-md">
                ศูนย์ฯจะพิจารณาให้ยืมหุ่น/อุปกรณ์เพื่อใช้ในการเรียนการสอนของนิสิตแพทย์
                แพทย์ บุคลากรทางการแพทย์ คณะแพทยศาสตร์ จุฬา
                และโรงพยาบาลจุฬาลงกรณ์..................
                หากไม่ใช่กลุ่มเป้าหมายดังกล่าวข้างต้น
                การยืมหุ่น/อุปกรณ์ต้องมีค่าใช้จ่ายตามที่คณะกรรมการ.CHAMPS.....กำหนด
              </li>
            </ul>

            <li className="text-lg font-semibold">3. การอนุมัติคำขอยืม</li>
            <ul className="ml-10 list-disc space-y-2 text-gray-700">
              <li className="text-md">
                หากคำขอได้รับการอนุมัติ
                จะมีการแจ้งให้ผู้ขอยืมทราบถึงรายละเอียดเกี่ยวกับหุ่น/อุปกรณ์ที่ได้รับอนุญาตให้ยืม
                รวมถึงวันเวลาที่ต้องคืนทางอีเมลที่แจ้งไว้
              </li>
            </ul>

            <li className="text-lg font-semibold">4. การรับทรัพย์สิน</li>
            <ul className="ml-10 list-disc space-y-2 text-gray-700">
              <li className="text-md">
                ผู้ขอยืมจะต้องไปรับหุ่น/อุปกรณ์ในวันเวลาที่กำหนด
                โดยจะต้องลงชื่อในใบขอยืมเพื่อยืนยันว่าได้รับหุ่น/อุปกรณ์แล้ว
                อาจมีการบันทึกสภาพของก่อนที่จะทำการยืม
              </li>
              <li className="text-md">
                หากเป็นหุ่นที่มีมูลค่าสูงหรือสำคัญ
                อาจต้องมีการขอเอกสารที่รับรองจากผู้ขอยืม
              </li>
            </ul>

            <li className="text-lg font-semibold">5.การดูแลทรัพย์สิน</li>
            <ul className="ml-10 list-disc space-y-2 text-gray-700">
              <li className="text-md">
                ผู้ยืมต้องดูแลหุ่น/อุปกรณ์ที่ยืมอย่างระมัดระวัง
                ไม่ให้เสียหายหรือผิดวัตถุประสค์การใช้งาน
              </li>
              <li className="text-md">
                หากหุ่น/อุปกรณ์เกิดการชำรุดหรือสูญหาย
                ผู้ยืมจะต้องแจ้งให้ผู้ดูแลรับทราบทันที
                และอาจต้องรับผิดชอบค่าใช้จ่ายในการซ่อมแซมหรือทดแทน
              </li>
            </ul>

            <li className="text-lg font-semibold">6. การคืนทรัพย์สิน</li>
            <ul className="ml-10 list-disc space-y-2 text-gray-700">
              <li className="text-md">
                ผู้ยืมต้องคืนหุ่น/อุปกรณ์ตามวันและเวลาที่กำหนดในคำขอยืม
              </li>
              <li className="text-md">
                ก่อนการคืน อาจมีการตรวจสอบหุ่น/อุปกรณ์เพื่อตรวจเช็คสภาพ
                ว่ามีความสมบูรณ์หรือมีการชำรุดเสียหายหรือไม่
              </li>
            </ul>

            <li className="text-lg font-semibold">7. การติดตามการคืน</li>
            <ul className="ml-10 list-disc space-y-2 text-gray-700">
              <li className="text-md">
                หากผู้ยืมไม่คืนหุ่น/อุปกรณ์ภายในเวลาที่กำหนด
                อาจมีการติดตามหรือห้ามยืมหุ่น/อุปกรณ์ในอนาคต
              </li>
            </ul>
          </ul>
        </section>

        {/* หมายเหตุ */}
        <div className="p-6 bg-yellow-100 text-yellow-800 rounded-lg text-center shadow-md">
          <strong>📢 หมายเหตุ:</strong> การยืมหุ่น/อุปกรณ์
          ไม่อนุญาตให้ยืมเพื่อใช้ในลักษณะส่วนตัว
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          className="px-6 py-2 text-blue-700 border-blue-500 hover:bg-blue-100 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> กลับไปที่บริการ
        </Button>
        <Button
          variant="outline"
          className="px-6 py-2 text-blue-700 border-blue-500 hover:bg-blue-100 flex items-center"
        >
          ถัดไป <FaArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default EduRules;
