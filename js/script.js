
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
// 取得所有的時間軸項目
const timelineItems = document.querySelectorAll('.timeline-item');

// 為每個時間軸項目添加滑鼠移入移出事件監聽器
timelineItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('expanded');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('expanded');
    });
});

