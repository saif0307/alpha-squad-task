const Footer = () => {
  return (
    <footer className="flex md:flex-row p-6 md:p-0 flex-col-reverse gap-3 w-full border border-bor-color bg-footer-grey md:h-96 justify-evenly items-center">
      <div className="md:w-5/12 flex  md:flex-col gap-10 items-center">
        <div>
          <img alt="logo" src="./images/logo.png" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-lit-grey">Copyright © 2021 WEBBER.</p>
          <p className="text-sm text-lit-grey">All rights reserved</p>
        </div>
        <div className="flex gap-8">
            <a href='https://www.twitter.com'><img alt="twitter" src="./images/twitter.png" /></a>
            <a href='https://www.youtube.com'><img alt="youtube" src="./images/youtube.png" /></a>
        </div>
      </div>
      <div className="flex w-full justify-evenly  text-base ">
        <div className="flex flex-col gap-6">
            <h2 className="md:text-xl font-medium text-plan-color">Company</h2>
          <ul className="flex-col flex gap-3 text-base font-normal text-plan-color">
              <li><a href="#">About us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Testimonials</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
            <h2 className="md:text-xl font-medium text-plan-color">Support</h2>
          <ul className="flex-col flex gap-3 text-base font-normal text-plan-color">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Status</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
            <h2 className="md:text-xl font-medium text-plan-color">Get Updates and more</h2>
          <form>
          <input placeholder="Your email address" className="h-10 text-sm md:w-52 box-border outline-none p-2"/>
          <button className="h-10 md:w-10 bg-gradient-to-r from-gd-blue1 via-gd-blue2  to-gd-blue3 text-lg"><img className="mx-auto" src="./images/arrow.png"/></button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
