import React from "react";
import { Button } from "@/components/ui/button";
import { FaClipboardList, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const EduRules = () => {
    return (
        <div className="max-w-5xl mx-auto my-10 p-8 bg-gradient-to-br from-blue-100 to-blue-50 shadow-lg rounded-lg">
            {/* Header Section */}
            <h1 className="text-4xl font-extrabold text-red-600 text-center drop-shadow-lg">
                📌 ระเบียบการขอดูงาน
            </h1>
            <p className="text-lg text-gray-700 text-center mt-2 italic">
                ณ ศูนย์ฝึกทักษะการแพทย์เสมือนจริง<br />
                ฝ่ายนวัตกรรมแนวบูรณาการและเทคโนโลยีดิจิทัล คณะแพทยศาสตร์ จุฬาฯ <br />
                อาคารภูมิสิริมังคลานุสรณ์ ชั้น 11 โซน C
            </p>

            {/* Main Content */}
            <div className="mt-8 space-y-8">
                
                {/* Section: ระเบียบการขอดูงาน */}
                <section className="p-6 bg-white rounded-lg shadow-md border-l-8 border-blue-500">
                    <h2 className="text-2xl font-bold text-blue-700 flex items-center">
                        <FaClipboardList className="mr-2" /> ข้อกำหนดการขอดูงาน
                    </h2>
                    <ul className="mt-3 space-y-4 text-gray-700">
                        <li className="text-lg font-semibold">1. การยื่นคำขอ</li>
                        <p className="ml-6">ขอความกรุณาผู้ที่ต้องการขอดูงานต้องยื่นคำขอผ่านทางระบบ <strong>Smart Sim</strong> ล่วงหน้า <strong>7 วัน</strong></p>

                        <li className="text-lg font-semibold">2. ระยะเวลาในการขอดูงาน</li>
                        <p className="ml-6">ผู้ขอดูงานสามารถตรวจสอบวันดูงานได้ทาง <strong>ปฏิทินของศูนย์ฯ</strong></p>

                        <li className="text-lg font-semibold">3. การพิจารณาคำขอ</li>
                        <p className="ml-6">หลังจากที่ยื่นคำขอผ่านระบบแล้ว ทางศูนย์ฯ จะพิจารณาคำขอ และแจ้งผลตอบกลับทาง <strong>อีเมลภายใน 3 วัน</strong> พร้อมให้รายละเอียดเกี่ยวกับการดูงาน</p>
                        <ul className="ml-10 list-disc space-y-2 text-gray-700">
                            <li className="text-md"><strong>3.1</strong> ส่งบันทึกถึง <strong>คณบดี คณะแพทยศาสตร์ จุฬาฯ</strong> เพื่อขอเยี่ยมชมศูนย์ฝึกทักษะการแพทย์เสมือนจริง อาคารภูมิสิริ ชั้น 11 โซน C</li>
                            <li className="text-md"><strong>3.2</strong> ส่งบันทึกถึง <strong>ผู้อำนวยการโรงพยาบาลจุฬาลงกรณ์</strong> เพื่อขอเยี่ยมชมศูนย์ฝึกชีพและฝึกทักษะเสมือนจริง อาคาร ส.ธ. ชั้น 16</li>
                        </ul>

                        <li className="text-lg font-semibold">4. การเข้าชมงาน</li>
                        <p className="ml-6">ขอความกรุณา <strong>แต่งกายสุภาพ</strong> และปฏิบัติตาม <strong>คำแนะนำของศูนย์ฯ</strong></p>

                        <li className="text-lg font-semibold">5. การประเมินผล</li>
                        <p className="ml-6">หลังจากเสร็จสิ้นการดูงาน กรุณาทำ <strong>แบบสอบถามความพึงพอใจ</strong> และ <strong>ข้อเสนอแนะ</strong> เพื่อปรับปรุงและพัฒนาศูนย์ฯ ต่อไปในอนาคต</p>
                    </ul>
                </section>

                {/* หมายเหตุ */}
                <div className="p-6 bg-yellow-100 text-yellow-800 rounded-lg text-center shadow-md">
                    <strong>📢 หมายเหตุ:</strong> กรุณาปฏิบัติตามระเบียบและข้อกำหนดการใช้งาน เพื่อให้เกิดประโยชน์สูงสุด
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
                <Button variant="outline" className="px-6 py-2 text-blue-700 border-blue-500 hover:bg-blue-100 flex items-center">
                    <FaArrowLeft className="mr-2"/> กลับไปที่บริการ
                </Button>
                <Button variant="outline" className="px-6 py-2 text-blue-700 border-blue-500 hover:bg-blue-100 flex items-center">
                    ถัดไป <FaArrowRight className="ml-2"/>
                </Button>
            </div>
        </div>
    );
};

export default EduRules;
