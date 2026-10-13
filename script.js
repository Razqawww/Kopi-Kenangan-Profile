document.addEventListener("DOMContentLoaded", function () {
  const mapIframe = document.getElementById("auto-map");
  const descText = document.getElementById("location-desc");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        mapIframe.src = `https://maps.google.com/maps?q=Kopi+Kenangan&ll=${lat},${lon}&z=14&output=embed`;
        
        if (descText) {
          descText.innerText = "Menampilkan gerai Kopi Kenangan terdekat di sekitar lokasimu saat ini. Kunjungi gerai kami dan nikmati kopi favoritmu!";
        }
      },
      (error) => {
        mapIframe.src = "https://maps.google.com/maps?q=Kopi+Kenangan+Indonesia&t=&z=11&ie=UTF8&iwloc=&output=embed";
        if (descText) {
          descText.innerText = "Nikmati cita rasa Kopi Kenangan di gerai terdekat kota kamu. Kami terus berkembang untuk menghadirkan kopi berkualitas tinggi langsung ke dekatmu.";
        }
      }
    );
  }
});



const hamburger = document.getElementById('hamburger');
const navRight = document.getElementById('navRight');
const navLinks = document.querySelectorAll('.nav-links a');

// Ketika tombol hamburger diklik
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navRight.classList.toggle('active');
});

// Ketika salah satu link menu diklik di HP, menu akan otomatis tertutup
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navRight.classList.remove('active');
  });
});