'use client'

import '../local_styles/general.css'

export default function ProductsPage() {
    // View:
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>GIỚI THIỆU</title>
                <link rel="preconect" href="https://cdnjs.cloudflare.com/" />
                <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
                />
            </head>
            <body>
                <main style={{ height: "3000px" }}>
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
                        <a href="#!">Đăng nhập</a>
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
                        <li><a href="/">TRANG CHỦ</a></li>
                        <li>
                        <a href="./introduce.html">GIỚI THIỆU</a>
                        </li>
                        <li>
                        <a
                            style={{
                                color: "#ecad22",
                                fontWeight: "bold",
                                borderBottom: "1px solid #ecad22"
                            }}
                            href="./production.html"
                            >SẢN PHẨM</a
                        >
                        </li>
                        <li><a href="#!">LIÊN HỆ</a></li>
                    </ul>
                    </div>
                </header>

                {/* <!--  lIST PRODUCTION --> */}
                <div className="product-internal">
                    {/* <!-- Titile --> */}
                    <div className="title">
                    <h2>DANH SÁCH CÁC SẢN SẢN PHẨM</h2>
                    </div>

                    {/* <!-- list --> */}
                    <div className="list-product">
                    <div className="list-item-product">
                        <a href="./product-detail.html">
                        <img src="./img/image-watch1.jpg" alt="Đồng hồ" />
                        </a>
                        <div className="info">
                        <a href="#!">
                            <h4>Đá phong thủy #1</h4>
                            <p>1.200.000 VND</p>
                        </a>
                        <div className="btn-add">
                            <a href="#!" className="btn-add-cart">
                            <span>Thêm vào giỏ hàng</span>
                            <i className="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="list-item-product">
                        <a href="./product-detail.html">
                        <img src="./img/image-watch1.jpg" alt="Đồng hồ" />
                        </a>
                        <div className="info">
                        <a href="#!">
                            <h4>Đá phong thủy #1</h4>
                            <p>1.200.000 VND</p>
                        </a>
                        <div className="btn-add">
                            <a href="#!" className="btn-add-cart">
                            <span>Thêm vào giỏ hàng</span>
                            <i className="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="list-item-product">
                        <a href="./product-detail.html">
                        <img src="./img/image-watch1.jpg" alt="Đồng hồ" />
                        </a>
                        <div className="info">
                        <a href="#!">
                            <h4>Đá phong thủy #1</h4>
                            <p>1.200.000 VND</p>
                        </a>
                        <div className="btn-add">
                            <a href="#!" className="btn-add-cart">
                            <span>Thêm vào giỏ hàng</span>
                            <i className="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="list-item-product">
                        <a href="./product-detail.html">
                        <img src="./img/image-watch1.jpg" alt="Đồng hồ" />
                        </a>
                        <div className="info">
                        <a href="#!">
                            <h4>Đá phong thủy #1</h4>
                            <p>1.200.000 VND</p>
                        </a>
                        <div className="btn-add">
                            <a href="#!" className="btn-add-cart">
                            <span>Thêm vào giỏ hàng</span>
                            <i className="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="list-item-product">
                        <a href="./product-detail.html">
                        <img src="./img/image-watch1.jpg" alt="Đồng hồ" />
                        </a>
                        <div className="info">
                        <a href="#!">
                            <h4>Đá phong thủy #1</h4>
                            <p>1.200.000 VND</p>
                        </a>
                        <div className="btn-add">
                            <a href="#!" className="btn-add-cart">
                            <span>Thêm vào giỏ hàng</span>
                            <i className="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="list-item-product">
                        <a href="./product-detail.html">
                        <img src="./img/image-watch1.jpg" alt="Đồng hồ" />
                        </a>
                        <div className="info">
                        <a href="#!">
                            <h4>Đá phong thủy #1</h4>
                            <p>1.200.000 VND</p>
                        </a>
                        <div className="btn-add">
                            <a href="#!" className="btn-add-cart">
                            <span>Thêm vào giỏ hàng</span>
                            <i className="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="list-item-product">
                        <a href="./product-detail.html">
                        <img src="./img/image-watch1.jpg" alt="Đồng hồ" />
                        </a>
                        <div className="info">
                        <a href="#!">
                            <h4>Đá phong thủy #1</h4>
                            <p>1.200.000 VND</p>
                        </a>
                        <div className="btn-add">
                            <a href="#!" className="btn-add-cart">
                            <span>Thêm vào giỏ hàng</span>
                            <i className="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="list-item-product">
                        <a href="./product-detail.html">
                        <img src="./img/image-watch1.jpg" alt="Đồng hồ" />
                        </a>
                        <div className="info">
                        <a href="#!">
                            <h4>Đá phong thủy #1</h4>
                            <p className="price">1.200.000 VND</p>
                        </a>
                        <div className="btn-add">
                            <a href="#!" className="btn-add-cart">
                            <span>Thêm vào giỏ hàng</span>
                            <i className="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="list-item-product">
                        <a href="./product-detail.html">
                        <img src="./img/image-watch1.jpg" alt="Đồng hồ" />
                        </a>
                        <div className="info">
                        <a href="#!">
                            <h4>Đá phong thủy #1</h4>
                            <p className="price">1.200.000 VND</p>
                        </a>
                        <div className="btn-add">
                            <a href="#!" className="btn-add-cart">
                            <span>Thêm vào giỏ hàng</span>
                            <i className="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="list-item-product">
                        <a href="./product-detail.html">
                        <img src="./img/image-watch1.jpg" alt="Đồng hồ" />
                        </a>
                        <div className="info">
                        <a href="#!">
                            <h4>Đá phong thủy #1</h4>
                            <p className="price">1.200.000 VND</p>
                        </a>
                        <div className="btn-add">
                            <a href="#!" className="btn-add-cart">
                            <span>Thêm vào giỏ hàng</span>
                            <i className="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="list-item-product">
                        <a href="./product-detail.html">
                        <img src="./img/image-watch1.jpg" alt="Đồng hồ" />
                        </a>
                        <div className="info">
                        <a href="#!">
                            <h4>Đá phong thủy #1</h4>
                            <p className="price">1.200.000 VND</p>
                        </a>
                        <div className="btn-add">
                            <a href="#!" className="btn-add-cart">
                            <span>Thêm vào giỏ hàng</span>
                            <i className="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="list-item-product">
                        <a href="./product-detail.html">
                        <img src="./img/image-watch1.jpg" alt="Đồng hồ" />
                        </a>
                        <div className="info">
                        <a href="#!">
                            <h4>Đá phong thủy #1</h4>
                            <p className="price">1.200.000 VND</p>
                        </a>
                        <div className="btn-add">
                            <a href="#!" className="btn-add-cart">
                            <span>Thêm vào giỏ hàng</span>
                            <i className="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="list-item-product">
                        <a href="./product-detail.html">
                        <img src="./img/image-watch1.jpg" alt="Đồng hồ" />
                        </a>
                        <div className="info">
                        <a href="#!">
                            <h4>Đá phong thủy #1</h4>
                            <p className="price">1.200.000 VND</p>
                        </a>
                        <div className="btn-add">
                            <a href="#!" className="btn-add-cart">
                            <span>Thêm vào giỏ hàng</span>
                            <i className="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="list-item-product">
                        <a href="./product-detail.html">
                        <img src="./img/image-watch1.jpg" alt="Đồng hồ" />
                        </a>
                        <div className="info">
                        <a href="./product-detail.html">
                            <h4>Đá phong thủy #1</h4>
                            <p className="price">1.200.000 VND</p>
                        </a>
                        <div className="btn-add">
                            <a href="#!" className="btn-add-cart">
                            <span>Thêm vào giỏ hàng</span>
                            <i className="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="list-item-product">
                        <a href="./product-detail.html">
                        <img src="./img/image-watch1.jpg" alt="Đồng hồ" />
                        </a>
                        <div className="info">
                        <a href="#!">
                            <h4>Đá phong thủy #1</h4>
                            <p className="price">1.200.000 VND</p>
                        </a>
                        <div className="btn-add">
                            <a href="#!" className="btn-add-cart">
                            <span>Thêm vào giỏ hàng</span>
                            <i className="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="list-item-product">
                        <a href="./product-detail.html">
                        <img src="./img/image-watch1.jpg" alt="Đồng hồ" />
                        </a>
                        <div className="info">
                        <a href="#!">
                            <h4>Đá phong thủy #1</h4>
                            <p className="price">1.200.000 VND</p>
                        </a>
                        <div className="btn-add">
                            <a href="#!" className="btn-add-cart">
                            <span>Thêm vào giỏ hàng</span>
                            <i className="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                        </div>
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
                </main>
            </body>
        </html>
    )
}