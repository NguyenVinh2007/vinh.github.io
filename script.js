document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');

    // Chức năng bật/tắt menu trên mobile
    mobileMenu.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    // Có thể thêm code cho các chức năng tương tác khác tại đây (ví dụ: form validation)
});
