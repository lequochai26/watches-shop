'use client'

import React from 'react';
import './local_styles/general.css';

export default function HomePage() {
  return (
    <html lang="en">
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
        <title>TRANG CHỦ</title>
      </head>
      <body>
        <main>
          {/* <!------------------ Header-------------------- --> */}
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
                  <a href="/login">Đăng nhập</a>
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
                  <a
                    style={{
                      color: "#ecad22",
                      fontWeight: "bold",
                      borderBottom: "1px solid #ecad22"
                    }}
                    href="/"
                  >
                    TRANG CHỦ
                  </a>
                </li>
                <li><a href="/introduce">GIỚI THIỆU</a></li>
                <li><a href="./production.html">SẢN PHẨM</a></li>
                <li><a href="./contact.html">LIÊN HỆ</a></li>
              </ul>
            </div>

            {/* <!-- ------------------------ img action -------------------------- --> */}
            <div className="banner">
              <div className="banner-img">
                <img src="./img/banner-action.jpg" alt="Banner hành động" />
                <div className="btn-action">
                  <a href="#!">
                    <span>XEM THÊM</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* <!--------------------- lIST PRODUCT INTERNAL ----------------------> */}
          <div className="product-internal">
            {/* <!-- Titile --> */}
            <div className="title">
              <h2>SẢN PHẨM HỢP MỆNH</h2>
            </div>

            {/* <!-- list --> */}
            <div className="list-product">
              <div className="list-item-product">
                <a href="#!">
                  <img src="./img/menh-hoa.jpg" alt="đá phong thủy" />
                  <div className="text">Mệnh Hỏa</div>
                </a>
              </div>

              <div className="list-item-product">
                <a href="#!">
                  <img src="./img/menh-moc.jpg" alt="đá phong thủy" />
                  <div className="text">Mệnh Mộc</div>
                </a>
              </div>

              <div className="list-item-product">
                <a href="#!">
                  <img src="./img/menh-kim.jpg" alt="đá phong thủy" />
                  <div className="text">Mệnh Kim</div>
                </a>
              </div>

              <div className="list-item-product">
                <a href="#!">
                  <img src="./img/menh-thuy.jpg" alt="đá phong thủy" />
                  <div className="text">Mệnh Thủy</div>
                </a>
              </div>

              <div className="list-item-product">
                <a href="#!">
                  <img src="./img/menh-tho.jpg" alt="đá phong thủy" />
                  <div className="text">Mệnh Thổ</div>
                </a>
              </div>

              <div className="list-item-product">
                <a href="#!">
                  <img src="./img/full-menh.jpg" alt="đá phong thủy" />
                  <div className="text">Danh Sách</div>
                </a>
              </div>
            </div>
          </div>

          {/* <!--------------------- commit - CAM KẾT  ---------------------> */}
          <div className="commit">
            <div className="title">
              <h2>CAM KẾT</h2>
            </div>
            <div className="desc">
              <p>
                Đá phong thuỷ Chin games - Thương hiệu trang sức phong thuỷ hàng đầu
                tại Việt Nam, cảm ơn quý khách đã cùng đồng hành trong suốt thời
                gian qua. Chúng tôi luôn mong muốn mang đến cho quý khách hàng những
                giá trị tốt nhất với dịch vụ thanh toán tiện lợi, giao hàng nhanh
                chóng, đăc biệt có xưởng chế tác theo yêu cầu bởi nghệ nhân đá.
              </p>
            </div>
            <div className="list-commit">
              <div className="commit-item">
                <i className="fa-solid fa-headset"></i>
                <span>Tư vấn hoàn toàn miễn phí</span>
              </div>

              <div className="commit-item">
                <i className="fa-regular fa-gem"></i>
                <span>Sản phẩm đá tự nhiên</span>
              </div>

              <div className="commit-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Sản phẩm đạt tiêu chuẩn kiểm định</span>
              </div>
            </div>
          </div>

          {/* <!---------------------- Footer - Chân trâng------------------------------------ --> */}
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
          <div className="float-button">
            <div className="float-button-item-facebook">
              <a href="#!">
                <i className="fa-brands fa-facebook fa-shake"></i>
              </a>
            </div>
            <div className="float-button-item-phone">
              <a href="#!">
                <i className="fa-solid fa-phone fa-shake"></i>
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}