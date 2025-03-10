import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
const EduRules = () => {
    //const navigate = useNavigate()
    return (
        <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-red-600 text-center">
                ระเบียบกฎเกณฑ์ในการจองห้อง และหุ่นฝึกหัตถการ
            </h1>
            <p className="text-lg text-gray-600 text-center mt-2">
                ศูนย์ฝึกทักษะการแพทย์เสมือนจริง คณะแพทยศาสตร์ จุฬาฯ ชั้น 11 โซน C
            </p>

            <section className="mt-6">
                <h2 className="text-xl font-semibold text-blue-700 border-b-2 pb-1">
                    1. การจองห้อง และหุ่นฝึกหัตถการ
                </h2>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
                    <li><span className="font-semibold">1.1 กำหนดลำดับความสำคัญ:</span> นิสิตแพทย์มีสิทธิ์จองก่อนบุคคลอื่น</li>
                    <li><span className="font-semibold">1.2 จองล่วงหน้า:</span> ต้องจองอย่างน้อย 7 วันทำการ (ภายในปีการศึกษาปัจจุบันเท่านั้น)</li>
                    <li><span className="font-semibold">1.3 เลือกช่วงเวลา:</span> ควรเลือกเวลาให้เหมาะสมเพื่อไม่กระทบกับตารางอื่น</li>
                    <li><span className="font-semibold">1.4 การยืนยัน:</span> ยืนยันผ่านระบบ Smart Sim และตรวจสอบอีเมลแจ้งเตือน และตรวจสอบสถานะการจองในระบบ (คุณสามารถเพิ่มรายละเอียดได้ล่วงหน้าก่อนวันใช้งาน 3 วัน ในเวลาทำการ แต่ไม่สามารถเแก้ไขรายละเอียดการจองที่ยืนยันแล้ว)</li>
                    <li><span className="font-semibold">1.5 การขออนุเคราะห์:</span> ทำบันทึกถึงรองคณบดีพร้อมใบสรุปการขอใช้บริการ</li>
                    <li><span className="font-semibold">1.6 ยกเลิกการจอง:</span> ต้องยกเลิกผ่านระบบ Smart Sim ไม่น้อยกว่า 7 วัน</li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold text-blue-700 border-b-2 pb-1">
                    2. การใช้งานห้องและหุ่น
                </h2>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
                    <li>ใช้ห้องภายในเวลาที่กำหนด</li>
                    <li>ใช้ตามวัตถุประสงค์ที่ระบุ ห้ามใช้ผิดประเภทที่ไม่ได้รับอนุญาต</li>
                    <li>ตรวจสอบให้ตรงตามต้องการได้ล่วงหน้าเพื่อลดปัญหาความไม่พร้อมในวันใช้บริการ</li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold text-blue-700 border-b-2 pb-1">
                    3. การดูแลรักษาห้องและหุ่น
                </h2>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700">
                    <li>ผู้ใช้ต้องช่วยดูแลให้อยู่ในสภาพดี</li>
                    <li>หากพบความเสียหายต้องแจ้งเจ้าหน้าที่ทันที</li>
                </ul>
            </section>

            <p className="mt-6 bg-yellow-100 text-yellow-800 p-3 rounded-lg text-center">
                <strong>หมายเหตุ:</strong> กรุณาปฏิบัติตามระเบียบเพื่อประโยชน์สูงสุดของทุกฝ่าย
            </p>

                     {/* Navigation Buttons */}
                     <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={()=>{}}>
                    กลับไปที่บริการ
                </Button>
                <Button variant="outline" onClick={()=>{}}>
                    ถัดไป
                </Button>
            </div>

        </div>
    );
};

export default EduRules;
