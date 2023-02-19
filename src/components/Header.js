import Nav from "./Nav";
const Header = () => {
  return /*html*/ `
  <!-- WRAP CONTAINER -->
  <div class="wrap-container">
    <!-- WRAP HEADER -->
    <div class="tw-bg-[#f5edd8]">
  <header class="site-header" id="site-header">
    <nav class="site-nav">
      <div class="container tw-flex tw-justify-between">
        <a href="/">
          <img
            src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1675065205/Project%20ECMAScript/Portfolio/main-logo_e3cxnc.png"
            alt="PhuongDev's Logo"
            class="tw-w-[180px] tw-h-[100px] mt-1"
          />
        </a>
        <div class="navbar mt-4">
          <ul class="tw-flex tw-ml-auto">
           ${Nav()}
          </ul>
        </div>
      </div>
    </nav>
  </header>
  </div>`;
};

export default Header;
