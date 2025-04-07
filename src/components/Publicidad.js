const Publicidad = () => { 
    return (

<section>
<div class="bg-holder" style="background-image:url(assets/img/gallery/cta-one-bg.png);background-position:center;background-size:cover;">
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="col-xxl-10">
      <div class="card card-span shadow-warning" style="border-radius: 35px;">
        <div class="card-body py-5">
          <div class="row justify-content-evenly">
            <div class="col-md-3">
              <div class="d-flex d-md-block d-xl-flex justify-content-evenly justify-content-lg-between"><img src="assets/img/icons/discounts.png" width="100" alt="..." />
                <div class="d-flex d-lg-block d-xl-flex flex-center">
                  <h2 class="fw-bolder text-1000 mb-0 text-gradient">Daily<br class="d-none d-md-block" />Discounts </h2>
                </div>
              </div>
            </div>
            <div class="col-md-3 hr-vertical">
              <div class="d-flex d-md-block d-xl-flex justify-content-evenly justify-content-lg-between"><img src="assets/img/icons/live-tracking.png" width="100" alt="..." />
                <div class="d-flex d-lg-block d-xl-flex flex-center">
                  <h2 class="fw-bolder text-1000 mb-0 text-gradient">Live Tracking</h2>
                </div>
              </div>
            </div>
            <div class="col-md-3 hr-vertical">
              <div class="d-flex d-md-block d-xl-flex justify-content-evenly justify-content-lg-between"><img src="assets/img/icons/quick-delivery.png" width="100" alt="..." />
                <div class="d-flex d-lg-block d-xl-flex flex-center">
                  <h2 class="fw-bolder text-1000 mb-0 text-gradient">Quick Delivery </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row flex-center mt-md-8">
    <div class="col-lg-5 d-none d-lg-block" style="margin-bottom: -122px;"> <img class="w-100" src="assets/img/gallery/phone-cta-one.png" alt="..." /></div>
    <div class="col-lg-5 mt-7 mt-md-0">
      <h1 class="text-primary">Install the app</h1>
      <p>It's never been easier to order food. Look for the finest <br class="d-none d-xl-block" />discounts and you'll be lost in a world of delectable food.</p><a class="pe-2" href="https://www.apple.com/app-store/" target="_blank"><img src="assets/img/gallery/app-store.svg" width="160" alt="" /></a><a href="https://play.google.com/store/apps" target="_blank"><img src="assets/img/gallery/google-play.svg" width="160" alt="" /></a>
    </div>
  </div>
</div>
</section>
    );
}

export default Publicidad;