import Script from "next/script";
import Footer from "@/app/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harry Gu - Creative Designer & Developer | Portfolio - Home",
  description: "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences. Open for freelance and collaborative opportunities.",
};

export default function Archive() {
  return (
    <div className="font-[urbanist] font-semibold bg-[#1C1E1F]">
      <style>{`
        body { background-color: #1C1E1F; }
html, html body { height: auto; }
      `}</style>

      {/* Skip to main content link */}
      <a href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1000] bg-[#CCD4E3] text-black focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>




      {/* Main content */}
      <main id="main-content">
        {/* Graphic Design */}
        <section id="graphicdesign" className="bg-[#1C1E1F] text-[#CCD4E3] z-50">
          {/* Screen reader accessible heading */}
          <h1 className="sr-only">I&apos;m Harry Gu. I&apos;m a UI/UX Designer, Front-End Developer, and Graphic Designer</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-col-4 drop-shadow-[0_10px_8px_rgba(0,0,0,0.05)]">
            <div className="col-span-2 md:col-span-1 flex justify-center items-center transition bg-grey-500 shadow-xl min-h[60px] text-center">
              <h2 className="font-[urbanist] inline-flex font-extrabold text-xl p-11">Graphic Design</h2>
            </div>

            <a className="mb-2 relative group sm:min-h-[150px] h-fit hover:shadow-xl" href="/reentryreimagined-brochure">
              <img className="" src="/images/ReentryReimagined-Brochure/1.jpg"
                alt="Hand holding Reentry Reimagined brochure with city skyline illustration, text reads 'Empowering Second Chances, Supporting Strong Futures'" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"></div>
              <div className="text-lg font-bold absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                Reentry Reimagined
                <br />
                Brochure
              </div>
              <p className="px-1 leading-tight text-center md:hidden">
                Reentry Reimagined Brochure
              </p>
            </a>

            <a className="mb-2 relative group sm:min-h-[150px] h-fit hover:shadow-xl" href="/reentryguide-gr-flyer">
              <img className="" src="/images/ReentryGuide-GR/flyer-thumbnail.png"
                alt="White flyer on wooden table with text 'Do you need Food, Clothing, Hygiene, Healthcare etc.?' and QR code" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"></div>
              <div className="text-lg font-bold absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                &quot;ReentryGuide GR&quot;
                <br />
                Print Marketing Materials
              </div>
              <p className="px-1 leading-tight text-center md:hidden">
                &quot;ReentryGuide GR&quot; flyer
              </p>
            </a>

            <a className="mb-2 relative group rounded-xl sm:min-h-[150px] h-fit hover:shadow-xl" href="/mixtape">
              <img className="" src="/images/miscere.jpeg"
                alt="Circular yellow logo design with silhouette of person and text 'MISCERE' in geometric font" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"></div>
              <div className="text-lg font-bold absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                Mixtape
                Packaging
              </div>
              <p className="px-1 leading-tight text-center md:hidden">
                Mixtape
                Packaging
              </p>
            </a>

            <a className="mb-2 relative group sm:min-h-[150px] h-fit hover:shadow-xl"
              href="/impact-report-usletter-Dec4.pdf">
              <img className="" src="/images/impact_report/thumbnail.png"
                alt="Teal fiscal year report cover featuring a donation QR code." />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"></div>
              <div className="text-lg font-bold absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                Exodus Place 2024
                <br />
                Impact Report
              </div>
              <p className="px-1 leading-tight text-center md:hidden">
                Exodus Place 2024 Impact Report
              </p>
            </a>

            <a className="mb-2 relative group col-span-2 sm:min-h-[150px] h-fit hover:shadow-xl"
              href="/e-community-service-logo">
              <img className="" src="/trademarks/e-community-service.png"
                alt="Logo with blue and green gradient heart icon with handshake symbol and text 'E-COMMUNITY SERVICE' in white uppercase letters" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="text-lg font-bold absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                e-community-service.org logo
              </div>
              <p className="px-1 text-center md:hidden">
                e-community-service.org logo
              </p>
            </a>
          </div>
        </section>

        {/* Drawing Thumbnails */}
        <section id="drawing" className="bg-veryLightGray">
          {/* Disable swiper on mobile, use a separate 1 column view instead */}
          <div className="hidden md:flex overflow-hidden">
            <div className="thumbContainer mx-auto">
              <div className="my-32 py-2em">
                <div className="text-veryDarkGray max-w-[19rem] sm:max-w-[24rem] md:max-w-[44rem] lg:max-w-[65rem] xl:max-w-[85rem] m-auto">
                  <h2 className="font-[urbanist] pb-6 pl-1 font-extrabold text-xl">Drawing</h2>
                  <div className="align-baseline grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 md:gap-x-9 xl:gap-x-12 gap-y-28 md:gap-y-6">
                    <div className="pswp-gallery row-span-2" id="gallery">
                      <div className="pswp-gallery__item">
                        <a href="/images/victory.jpeg" data-pswp-width="2877" data-pswp-height="3819" target="_blank">
                          <img className="transition hover:scale-105 object-cover w-full border-8 border-white rounded-lg shadow-xl min-h[50px]"
                            src="/images/victory.jpeg"
                            alt="Graphite drawing of airplane dropping small human figures instead of bombs over a city skyline" />
                        </a>
                        <div className="pswp-caption-content">
                          <b>Victory&quot;, Graphite on Paper, 2022.4</b>
                          <br />24 in * 18 in <br />
                          <br />I name this &quot;Victory&quot;, because I think true victory comes from peace, not war. <br />
                          <br />Inspired by the Russian invasion of Ukraine, I decided to do anti-war drawings for my final
                          project during the 2022 spring semester. However, this drawing is not just a protest against this
                          specific conflict, but all forms of unjust warfare.<br />
                          <br />This drawing was exhibited at ArtPrize 2023 and selected by Cultivate Art Magazine, which can be seen{' '}
                          <a href="https://issuu.com/cultivategrandrapids/docs/2023_4-8_final2" target="_blank"><b><u>here.</u></b></a>
                          <br />
                        </div>
                      </div>
                    </div>

                    <div className="pswp-gallery" id="gallery">
                      <div className="pswp-gallery__item">
                        <a href="/images/Gaia.jpeg" data-pswp-width="2008" data-pswp-height="1785" target="_blank">
                          <img className="transition hover:scale-105 object-cover w-full border-8 border-white rounded-lg shadow-xl min-h[50px]"
                            src="/images/Gaia.jpeg"
                            alt="Graphite and color pencil drawing of person lying on platform with red blood flowing down as waterfall into landscape below" />
                        </a>
                        <div className="pswp-caption-content"><b>&quot;Gaia&quot;, Graphite &amp; Color Pencil on Paper, 2023.4</b><br />22 in *
                          25 in <br /> <br />This is about non-violence movements. <br /> <br /> In this drawing, She chose to use a
                          non-violent way against violence. She was not even wearing any protection. She died. But her blood
                          became a waterfall and nourished a beautiful landscape. <br /> <br /> This drawing is partially
                          inspired by a picture of Gaia from a Greek mythology book, that Gaia&apos;s body becomes mountains and
                          rivers. It&apos;s also inspired by several historical events as well. </div>
                      </div>
                    </div>

                    <div className="pswp-gallery" id="gallery">
                      <div className="pswp-gallery__item">
                        <a href="/images/Rahab.jpeg" data-pswp-width="2151" data-pswp-height="1596" target="_blank">
                          <img className="transition hover:scale-105 object-cover w-full border-8 border-white rounded-lg shadow-xl min-h[50px]"
                            src="/images/Rahab.jpeg"
                            alt="White charcoal drawing on black paper showing storefront with Chinese characters 'SPA' and figures in urban night scene" />
                        </a>
                        <div className="pswp-caption-content"><b>&quot;Prostitute Rehab Meets Two Israeli Spies&quot;, White Charcoal on
                          Black paper, 2023.4</b><br />18 in * 24 in<br /> <br />However the cultural context is not the ancient
                          middle east, but modern China instead. </div>
                      </div>
                    </div>

                    {/* photoswipe container */}
                    <div className="pswp-gallery" id="gallery">
                      <div className="pswp-gallery__item">
                        <a href="/images/ship.jpg" data-pswp-width="4032" data-pswp-height="3024" target="_blank">
                          <img className="transition hover:scale-105 object-cover w-full border-8 border-white rounded-lg shadow-xl min-h[50px]"
                            src="/images/ship.jpg" alt="Graphite drawing of sinking ship tilted in ocean water" />
                        </a>
                        <div className="pswp-caption-content"><b>Unnamed, Graphite on Paper, 2022.4</b><br />18 in x 24 in</div>
                      </div>
                    </div>

                    <div className="pswp-gallery" id="gallery">
                      <div className="pswp-gallery__item">
                        <a href="/images/tank.jpg" data-pswp-width="4032" data-pswp-height="3024" target="_blank">
                          <img className="transition hover:scale-105 object-cover w-full border-8 border-white rounded-lg shadow-xl min-h[50px]"
                            src="/images/tank.jpg" alt="Charcoal drawing of military tank in dark wooded forest setting" />
                        </a>
                        <div className="pswp-caption-content"><b>Unnamed, Charcoal on Paper, 2022.4</b><br />18 in x 24 in</div>
                      </div>
                    </div>

                    <div className="pswp-gallery" id="gallery">
                      <div className="pswp-gallery__item">
                        <a href="/images/rifle.jpg" data-pswp-width="4032" data-pswp-height="3024" target="_blank">
                          <img className="transition hover:scale-105 object-cover w-full border-8 border-white rounded-lg shadow-xl min-h[50px]"
                            src="/images/rifle.jpg"
                            alt="Graphite drawing of AK-47 rifle with barrel bent upward by three blooming roses" />
                        </a>
                        <div className="pswp-caption-content"><b>&quot;Aaron&apos;s Rifle&quot;, Graphite on Paper, 2022.4</b><br />18 in x 24 in</div>
                      </div>
                    </div>

                    <div className="pswp-gallery" id="gallery">
                      <div className="pswp-gallery__item">
                        <a href="/images/equality.jpeg" data-pswp-width="4032" data-pswp-height="3024" target="_blank">
                          <img className="transition hover:scale-105 object-cover w-full border-8 border-white rounded-lg shadow-xl min-h[50px]"
                            src="/images/equality.jpeg"
                            alt="Graphite drawing of two gravestones side by side, one wearing business suit and tie, the other in tattered homeless clothing" />
                        </a>
                        <div className="pswp-caption-content"><b>Equality, Graphite on Paper, 2023.12</b><br />18 in x 24 in</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End desktop swiper container */}

          {/* Mobile only swiper */}
          <div className="p-7 py-32 pb-[6em] pt-[4em] md:hidden overflow-hidden">
            <div className="text-veryDarkGray max-w-[21rem] sm:max-w-[26rem] m-auto">
              <h2 className="font-[urbanist] pb-6 pl-1 font-extrabold text-xl">Drawing</h2>
              <div className="swiper-container">
                <div className="swiper-cards">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide mobile-frame-container shadow-xl">
                      <div className="pswp-gallery" id="gallery">
                        <div className="pswp-gallery__item">
                          <a href="/images/Gaia.jpeg" data-pswp-width="2008" data-pswp-height="1785" target="_blank">
                            <img className="transition object-cover w-full border-8 border-white rounded-lg min-h[50px]"
                              src="/images/Gaia.jpeg"
                              alt="Graphite and color pencil drawing of person lying on platform with red blood flowing down as waterfall into landscape below" />
                          </a>
                          <div className="pswp-caption-content"><b>&quot;Gaia&quot;, Graphite &amp; Color Pencil on Paper, 2023.4</b><br />22 in
                            * 25 in <br /> <br />This is about non-violence movements. <br /> <br /> In this drawing, She chose to
                            use a non-violent way against violence. She was not even wearing any protection. She died. But
                            her blood became a waterfall and nourished a beautiful landscape. <br /> <br /> This drawing is
                            partially inspired by a picture of Gaia from a Greek mythology book, that Gaia&apos;s body becomes
                            mountains and rivers. It&apos;s also inspired by several historical events as well. </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide mobile-frame-container shadow-xl">
                      <div className="pswp-gallery row-span-2" id="gallery">
                        <div className="pswp-gallery__item">
                          <a href="/images/victory.jpeg" data-pswp-width="2877" data-pswp-height="3819" target="_blank">
                            <img className="transition object-cover w-full border-8 border-white rounded-lg min-h[50px]"
                              src="/images/victory.jpeg"
                              alt="Graphite drawing of airplane dropping small human figures instead of bombs over a city skyline" />
                          </a>
                          <div className="pswp-caption-content"><b>Victory&quot;, Graphite on Paper, 2022.4</b>
                            <br />24 in * 18 in <br />
                            <br />I name this &quot;Victory&quot;, because I think true victory comes from peace, not war. <br />
                            <br />Inspired by the Russian invasion of Ukraine, I decided to do anti-war drawings for my final
                            project during the 2022 spring semester. However, this drawing is not just a protest against
                            this specific conflict, but all forms of unjust warfare. <br />
                            <br />This drawing was exhibited at ArtPrize 2023 and selected by Cultivate Art Magazine, which
                            can be seen{' '}
                            <a href="https://issuu.com/cultivategrandrapids/docs/2023_4-8_final2" target="_blank"><b><u>here.</u></b></a>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide mobile-frame-container shadow-xl">
                      <div className="pswp-gallery" id="gallery">
                        <div className="pswp-gallery__item">
                          <a href="/images/Rahab.jpeg" data-pswp-width="2151" data-pswp-height="1596" target="_blank">
                            <img className="transition object-cover w-full border-8 border-white rounded-lg min-h[50px]"
                              src="/images/Rahab.jpeg"
                              alt="White charcoal drawing on black paper showing storefront with Chinese characters 'SPA' and figures in urban night scene" />
                          </a>
                          <div className="pswp-caption-content"><b>&quot;Prostitute Rehab Meets Two Israeli Spies&quot;, White Charcoal on
                            Black Paper, 2023.4</b><br />18 in * 24 in<br /> <br />However the cultural context is not the
                            ancient middle east, but modern China instead. </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide mobile-frame-container shadow-xl">
                      <div className="pswp-gallery" id="gallery">
                        <div className="pswp-gallery__item">
                          <a href="/images/ship.jpg" data-pswp-width="4032" data-pswp-height="3024" target="_blank">
                            <img className="transition object-cover w-full border-8 border-white rounded-lg min-h[50px]"
                              src="/images/ship.jpg" alt="Graphite drawing of sinking ship tilted in ocean water" />
                          </a>
                          <div className="pswp-caption-content"><b>Unnamed, Graphite on Paper, 2022.4</b><br />18 in x 24 in</div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide mobile-frame-container shadow-xl">
                      <div className="pswp-gallery" id="gallery">
                        <div className="pswp-gallery__item">
                          <a href="/images/tank.jpg" data-pswp-width="4032" data-pswp-height="3024" target="_blank">
                            <img className="transition object-cover w-full border-8 border-white rounded-lg min-h[50px]"
                              src="/images/tank.jpg" alt="Charcoal drawing of military tank in dark wooded forest setting" />
                          </a>
                          <div className="pswp-caption-content"><b>Unnamed, Charcoal on Paper, 2022.4</b><br />18 in x 24 in</div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide mobile-frame-container shadow-xl">
                      <div className="pswp-gallery" id="gallery">
                        <div className="pswp-gallery__item">
                          <a href="/images/rifle.jpg" data-pswp-width="4032" data-pswp-height="3024" target="_blank">
                            <img className="transition object-cover w-full border-8 border-white rounded-lg min-h[50px]"
                              src="/images/rifle.jpg" alt="a rifle but the barrel bent by rose flower" />
                          </a>
                          <div className="pswp-caption-content"><b>&quot;Aaron&apos;s Rifle&quot;, Graphite on Paper, 2022.4</b><br />18 in x 24 in</div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide mobile-frame-container shadow-xl">
                      <div className="pswp-gallery" id="gallery">
                        <div className="pswp-gallery__item">
                          <a href="/images/equality.jpeg" data-pswp-width="4032" data-pswp-height="3024" target="_blank">
                            <img className="transition hover:scale-105 object-cover w-full border-8 border-white rounded-lg shadow-xl min-h[50px]"
                              src="/images/equality.jpeg"
                              alt="two grave stones, one dressed like business man and one dressed like homeless" />
                          </a>
                          <div className="pswp-caption-content"><b>Equality, Graphite on Paper, 2023.12</b><br />18 in x 24 in</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-center font-bold text-gray-600 md:text-sm p-2">
                    Swipe to browse through the images.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Script id="swiper-init" strategy="afterInteractive">{`
        var swiper = new Swiper(".swiper-walls", {
          loopedSlides: 2,
          loop: false,
          slidesPerView: "auto",
          freeMode: false,
          spaceBetween: 0,
          preventInteractionOnTransition: true,
          mousewheel: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });

        var swiper2 = new Swiper(".swiper-cards", {
          effect: "cards",
          grabCursor: true,
        });

        var thumb = document.querySelectorAll(".thumbContainer");
        thumb.forEach(function (image, index) {
          var delay = index * 90;
          image.classList.add("fadeInSlide");
          image.style.animationDelay = delay + "ms";
        });
      `}</Script>

      <Script id="photoswipe-init" strategy="afterInteractive">{`
        (async function() {
          const { default: PhotoSwipeLightbox } = await import('https://cdn.jsdelivr.net/npm/photoswipe@5.3.0/dist/photoswipe-lightbox.esm.js');
          const { default: PhotoSwipeDynamicCaption } = await import('https://unpkg.com/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.esm.js');

          const smallScreenPadding = { top: 0, bottom: 0, left: 0, right: 0 };
          const largeScreenPadding = { top: 30, bottom: 30, left: 0, right: 0 };
          const lightbox = new PhotoSwipeLightbox({
            gallerySelector: '#gallery',
            childSelector: '.pswp-gallery__item',
            paddingFn: (viewportSize) => {
              return viewportSize.x < 700 ? smallScreenPadding : largeScreenPadding;
            },
            pswpModule: () => import('https://cdn.jsdelivr.net/npm/photoswipe@5.3.0/dist/photoswipe.esm.js')
          });

          const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
            mobileLayoutBreakpoint: 700,
            type: 'auto',
            mobileCaptionOverlapRatio: 1
          });

          lightbox.init();
        })();
      `}</Script>

    </div>
  );
}
