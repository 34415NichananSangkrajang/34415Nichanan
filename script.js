// 1. แสดงปีปัจจุบันใน Footer อัตโนมัติ
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// 2. ฟังก์ชันจัดการสลับหน้า (1 หัวข้อต่อ 1 หน้าเท่านั้น)
function showSection(targetId) {
    const sections = document.querySelectorAll("section");
    
    // ซ่อนทุก Section และเอาคลาส show ออก
    sections.forEach(section => {
        section.style.display = "none";
        section.classList.remove("show");
    });

    // ดึง Section ที่ต้องการแสดง
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.style.display = "block";
        
        // ใส่ delay เล็กน้อยเพื่อให้ Animation Fade In ทำงานได้สมบูรณ์
        setTimeout(() => {
            targetSection.classList.add("show");
        }, 20);
    }
}

// 3. ผูก Event Listener กับลิงก์เมนูนำทาง (Navigation Links)
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        
        // ดึง ID จาก href (ตัดเครื่องหมาย # ออก)
        const targetId = link.getAttribute("href").replace("#", "");
        showSection(targetId);
    });
});

// 4. ตั้งค่าเริ่มต้นเมื่อเปิดเว็บ ให้แสดงเฉพาะหน้าแรก (เช่น คำนำ หรือ หน้าแรก)
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    
    // เพิ่ม class สำหรับเอฟเฟกต์ Fade In ให้ทุก section
    sections.forEach(section => {
        section.classList.add("fade-in");
    });

    // แสดงเฉพาะ Section แรกสุดทันทีที่โหลดหน้าเว็บ
    if (sections.length > 0) {
        showSection(sections[0].id);
    }
});

// ข้อความต้อนรับใน Console
console.log("Welcome to Tunwa Pink-Cyan Portfolio!");
