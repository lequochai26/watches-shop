'use client'

export default function ContactPage() {
    // View:
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Liên hệ</title>
                <link rel="preconect" href="https://cdnjs.cloudflare.com/" />
                <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
                />
                <link rel="stylesheet" href="./assets/css/reset.css" />
                <link rel="stylesheet" href="./assets/css/custom-scrollbar.css" />
                <link rel="stylesheet" href="./assets/css/contact.css" />
            </head>
            <body>
                <main>
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
                   {/*------------------ container-after-header ---------------------*/}
                    <div className="container-after-header">
                   {/*-- Logo -*/}
                    <div className="logo">
                        <img src="./img/logo.png" alt="Logo bán đá" />
                    </div>

                   {/*-------------------- Nhap tim kiem ---------------*/}
                    <div className="finding">
                        <input type="text" placeholder="Tìm sản phẩm mong muốn" />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>

                   {/*------------------- List ------------------------*/}
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
                        <p><a href="./cart.html">GIỎ HÀNG</a></p>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    </div>

                   {/*---------------------------- Menu ------------------------ -*/}
                    <div className="menu">
                    <ul className="sub-menu">
                        <li><a href="/">TRANG CHỦ</a></li>
                        <li><a href="./introduce.html">GIỚI THIỆU</a></li>
                        <li><a href="./">SẢN PHẨM</a></li>

                        <li>
                        <a
                            style={{
                                color: "#ecad22",
                                fontWeight: "bold",
                                borderBottom: "1px solid #ecad22"
                            }}
                            href="./introduce.html"
                        >LIÊN HỆ</a>
                        </li>
                    </ul>
                    </div>
                </header>

               {/*-- information introducing -*/}
                <div className="container-info">
                    <div className="logo">
                    <h2>ĐÁ PHONG THỦY CHIN GEMS</h2>
                    <img src="./img/logo.png" alt="" />
                    </div>

                   {/*-- Thông tin liên hệ -*/}
                    <div className="Box-Square">
                    <div className="content">
                        <h1>Trường Đại Học Gia Định</h1>
                        <p><b id="highlight-words">Tên:</b>Trần Đức Tân</p>
                        <p><b id="highlight-words">Lớp:</b> K15DCPM07</p>
                        <p><b id="highlight-words">MSSV:</b>2108110249</p>
                    </div>
                    <div className="contact-icon">
                       {/*-- Icon social Network -*/}
                        <a href="#!"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#!"><i className="fab fa-facebook-messenger"></i></a>
                        <a href="#!"><i className="fa-brands fa-github"></i></a>
                    </div>

                    <div className="Box-Circle">
                        <img src="./img/Tan.jpg" alt="" />
                    </div>
                    </div>
                   {/*-- Thông tin liên hệ -*/}
                    <div className="Box-Square">
                    <div className="content">
                        <h1>Trường Đại Học Gia Định</h1>
                        <p><b id="highlight-words">Tên:</b>Võ Thiện Nhân</p>
                        <p><b id="highlight-words">Lớp:</b> K15DCPM07</p>
                        <p><b id="highlight-words">MSSV:</b>2108110194</p>
                    </div>
                    <div className="contact-icon">
                       {/*-- Icon social Network -*/}
                        <a href="#!"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#!"><i className="fab fa-facebook-messenger"></i></a>
                        <a href="#!"><i className="fa-brands fa-github"></i></a>
                    </div>

                    <div className="Box-Circle">
                        <img src="./img/Nhan.jpg" alt="" />
                    </div>
                    </div>
                   {/*-- Thông tin liên hệ -*/}
                    <div className="Box-Square">
                    <div className="content">
                        <h1>Trường Đại Học Gia Định</h1>
                        <p><b id="highlight-words">Tên:</b>Châu Thị Diễm My</p>
                        <p><b id="highlight-words">Lớp:</b> K15DCPM07</p>
                        <p><b id="highlight-words">MSSV:</b>2108110194</p>
                    </div>
                    <div className="contact-icon">
                       {/*-- Icon social Network -*/}
                        <a href="#!"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#!"><i className="fab fa-facebook-messenger"></i></a>
                        <a href="#!"><i className="fa-brands fa-github"></i></a>
                    </div>

                    <div className="Box-Circle">
                        <img src="./img/My.jpg" alt="" />
                    </div>
                    </div>
                   {/*-- Thông tin liên hệ -*/}
                    <div className="Box-Square">
                    <div className="content">
                        <h1>Trường Đại Học Gia Định</h1>
                        <p><b id="highlight-words">Tên:</b>Trần Khánh Vân</p>
                        <p><b id="highlight-words">Lớp:</b> K15DCPM07</p>
                        <p><b id="highlight-words">MSSV:</b>2108110181</p>
                    </div>
                    <div className="contact-icon">
                       {/*-- Icon social Network -*/}
                        <a href="#!"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#!"><i className="fab fa-facebook-messenger"></i></a>
                        <a href="#!"><i className="fa-brands fa-github"></i></a>
                    </div>

                    <div className="Box-Circle">
                        <img src="./img/Tu.jpg" alt="" />
                    </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="title">
                    <h2>KẾT NỐI VỚI CHÚNG TÔI</h2>
                    </div>
                    <div className="container-footer">
                   {/*-- Icon social Network -*/}
                    <div className="social-icon">
                        <a href="#!">
                        <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#!">
                        <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>

                   {/*-- Input -*/}
                    <div className="input-gmail">
                        <input
                        type="text"
                        placeholder="Nhập Gmail để nhận cẩm nang phong thủy"
                        />
                    </div>

                   {/*-- Button sign up -*/}
                    <div className="btn-sign-up">
                        <a href="#!">Đăng kí</a>
                        <a href="#!">Nhận tư vấn</a>
                    </div>
                    </div>

                   {/*-- infor store -*/}
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