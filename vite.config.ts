import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 5174, // เปลี่ยนเป็นพอร์ตที่ต้องการ
    strictPort: true // ป้องกัน Vite เปลี่ยนพอร์ตเอง
  },
  plugins: [react()],
});
