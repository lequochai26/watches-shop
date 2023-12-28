'use client'

export default function ProductDetailPage() {
    // View:
    return (
        <html lang="vi">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconect" href="https://cdnjs.cloudflare.com/" />
                <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
                />
                <title>CHI TIẾT SẢN PHẨM</title>
            </head>
            <body>
                <header className="header">
                <div className="container-header">
                    <div className="navbar">
                    <div className="contact">
                        <i className="fa-solid fa-phone"></i>
                        <a href="tel: 0909123456">Liên hệ: 0909123456</a>
                    </div>
                    <div className="user">
                        <i className="fa-regular fa-user"></i>
                        <a id="sign-in" href="#!">Đăng kí</a>
                        <a href="./sign-in.html">Đăng nhập</a>
                    </div>
                    </div>
                </div>
                {/* <!------------------ container-after-header ----------------------> */}
                <div className="container-after-header">
                    {/* <!-- Logo --> */}
                    <div className="logo">
                    <img src="./img/logo.png" alt="Logo bán đá" />
                    </div>

                    {/* <!-------------------- Nhap tim kiem ----------------> */}
                    <div className="finding">
                    <input type="text" placeholder="Tìm sản phẩm mong muốn" />
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </div>

                    {/* <!------------------- List -------------------------> */}
                    <div className="list">
                    <ul className="sub-list">
                        <li>
                        <a href="#!">SẢN PHẨM HỢP MỆNH</a>
                        <i className="fa-regular fa-gem"></i>
                        <ul className="list-item">
                            <li><a href="#!">SẢN PHẨM MỆNH MỘC</a></li>
                            <li><a href="#!">SẢN PHẨM MỆNH KIM</a></li>
                            <li><a href="#!">SẢN PHẨM MỆNH THỦY</a></li>
                            <li><a href="#!">SẢN PHẨM MỆNH THỔ</a></li>
                            <li><a href="#!">SẢN PHẨM MỆNH HỎA</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                    <div className="cart">
                    <p><a href="#!">GIỎ HÀNG</a></p>
                    <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>

                {/* <!---------------------------- Menu ------------------------ --> */}
                <div className="menu">
                    <ul className="sub-menu">
                    <li>
                        <a href="/">TRANG CHỦ</a>
                    </li>
                    <li><a href="./introduce.html">GIỚI THIỆU</a></li>
                    <li><a href="./production.html">SẢN PHẨM</a></li>
                    <li><a href="./contact.html">LIÊN HỆ</a></li>
                    </ul>
                </div>
                </header>
                <main>
                {/* <!-- Detail Production --> */}
                <div className="detail-product">
                    <div className="desc-product">
                    <div className="desc-product-item">
                        <a href="#!">
                        <img src="./img/image-watch1.jpg" alt="" />
                        </a>
                        <div className="interact">
                        <a href="#!"><i className="fa-regular fa-heart"></i></a>
                        <a href="#!"><i className="fa-solid fa-share-nodes"></i></a>
                        </div>
                        <div className="img-product-more">
                        <img src="./img/image-watch2.jpg" alt="" />
                        <img src="./img/image-watch3.jpg" alt="" />
                        <img src="./img/image-watch4.jpg" alt="" />
                        </div>
                    </div>
                    <div className="desc-product-item">
                        <h4 className="title-product">OMEGA</h4>

                        <div className="tag-label">
                        <span className="label">GIẢM GIÁ 40%</span>
                        <span className="coupon">Phiếu mua hàng 200.000</span>
                        </div>
                        <span className="price">1.550.000 VND</span>
                        <div className="btn-add-to-cart">
                        <a href="#!">
                            <span>THÊM VÀO GIỎ HÀNG</span>
                            <i className="fa-solid fa-cart-plus fa-bounce"></i>
                        </a>
                        </div>
                        <div className="desc-transport">
                        <i className="fa-solid fa-truck-arrow-right fa-shake"></i>
                        <span>Vận chuyển trong 48h!</span>
                        </div>
                        <div className="desc-product-detail">
                        <div className="desc-detail">
                            <span>MÔ TẢ</span>
                            <i className="fa-solid fa-circle-info"></i>
                        </div>
                        <p>
                            Vỏ thép không gỉ với vòng thép không gỉ. Viền thép không gỉ cố
                            định. số màu đen với tay sáng và đánh dấu giờ chỉ mục. Điểm đánh
                            dấu phút xung quanh vành ngoài. Loại quay số: Analog. Bàn tay và
                            điểm đánh dấu phát quang. Hiển thị thứ trong tuần và ngày ở vị
                            trí 3 giờ. Bộ chuyển động tự động Seiko calibre 7S26 với khả
                            năng dự trữ năng lượng trong 40 giờ. Tinh thể Hardlex chống trầy
                            xước. Mặt sau của bộ xương. Hình dạng vỏ tròn. Kích thước vỏ: 37
                            mm. Độ dày vỏ: 12 mm. Chiều rộng dải: 19 mm. Gấp qua khóa bằng
                            nút nhấn. Chống nước ở độ sâu 30 mét / 100 feet. Chức năng:
                            ngày, thứ, giờ, phút, giây.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="comment-product">
                    <h3>Đánh giá của bạn</h3>
                    <i className="fa-solid fa-comments fa-bounce"></i>
                    <textarea rows={8}></textarea>
                    <button>GỬI ĐÁNH GIÁ</button>
                    </div>
                    <hr />
                </div>

                {/* <!-- ĐÁNH GIÁ CỦA KHÁCH HÀNG --> */}
                <div className="container-avaluate">
                    <div className="title">
                    <span>Đánh giá của khách hàng</span>
                    <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div className="avaluate">
                    {/* <!-- Đánh giá 1 --> */}
                    <div className="avaluate-item">
                        <div className="info-cus">
                        <img className="img-cus" src="./img/face-1.jpg" alt="" />
                        <div className="name-cus">
                            <span>Châu Thị Diễm My</span>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        </div>
                        <div className="content-avaluate">
                        <p className="content-cus">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam expedita excepturi corrupti, dolorem reprehenderit
                            animi?
                        </p>
                        </div>
                    </div>

                    {/* <!-- Đánh giá 2 --> */}
                    <div className="avaluate-item">
                        <div className="info-cus">
                        <img className="img-cus" src="./img/face-2.jpg" alt="" />
                        <div className="name-cus">
                            <span>Lâm Bảo Châu</span>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        </div>
                        <div className="content-avaluate">
                        <p className="content-cus">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam expedita excepturi corrupti, dolorem reprehenderit
                            animi?
                        </p>
                        </div>
                    </div>

                    {/* <!-- Đánh giá 3 --> */}
                    <div className="avaluate-item">
                        <div className="info-cus">
                        <img className="img-cus" src="./img/face-3.jpg" alt="" />
                        <div className="name-cus">
                            <span>Nguyễn Xuân Trường</span>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        </div>
                        <div className="content-avaluate">
                        <p className="content-cus">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Ducimus suscipit nam doloremque eius laudantium placeat tempore
                            illo rerum voluptas ipsam quis, sequi sint. Quae dolor, debitis
                            cumque, labore illum ullam ipsa ipsam est reiciendis praesentium
                            officia. Explicabo iste atque aperiam officiis nisi in aliquam
                            provident, dolorem veritatis officia autem, asperiores ipsam
                            suscipit eaque eum? Autem minima, necessitatibus cumque ducimus
                            architecto asperiores provident, pariatur excepturi fugit labore
                            nisi eum enim magnam suscipit totam? Nesciunt itaque cum neque
                            enim officiis iure perferendis vel qui odio et, quae vitae
                            numquam in laborum dolor ad fugiat sint iusto facere iste
                            necessitatibus facilis esse! Ducimus!
                        </p>
                        </div>
                    </div>

                    {/* <!-- Đánh giá 4 --> */}
                    <div className="avaluate-item">
                        <div className="info-cus">
                        <img className="img-cus" src="./img/face-4.jpg" alt="" />
                        <div className="name-cus">
                            <span>Lê Thành Vinh</span>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        </div>
                        <div className="content-avaluate">
                        <p className="content-cus">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam expedita excepturi corrupti, dolorem reprehenderit
                            animi?
                        </p>
                        </div>
                    </div>

                    {/* <!-- Đánh giá 5 --> */}
                    <div className="avaluate-item">
                        <div className="info-cus">
                        <img className="img-cus" src="./img/face-5.jpg" alt="" />
                        <div className="name-cus">
                            <span>Phạm Nguyễn Hoài Ân</span>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        </div>
                        <div className="content-avaluate">
                        <p className="content-cus">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                            error similique tenetur esse quaerat quis illo provident,
                            officiis distinctio autem eaque impedit ex nisi a aliquam earum!
                            Provident necessitatibus cum tenetur. Eveniet, suscipit enim
                            ipsam nostrum omnis molestias pariatur quasi quibusdam sint nemo
                            dolore quod iure impedit quia alias maxime?
                        </p>
                        </div>
                    </div>

                    {/* <!-- Đánh giá 6 --> */}
                    <div className="avaluate-item">
                        <div className="info-cus">
                        <img className="img-cus" src="./img/face-6.jpg" alt="" />
                        <div className="name-cus">
                            <span>Trần Đức Tân</span>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        </div>
                        <div className="content-avaluate">
                        <p className="content-cus">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                            illo cumque dignissimos ea porro fugiat laudantium soluta odio,
                            ad aut minus nemo nulla esse a!
                        </p>
                        </div>
                    </div>

                    {/* <!-- Đánh giá 7 --> */}
                    <div className="avaluate-item">
                        <div className="info-cus">
                        <img className="img-cus" src="./img/face-7.jpg" alt="" />
                        <div className="name-cus">
                            <span>Võ Thành Tâm</span>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        </div>
                        <div className="content-avaluate">
                        <p className="content-cus">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Molestias, impedit soluta cupiditate omnis culpa voluptatibus
                            doloremque nisi dignissimos, possimus sit aspernatur suscipit
                            eveniet eius explicabo voluptate facilis, voluptatum rerum?
                            Nesciunt nihil perferendis, libero possimus et corrupti
                            praesentium eos exercitationem, consequuntur cum natus? Nobis
                            quidem quae consectetur quo exercitationem a necessitatibus,
                            modi, ea nam excepturi illo, aperiam voluptatibus corporis qui
                            corrupti veniam voluptates officiis natus eligendi illum fugiat!
                            Exercitationem, fugiat magnam nemo minima a sunt veritatis iusto
                            ut iure unde sequi!
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <!---------------------- Footer - Chân trâng------------------------------------ --> */}
                </main>
                <div className="footer">
                <div className="title">
                    <h2>KẾT NỐI VỚI CHÚNG TÔI</h2>
                </div>
                <div className="container-footer">
                    {/* <!-- Icon social Network --> */}
                    <div className="social-icon">
                    <a href="#!">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#!">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    </div>

                    {/* <!-- Input --> */}
                    <div className="input-gmail">
                    <input
                        type="text"
                        placeholder="Nhập Gmail để nhận cẩm nang phong thủy"
                    />
                    </div>

                    {/* <!-- Button sign up --> */}
                    <div className="btn-sign-up">
                    <a href="#!">Đăng kí</a>
                    <a href="#!">Nhận tư vấn</a>
                    </div>
                </div>

                {/* <!-- infor store --> */}
                <div className="info-store">
                    <div className="title-info">
                    <h4>HỆ THỐNG CỬA HÀNG</h4>
                    </div>
                    <div className="info-store-title">
                    <div className="address">
                        <i className="fa-solid fa-house-chimney"></i>
                        <span
                        >72 Đường số 8, P.11, Q. Gò Vấp, Ho Chi Minh City, Vietnam</span
                        >
                    </div>
                    <div className="phone-contact">
                        <i className="fa-solid fa-phone"></i>
                        <span><a href="tel: 0908 999999">0908 999999</a></span>
                    </div>
                    </div>
                    <div className="highlight">
                    <div className="title-highlight">
                        <p>
                        Copyright &copy; 2021 | Bản quyền thuộc về nhóm 04 - Đại học Gia
                        Định
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </body>
        </html>
    )
}