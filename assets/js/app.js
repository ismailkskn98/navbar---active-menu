let navItems = document.querySelectorAll('header nav a'); // navbar a etiketleri
let sections = document.querySelectorAll('section'); // section'lar
let header = document.querySelector('header'); // header sticky için

window.onscroll = () => {
  let scrollY = window.scrollY;
  header.classList.toggle('stickyHeader', scrollY > 1); // scrollY eğer 1 den büyük ise 'stickyHeader' küçük ise class'ı sil

  sections.forEach((section) => {
    let offsetTop = section.offsetTop - 90; // her bir section'ın top'dan(üst kenardan) uzaklığı (px) burada ki "-90px" header'ın yüksekliği eğer bunu düşmek istek fazla offsetTop fazla geliyor
    let sectionHeight = section.offsetHeight; // her bir section'ın yüksekliği (border, padding, margin, height dahil)
    let sectionID = section.getAttribute('id'); // o anki section'nın id'si

    if (scrollY >= offsetTop && scrollY < offsetTop + sectionHeight) {
      // o anki section görünür olduğunda çalışır
      navItems.forEach((item) => {
        item.classList.remove('active'); // her seferinde "active" class'ı silinir
        document.querySelector(`a[href*="${sectionID}"]`).classList.add('active'); // navbar a etiketlerinden o anki "sectionID" sine sahip a etiketini active class'ını ekler
      });
    }
  });
};
