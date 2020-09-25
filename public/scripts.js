const currentPage = location.pathname;
const menuItems = document.querySelectorAll('header .menu a');

for (const item of menuItems) {
    if(currentPage.includes(item.getAttribute('href'))){
        item.classList.add('active');
    }
}