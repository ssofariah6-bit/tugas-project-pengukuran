const menuItems = [
    {text : 'Home', link: 'home.html'},
    {text : 'Calculator', link: 'calculator.html'},
    {text : 'Temperature', link: 'konversi-suhu.html'},
    {text : 'BMI', link: 'bmi.html'},
    {text : 'About', link: 'about.html'}
];

//Arrow function untuk membuat link navbar
const createNavItem = (item) => {
    let link = document.createElement('a');
    link.href = item.link;                  //gunakan link bukan text
    link.textContent = item.text;           //teks akan terlihat
    link.style.marginRight = '15px';        //supaya ada jarak antar link
    return link;
};

//Arrow function untuk membangun navbar
const buildNavBar = (items) => {
    const nav = document.getElementById('navbar');
    items.forEach(item => {
        const navItem = createNavItem(item);
        nav.appendChild(navItem);
    });     
};

//Panggil function untuk membuat navbar
buildNavBar(menuItems);