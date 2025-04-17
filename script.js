// Lấy nút thêm vào giỏ hàng
const addToCartBtn = document.getElementById('add-to-cart');

// Thêm sự kiện click cho nút
addToCartBtn.addEventListener('click', function() {
    // Hiển thị thông báo khi click
    alert('Sản phẩm đã được thêm vào giỏ hàng!');
    
    // Thay đổi text và màu nút tạm thời
    addToCartBtn.textContent = 'Đã thêm vào giỏ';
    addToCartBtn.style.backgroundColor = '#34a853';
    
    // Sau 2 giây trở về trạng thái ban đầu
    setTimeout(function() {
        addToCartBtn.textContent = 'Thêm vào giỏ hàng';
        addToCartBtn.style.backgroundColor = '#0071e3';
    }, 2000);
});