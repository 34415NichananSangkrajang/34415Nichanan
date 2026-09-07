// 1. ฟังก์ชันจัดการสลับหน้า (1 หัวข้อต่อ 1 หน้าเท่านั้น)
function showSection(targetId) {
    const sections = document.querySelectorAll("main section");
    
    // ซ่อนทุก Section และเอาคลาส active ออก
    sections.forEach(section => {
        section.classList.remove("active");
    });

    // ดึง Section ที่ต้องการแสดง
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add("active");
    }

    // อัปเดตสถานะปุ่ม Active ใน Navbar
    updateNavActive(targetId);
}

// 2. ฟังก์ชันอัปเดตสีปุ่ม Navbar เมื่อเปลี่ยนหน้า
function updateNavActive(targetId) {
    const navLinks = document.querySelectorAll(".nav-container a, .nav-container button");
    
    navLinks.forEach(link => {
        // ดึงค่า ID จาก href หรือ attribute
        const href = link.getAttribute("href");
        const linkId = href ? href.replace("#", "") : link.getAttribute("onclick")?.match(/'([^']+)'/)?.[1];
        
        if (linkId === targetId) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// 3. ผูก Event Listener กับลิงก์เมนูนำทาง (กรณีใช้ <a> ใน Navbar)
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-container a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").replace("#", "");
            showSection(targetId);
        });
    });

    // แสดงเฉพาะหน้าปก (#cover) หรือ Section แรกสุดทันทีที่เปิดเว็บ
    const sections = document.querySelectorAll("main section");
    if (sections.length > 0) {
        const firstSectionId = sections[0].id || "cover";
        showSection(firstSectionId);
    }

    // แสดงปีปัจจุบันใน Footer อัตโนมัติ (ถ้ามี element id="year")
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// ข้อความต้อนรับใน Console
console.log("Welcome to Nichanan's Portfolio!");
