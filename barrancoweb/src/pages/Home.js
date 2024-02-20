const Home = () => {
  return (
   

<div>

  <header class="header-global">
    <nav id="navbar-main" class="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light">
      <div class="container">       
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global"
          aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbar_global">
          <div class="navbar-collapse-header">
            <div class="row">
              <div class="col-6 collapse-brand">
                <a href="#" target="_blank" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon">
                    <i class="fa fa-cloud-download mr-2"></i>
                  </span>
                  <span class="nav-link-inner--text">Download CV</span>
                </a>
              </div>
              <div class="col-6 collapse-close">
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar_global"
                  aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
            <li class="nav-item dropdown">
              <a href="#" class="nav-link" role="button">
                {/* <!-- <span class="nav-link-inner--text">Portugués</span> --> */}
              </a>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="nav-link" role="button">
                {/* <!-- <span class="nav-link-inner--text">Español</span> --> */}
              </a>
            </li>
          </ul>
          <ul class="navbar-nav align-items-lg-center ml-lg-auto">

            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="https://www.linkedin.com/in/carlosbarrancosoto/" target="_blank"
                data-toggle="tooltip" rel="noreferrer" title="LinkedIn">
                <i class="fa fa-linkedin-square"></i>
                <span class="nav-link-inner--text d-lg-none">LinkedIn</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-icon" href="https://github.com/barrancocarlos" target="_blank"
                data-toggle="tooltip" title="Github" rel="noreferrer">
                <i class="fa fa-github"></i>
                <span class="nav-link-inner--text d-lg-none">Github</span>
              </a>
            </li>
            <li class="nav-item d-none d-lg-block ml-lg-4">
              <a href="./assets/img/theme/CarlosBarrancoSotoCV-english.pdf" download="CarlosBarrancoSotoCV" class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-cloud-download mr-2"></i>
                </span>
                <span class="nav-link-inner--text">Download CV</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>



    {/* <!-- Hero --> */}
    <div class="position-relative">
      <section class="section section-lg">
        <div class="container">
          <div class="row row-grid justify-content-center">
            <div class="col-lg-8 text-center">
              <h1 class="display-3 hero-title">Carlos Barranco Soto
                <span class="hero-subtitle">Web Developer</span>
              </h1>
              <p class="lead">Web Designer and Developer with more than 6 years of experience and participation in more
                than 30 web projects with different technologies, including Python`s Django Framework and the Node.js
                MERN stack </p>
              <div class="btn-wrapper">
                <a href="#projects" class="btn btn-primary mb-3 mb-sm-0">See Projects</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* <!-- Hero --> */}

    {/* <!-- Tech --> */}
    <section class="section section-lg pt-lg-0 tech">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <img src="assets/img/theme/python-logo.png" class="img-code"/>
                    <h6 class="text-primary text-uppercase">Python</h6>
                    <p class="description mt-3">More than 2 years of experience using Python`s Django Framework, with
                      DRF, MySQL and PostgreSQL</p>
                    <div>
                      <span class="badge badge-pill badge-primary">Django</span>
                      <span class="badge badge-pill badge-primary">DRF</span>
                      <span class="badge badge-pill badge-primary">Python</span>
                    </div>
                    <a href="#" class="btn btn-primary mt-4">Learn more</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <img src="assets/img/theme/js-logo.png" class="img-code"/>
                    <h6 class="text-js text-uppercase">JavaScript</h6>
                    <p class="description mt-3">More than 2 years of experience using Node.js backend framework
                      Express.js with React, Angular and MongoDB.</p>
                    <div>
                      <span class="badge badge-pill badge-js">Express.js</span>
                      <span class="badge badge-pill badge-js">React</span>
                      <span class="badge badge-pill badge-js">Angular</span>
                    </div>
                    <a href="#" class="btn btn-js mt-4">Learn more</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <img src="assets/img/theme/web-logo.png" class="img-code"/>
                    <h6 class="text-warning text-uppercase">Web Design</h6>
                    <p class="description mt-3">More than 6 years of experience using Wordpress, Html/CSS, Bootstrap and
                      Photoshop. </p>
                    <div>
                      <span class="badge badge-pill badge-warning">Wordpress</span>
                      <span class="badge badge-pill badge-warning">Bootstrap</span>
                      <span class="badge badge-pill badge-warning">Html/CSS</span>
                    </div>
                    <a href="#" class="btn btn-warning mt-4">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Tech --> */}

    {/* <!-- Portfolio --> */}
    <section class="section section-lg" id="projects">
      <div class="row justify-content-center text-center">
        <div class="col-lg-12">
          <h2 class="display-3">Portfolio</h2>
          <p class="lead text-muted hero">This is a list of my latest projects. Dummy data was used to protect the
            client`s privacy</p>
        </div>
      </div>
      <div class="container">
        {/* <!-- Bliss --> */}
        <div class="row row-grid row-portfolio align-items-center">
          <div class="col-md-6">
            <div class="pr-md-5">
              <h3>Bliss Group</h3>
              <p>Progressive Web App for Wellness Coach. Online courses and workshops.</p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-bliss mr-3">
                        <i class="ni ni-settings-gear-65"></i>
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0">Django, React (with Ionic), PostgreSQL</h6>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-bliss mr-3">
                        <i class="ni ni-square-pin"></i>
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0">United States</h6>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-bliss mr-3">
                        <i class="ni ni-calendar-grid-58"></i>
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0">2021</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <a href="#blissModal" data-toggle="modal"><img src="assets/img/theme/bliss.jpg" class="img-portfolio"/></a>
          </div>
          {/* <!-- Modal --> */}
          <div class="modal fade" id="blissModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <img src="assets/img/theme/bliss.jpg" class="img-portfolio"/>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
        </div>
        {/* <!-- Bliss --> */}
        {/* <!-- Arc --> */}
        <div class="row row-grid row-portfolio align-items-center">
          <div class="col-md-6">
            <a href="#arcModal" data-toggle="modal"><img src="assets/img/theme/arc.jpg" class="img-portfolio"/></a>
          </div>
          {/* <!-- Modal --> */}
          <div class="modal fade" id="arcModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <img src="assets/img/theme/arc.jpg" class="img-portfolio"/>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
          <div class="col-md-6 portfolio-pair">
            <div class="pr-md-5">
              <h3>Bonus Book</h3>
              <p>HRM system for oilfield and gas process equipment company.</p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-arc mr-3">
                        <i class="ni ni-settings-gear-65"></i>
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0">Django, Angular, PostgreSQL</h6>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-arc mr-3">
                        <i class="ni ni-square-pin"></i>
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0">United States</h6>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-arc mr-3">
                        <i class="ni ni-calendar-grid-58"></i>
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0">2020</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Arc --> */}
        {/* <!-- Survey --> */}
        <div class="row row-grid row-portfolio align-items-center">
          <div class="col-md-6">
            <div class="pr-md-5">
              <h3>Survey</h3>
              <p>App for Model Agency. Survey for customer satisfaction</p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-arc mr-3">
                        <i class="ni ni-settings-gear-65"></i>
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0">Express.js, React, MongoDB</h6>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-arc mr-3">
                        <i class="ni ni-square-pin"></i>
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0">Colombia</h6>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-arc mr-3">
                        <i class="ni ni-calendar-grid-58"></i>
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0">2019</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <a href="#surveyModal" data-toggle="modal"><img src="assets/img/theme/survey.jpg" class="img-portfolio"/></a>
          </div>
          {/* <!-- Modal --> */}
          <div class="modal fade" id="surveyModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <img src="assets/img/theme/survey.jpg" class="img-portfolio"/>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
        </div>
        {/* <!-- Survey --> */}
        {/* <!-- Models --> */}
        <div class="row row-grid row-portfolio align-items-center">
          <div class="col-md-6">
            <a href="#modelsModal" data-toggle="modal"><img src="assets/img/theme/models.jpg" class="img-portfolio"/></a>
          </div>
          {/* <!-- Modal --> */}
          <div class="modal fade" id="modelsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <img src="assets/img/theme/models.jpg" class="img-portfolio"/>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
          <div class="col-md-6 portfolio-pair">
            <div class="pr-md-5">
              <h3>CRM</h3>
              <p>CRM system for Model Agency.</p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-bliss mr-3">
                        <i class="ni ni-settings-gear-65"></i>
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0">Django, Angular, PostgreSQL</h6>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-bliss mr-3">
                        <i class="ni ni-square-pin"></i>
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0">Colombia</h6>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-bliss mr-3">
                        <i class="ni ni-calendar-grid-58"></i>
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0">2018</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Models --> */}
        {/* <!-- Tickets --> */}
        <div class="row row-grid row-portfolio align-items-center">
          <div class="col-md-6">
            <div class="pr-md-5">
              <h3>Event Tickets</h3>
              <p>Event Management App. Ticket purchase for conferences</p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-bliss mr-3">
                        <i class="ni ni-settings-gear-65"></i>
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0">Express.js, MongoDB</h6>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-bliss mr-3">
                        <i class="ni ni-square-pin"></i>
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0">Colombia</h6>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-bliss mr-3">
                        <i class="ni ni-calendar-grid-58"></i>
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0">2017</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <a href="#ticketsModal" data-toggle="modal"><img src="assets/img/theme/tickets.jpg"
                class="img-portfolio"/></a>
          </div>
          {/* <!-- Modal --> */}
          <div class="modal fade" id="ticketsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <img src="assets/img/theme/tickets.jpg" class="img-portfolio"/>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
        </div>
        {/* <!-- Tickets --> */}
        {/* <!-- Mooncrew --> */}
        <div class="row row-grid row-portfolio align-items-center">
          <div class="col-md-6">
            <a href="#mooncrewModal" data-toggle="modal"><img src="assets/img/theme/mooncrew.jpg"
                class="img-portfolio"/></a>
          </div>
          {/* <!-- Modal --> */}
          <div class="modal fade" id="mooncrewModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <img src="assets/img/theme/mooncrew.jpg" class="img-portfolio"/>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
          <div class="col-md-6 portfolio-pair">
            <div class="pr-md-5">
              <h3>Mooncrew</h3>
              <p>Events Website. Users could post concerts and cultural events.</p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-bliss mr-3">
                        <i class="ni ni-settings-gear-65"></i>
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0">Wordpress, Custom Post Types, Frontend Post Submissions.</h6>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-bliss mr-3">
                        <i class="ni ni-square-pin"></i>
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0">Australia</h6>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-bliss mr-3">
                        <i class="ni ni-calendar-grid-58"></i>
                      </div>
                    </div>
                    <div>
                      <h6 class="mb-0">2016</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Mooncrew --> */}
     </div>
    
 
    </section>

    {/* <!-- Wordpress Portfolio -->    */}

    <section id="portfolio" class="portfolio">
      <div class="container" data-aos="fade-up">

        <div class="row justify-content-center text-center">
          <div class="col-lg-12">
            <h2 class="display-3">Web Design</h2>
            <p class="lead text-muted hero">E-commerce and Corporate Websites</p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">E-commerce</li>
              <li data-filter=".filter-card">Corporate</li>
              <li data-filter=".filter-web">Personal</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/theme/patricia-prev.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Patricia Arceneaux</h4>
                <p>Wellness Coach</p>
                <div class="portfolio-links">
                  <a href="assets/img/theme/patricia.png" data-gall="portfolioGallery" class="venobox"><i class="fa fa-eye mr-2"></i></a>                  
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/theme/ricarda-prev.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Ricarda Pantoja</h4>
                <p>Online Store</p>
                <div class="portfolio-links">
                  <a href="assets/img/theme/ricarda.jpeg" data-gall="portfolioGallery" class="venobox"><i class="fa fa-eye mr-2"></i></a>                 
                </div>
              </div>
            </div>
          </div>        

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/theme/ortho.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Orthocenter</h4>
                <p>Dentist Office</p>
                <div class="portfolio-links">
                  <a href="assets/img/theme/ortho.jpg" data-gall="portfolioGallery" class="venobox"><i class="fa fa-eye mr-2"></i></a>                 
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/theme/miversion.png" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Mi Version Fit</h4>
                <p>Fitness Coach</p>
                <div class="portfolio-links">
                  <a href="assets/img/theme/miversion.png" data-gall="portfolioGallery" class="venobox"><i class="fa fa-eye mr-2"></i></a>                  
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/theme/arc2-prev.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>ARC Fabrication</h4>
                <p>Industrial Equipment</p>
                <div class="portfolio-links">
                  <a href="assets/img/theme/arc2.png" data-gall="portfolioGallery" class="venobox"><i class="fa fa-eye mr-2"></i></a>                 
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/theme/autotronica-prev.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Autotronica</h4>
                <p>Car Shop</p>
                <div class="portfolio-links">
                  <a href="assets/img/theme/autotronica.jpg" data-gall="portfolioGallery" class="venobox"><i class="fa fa-eye mr-2"></i></a>                 
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/theme/harmonia.png" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Harmonia Roses</h4>
                <p>Roses that last</p>
                <div class="portfolio-links">
                  <a href="assets/img/theme/harmonia.png" data-gall="portfolioGallery" class="venobox"><i class="fa fa-eye mr-2"></i></a>                 
                </div>
              </div>
            </div>
          </div> 

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/theme/genia-prev.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Genia Creativa</h4>
                <p>Coach</p>
                <div class="portfolio-links">
                  <a href="assets/img/theme/genia.png" data-gall="portfolioGallery" class="venobox"><i class="fa fa-eye mr-2"></i></a>                  
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/theme/tosaka-prev.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Tosaka</h4>
                <p>Toyota Car Products</p>
                <div class="portfolio-links">
                  <a href="assets/img/theme/tosaka.jpg" data-gall="portfolioGallery" class="venobox"><i class="fa fa-eye mr-2"></i></a>                 
                </div>
              </div>
            </div>
          </div> 

         




        </div>

      </div>
    </section>

 {/* <!-- Wordpress Portfolio --> */}

{/* <!-- Github Projects --> */}
    
    <section class="section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-3 bg-gradient-default">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container pt-lg">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <img src="assets/img/theme/github.png" class="img-gitlogo" alt=""/>
            <h2 class="display-3 text-white">Github Projects</h2>
            <p class="lead text-white">Some Hackaton and Pet Projects. Click the image for the repository</p>
          </div>
        </div>
        <div class="row text-center row-grid mt-5">
          <div class="col-lg-4">
            <a href="https://github.com/barrancocarlos/movies-tracker" target="_blank"><img src="assets/img/theme/movies.jpg" class="img-github" alt=""/></a>            
            <h5 class="text-white mt-3">Movies Tracker</h5>
            <p class="text-white mt-3">An app that allows you to keep track of the movies you want to see.</p>
          </div>
          <div class="col-lg-4">
            <a href="https://github.com/barrancocarlos/nebula-spaceapps" target="_blank"><img src="assets/img/theme/nebula.jpg" class="img-github" alt=""/></a>
            <h5 class="text-white mt-3">Nebula</h5>
            <p class="text-white mt-3">The Nebula Data Visualization App was a NASA Space Apps 2021 Global Nominee.</p>
          </div>
          <div class="col-lg-4">
            <a href="https://github.com/barrancocarlos/agroconnect" target="_blank"><img src="assets/img/theme/agro.gif" class="img-github" alt=""/></a>
            <h5 class="text-white mt-3">AgroConnect</h5>
            <p class="text-white mt-3">Winner of the 2021 Ideathon Competition. Full engineering scholarship as prize.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg pt-lg-10 section-contact-us">
      <div class="container">
        <div class="row justify-content-center mt--300">
        </div>
      </div>
    </section>
    {/* <!-- Github Projects --> */}
  
  {/* <!-- Footer --> */}
  <footer class="footer has-cards">
    <div class="container container-lg">
      <div class="row">

      </div>
    </div>
    <div class="container">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-6">
          <h3 class="text-primary font-weight-light mb-2">Thank you for your attention!</h3>
          <h4 class="mb-0 font-weight-light">Find me on these platforms.</h4>
        </div>
        <div class="col-lg-6 text-lg-center btn-wrapper">        
          <a target="_blank" href="https://www.linkedin.com/in/carlosbarrancosoto/"
            class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" data-toggle="tooltip"
            data-original-title="Linkedin">
            <i class="fa fa-linkedin"></i>
          </a>
          <a target="_blank" href="https://github.com/barrancocarlos"
            class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
            data-original-title="Star on Github">
            <i class="fa fa-github"></i>
          </a>
        </div>
      </div>
      <hr/>  
    </div>
  </footer>
  {/* <!-- Footer --> */}
</div>
    );
};

export default Home;