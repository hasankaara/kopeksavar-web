// Ses dosyasını yükle
const audio = new Audio('assets/kopeksavar_18khz.wav');
audio.loop = true; // sürekli çalması için

// Buton ve durum
const btn = document.getElementById('startBtn');
let isPlaying = false;

// Başlangıç rengi mavi
btn.style.backgroundColor = 'rgb(0, 100, 205)'; // başlangıç mavi

btn.addEventListener('click', () => {
    if (!isPlaying) {
        // Ses başlat
        audio.play();

        // Buton rengi ve metni değişiyor
        btn.textContent = 'Durdur';
        btn.style.backgroundColor = 'rgb(220, 20, 60)'; // kırmızı
        isPlaying = true;
    } else {
        // Ses durdur
        audio.pause();
        audio.currentTime = 0; // başa al

        // Buton rengi ve metni değişiyor
        btn.textContent = 'Başlat';
        btn.style.backgroundColor = 'rgb(34, 239, 34)'; // yeşil
        isPlaying = false;
    }
});
