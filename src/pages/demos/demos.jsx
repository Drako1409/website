/* eslint-disable @next/next/no-img-element */
import React from "react";
import particlesConfig from "../../config/particle-config";
import Particles from "react-tsparticles";
import Link from "next/link";
import Split from "../../components/Split";
import DarkTheme from "../../layouts/Dark";
import initIsotope from "../../common/initIsotope";

const Demos = () => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    setTimeout(() => {
      if (pageLoaded) {
        initIsotope();
      }
    }, 1000);
  }, [pageLoaded]);
  return (
    <DarkTheme>
      <style jsx>{`
        .sec-head h3 {
          font-size: 60px;
          font-weight: 700;
          position: relative;
        }

        .sec-head .tbg {
          position: absolute;
          top: -120px;
          left: 0;
          width: 100%;
          font-size: 15vw;
          font-weight: 900;
          line-height: 1;
          background: linear-gradient(
            180deg,
            #fff 0%,
            rgba(17, 18, 21, 0.2) 70%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0.1;
        }

        .sec-head .tbg b {
          font-weight: 500;
          font-size: 12vw;
        }

        .main-content {
          position: relative;
          z-index: 999999;
          background: transparent;
        }

        .masonery .gallery .items {
          margin-top: 30px;
        }

        .masonery .container-fluid {
          padding: 0 100px;
        }

        @media (max-width: 768px) {
          .masonery .container-fluid {
            padding: 0 20px;
          }
          .sec-head h3 {
            font-size: 34px;
          }
          .sec-head {
            margin: 0 auto 30px;
          }
        }

        .masonery .item-img {
          padding: 5px 15px 20px;
          border-radius: 10px;
          background: #18191d;
          position: relative;
        }

        .masonery .item-img .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
        }

        .masonery .item-img .img {
          border-radius: 10px;
          overflow: hidden;
        }

        .masonery .item-img .img img {
          transition: all 0.4s;
        }

        .masonery .item-img .img:hover img {
          transform: scale(1.1);
        }

        .masonery .item-img .cont {
          margin-top: 20px;
          text-align: center;
          position: relative;
        }

        .masonery .item-img .cont h6 {
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 1px;
        }

        .masonery .item-img .cont .sta {
          position: absolute;
          top: -47px;
          left: 50%;
          transform: translateX(-50%);
          padding: 5px 10px;
          border-radius: 30px;
          box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.05);
          font-size: 12px;
        }

        .masonery .item-img .cont .sta.coming {
          background: #03be5f;
        }

        .masonery .item-img .cont .sta.new {
          background: #ff4b4b;
        }
      `}</style>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <header
      >
        <Particles id="particles-js" options={particlesConfig} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="bactxt custom-font valign">
                  <span className="full-width" style={{ color: "transparent" }}>
                    Fandom Capital
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main-content section-padding pb-0">
        <section className="masonery section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head text-center">
                  <h3 className="color-font">
                    Fandom Capital
                  </h3>
                  <span className="tbg">
                    <b>+</b>62
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head text-center">
                  <h3 className="color-font">
                    Our Projects
                  </h3>
                  <span className="tbg">
                    <b></b>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="container-fluid">
            <div className="row">
              <div className="gallery full-width">
                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="https://defiyield.app">
                      <a target="_blank">
                        <div className="img">
                          <img src="/projek/defiyield.jpg" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Defi. Yield</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="https://www.atta.zone/">
                      <a target="_blank">
                        <div className="img">
                          <img src="/projek/atta.jpg" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Atta Zone</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="https://metamalls.io/">
                      <a target="_blank">
                        <div className="img">
                          <img src="/projek/metamall.jpg" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>MetaMall</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="https://www.eizperchain.com/">
                      <a target="_blank">
                        <div className="img">
                          <img src="/projek/eizper.jpg" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Eizper Chain</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="gallery full-width">
                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="https://crayondao.com/">
                      <a target="_blank">
                        <div className="img">
                          <img src="/projek/crayon.jpg" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Crayon DAO</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="https://film.gala.com/">
                      <a target="_blank">
                        <div className="img">
                          <img src="/projek/GalaFilm.jpg" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Gala Film</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="https://www.5ire.org/">
                      <a target="_blank">
                        <div className="img">
                          <img src="/projek/5ire.jpg" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>5ire</h6>
                          <div className="sta new">
                            <span>Blockchain</span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="https://www.kuncicoin.com/">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/kunci.jpg" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>KunciCoin</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="gallery full-width">
                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="https://partisiablockchain.com/">
                      <a target="_blank">
                        <div className="img">
                          <img src="/projek/partisia.jpg" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Partisia</h6>
                          <div className="sta new">
                            <span>Blockchain</span>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="masonery section-padding position-re">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head text-center">
                  <h3 className="color-font">Partnership</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="gallery full-width">
                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="https://www.kuncicoin.com/">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/kunci.jpg" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>KunciCoin</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="https://alphahunt.club/">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/alpha.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Alpha Hunt Capital</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="https://gamefiindonesia.com">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/gamefi.jpg" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>GameFi_id</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="http://www.donutscapital.com/">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/donuts.jpg" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Donuts Capital</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="https://www.web3port.us/">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/web3.jpg" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Web3port</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="https://investorshub.global/">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/global.jpg" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Global Investment hub</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="http://dexcapital.tech/">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/dex.png" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Dex Capital</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 items">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <Link href="https://gotbit.io/">
                      <a target="_blank">
                        <div className="img">
                          <img src="/demo-img/gotbit.jpg" alt="image" />
                        </div>
                        <div className="cont">
                          <h6>Gotbit</h6>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="line top left"></div>
        </section>

        <section className="services bords lficon section-padding position-re">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head  text-center">
                  <h3 className="wow color-font fadeIn" data-wow-delay=".5s">
                    Fandom Capital
                  </h3>
                  <h9 className="wow color-font">
                    Fndom Capital is fast growing INDONESIA Community based Ventured Capital which invest in blockchain and crypto startups at seed stage of their innovation
                  </h9>
                  <h6 className="wow color-font">WE ARE AIM TO BRING FINANCIAL FREESDOM TO OUR INVESTOR</h6>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-paint-bucket"></span>
                  </div>
                  <div className="cont">
                    <h6>Investment</h6>
                    <p>
                      Funding to promising Crypto Project in there seed, private, and strategic rounds
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".7s">
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-phone"></span>
                  </div>
                  <div className="cont">
                    <h6>Partnership</h6>
                    <p>Connect Project with the right partnert to enable steady growth and success</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".9s">
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-display1"></span>
                  </div>
                  <div className="cont">
                    <h6>AMA in Community</h6>
                    <p>Holding an AMA inside the Fandom Capital community lounge</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-diskette"></span>
                  </div>
                  <div className="cont">
                    <h6>Advisory</h6>
                    <p>Reliable and actionable advice for the many unique issues every crypto project encounters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line top right"></div>
        </section>

        <section
          className="call-action section-padding bg-img"
          style={{ backgroundImage: "url(/img/patrn.svg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-9">
                <div className="content sm-mb30">
                  <Split>
                    <h6 className="wow words chars splitting" data-splitting>
                    join Fandom Capital
                    </h6>
                    <h2 className="wow words chars splitting" data-splitting>
                      and Make <br />
                      <b className="back-color">Financial Freedom</b>.
                    </h2>
                  </Split>
                </div>
              </div>

              <div className="col-md-4 col-lg-3 valign">
                <a
                  href="https://t.me/FandomClubXYZ"
                  className="butn bord curve wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <span>Join Now</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DarkTheme>
  );
};

export default Demos;
