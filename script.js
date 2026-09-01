// แสดงปีปัจจุบันใน Footer อัตโนมัติ
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// เอฟเฟกต์ Fade In ตอนเลื่อนหน้าจอ (Scroll Animation)
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { 
    threshold: 0.2 
});

sections.forEach(section => {
    section.classList.add("fade-in");
    observer.observe(section);
});

// ข้อความต้อนรับใน Console
console.log("Welcome to THANACHAI Portfolio");

