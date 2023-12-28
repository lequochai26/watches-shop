'use client'

export default function IntroducePage() {
    // View:
    return (
        <html lang="vi">
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
                        <p><a href="./cart.html">GIỎ HÀNG</a></p>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    </div>

                    {/* <!---------------------------- Menu ------------------------ --> */}
                    <div className="menu">
                    <ul className="sub-menu">
                        <li><a href="/">TRANG CHỦ</a></li>
                        <li>
                        <a
                            style={{
                                color: "#ecad22",
                                fontWeight: "bold",
                                borderBottom: "1px solid #ecad22"
                            }}
                            href="./introduce.html"
                        >GIỚI THIỆU</a>
                        </li>
                        <li><a href="./production.html">SẢN PHẨM</a></li>
                        <li><a href="./contact.html">LIÊN HỆ</a></li>
                    </ul>
                    </div>
                </header>

                {/* <!-- information introducing --> */}
                <div className="container-info">
                    <div className="logo">
                    <h2>ĐÁ PHONG THỦY CHIN GEMS</h2>
                    <img src="./img/logo.png" alt="" />
                    </div>

                    {/* <!-- content --> */}
                    <div className="content">
                    <p>
                        <b id="highlight-words">ĐÁ PHONG THỦY CHIN GEMS</b> là thương hiệu
                        hàng đầu cung cấp các sản phầm trang sức phong thủy : Vòng đeo tay
                        đá, Đây chuyền mặt đá, Nhẫn đá quý, Vật phẩm phong thủy và các sản
                        phẩm khác hợp mệnh.
                    </p>
                    <p>
                        - Với nguyên liệu làm bằng đá tự nhiên
                        <b id="highlight-words">100%</b> và các món đồ trang sức đều đảm bảo
                        cam kết về chất lượng cùng với kinh nghiệm làm việc chuyên nghiệp,
                        lành nghề đảm bảo sẽ mang đến cho khách hàng những sản phẩm có chất
                        lượng tốt, thời gian giao hàng nhanh, giá cả hợp lí đáp ứng yêu cầu
                        cũng như nhu cầu khác nhau của khách hàng.
                    </p>
                    <p>
                        - Thế mạnh làm nên thương hiệu cũng như sự khác biệt của
                        <b id="highlight-words">ĐÁ PHONG THỦY CHIN GEMS</b> chính là : Sự
                        chuyên môn hóa trong từng bộ phận, tính trách nhiệm cáo cùng sự giám
                        sát kỹ thuật trong quá trình làm việc nhằm tạo nên sự hoàn thiện
                        trong từng chi tiết nhỏ nhất của các sản phẩm trang sức phong thủy
                        tại <b id="highlight-words">ĐÁ PHONG THỦY CHIN GEMS</b>. Các sản
                        phảm của <b id="highlight-words">ĐÁ PHONG THỦY CHIN GEMS</b> tất cả
                        đều làm từ đá tự nhiên được trì chú trước khi đem ra trưng bày tại
                        các cửa hàng đảm bảo khi tới tay khách hàng đều là những sản phẩm
                        tốt nhất.
                    </p>
                    <p>
                        Ngoài ra khách hàng hoàn toàn có thể tự mình kiểm định chất lượng
                        sản phẩm của chúng tôi bằng cách trực tiếp đến cửa hàng hoặc có thể
                        kiểm tra sau khi nhận hàng. Nếu phát hiện có những sản phẩm kém chất
                        lượng không được làm từ đá tự nhiên chúng tôi sẽ nhận lại sản phẩm,
                        hoàn lại tiền và haon2 toàn chịu trách nhiệm.
                    </p>
                    <p>
                        Với phương châm : Với phương châm :
                        <b id="highlight-words">{`"Không mang tới cái chúng tôi có - Mang tới cái khách hàng cần"`}</b>và đặt quyền lợi khách hàng lên trên mục đích của bản thân Chin Gems đang không ngừng cố gắng cả về nhân lực ,vật lực, trí lực xậy dựng thương hiệu, niềm tin với khách hàng về những gì sản phẩm của chúng tôi cung cấp. Sự tin tưởng ủng hộ của quí vị khách hàng trong thời gian qua chính là nguồn động viên to lớn cho
                        <b id="highlight-words">Chin Gems</b> ngày càng nộ lực cố gắng.
                        <b id="highlight-words">Chin Gems</b> xin đảm bảo sẽ không ngừng cố
                        gắng và hoàn thiện phục vụ tốt nhất cho khách hàng để luôn nhận được
                        niềm tin xứng đáng của quý khách hàng!
                    </p>

                    <div className="commit">
                        <h4 className="commit-title">-LỜI CAM KẾT-</h4>
                        <div className="commit-logo">
                        <i className="fa-solid fa-circle-check"></i>
                        <span
                            >Chỉ cung cấp đá tự nhiên, mang năng lượng dương tích cực.
                        </span>
                        </div>

                        <div className="commit-logo">
                        <i className="fa-solid fa-circle-check"></i>
                        <span
                            >Chỉ cung cấp đá tự nhiên, mang năng lượng dương tích cực.
                        </span>
                        </div>

                        <div className="commit-logo">
                        <i className="fa-solid fa-circle-check"></i>
                        <span
                            >Chỉ cung cấp đá tự nhiên, mang năng lượng dương tích cực.
                        </span>
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