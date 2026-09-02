// แสดงปีปัจจุบันใน Footer อัตโนมัติ
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// เอฟเฟกต์ Fade In เลื่อนแสดงผลเมื่อ Scroll สกอรล์ลงมา
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { 
    threshold: 0.15 
});

sections.forEach(section => {
    section.classList.add("fade-in");
    observer.observe(section);
});

// ข้อความต้อนรับใน Console
console.log("Welcome to Tunwa Pink-Cyan Portfolio!");
