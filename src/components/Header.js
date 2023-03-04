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
    <div class="tw-overflow-hidden mt-3 mb-5">
        <a href="/">
          <img
            src="https://res.cloudinary.com/phuong-fpoly/image/upload/v1677753097/Project%20ECMAScript/Portfolio/logo_ze5we1.png"
            alt="PhuongDev's Logo" class="tw-w-[200px] tw-h-[90px]"
          />
        </a>
        </div>
        <div class="tw-mt-9">
          <ul class="tw-flex tw-ml-auto">
           ${Nav()}
           <li><a href="/login"><i class="bi bi-person-circle tw-text-[22px] tw-pl-3 transition-15s tw-text-[#222] hover:tw-text-[#fd4312]"></i></a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  </div>`;
};

export default Header;
