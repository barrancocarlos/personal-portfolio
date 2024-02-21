const Home = () => {
  return (
   

<div>

  <header className="header-global">
    <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light">
      <div className="container">       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global"
          aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbar_global">
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                <a href="assets/img/theme/CarlosBarrancoSotoCV-english.pdf" target="_blank" className="btn btn-neutral btn-icon">
                  <span className="btn-inner--icon">
                    <i className="fa fa-cloud-download mr-2"></i>
                  </span>
                  <span className="nav-link-inner--text">Download CV</span>
                </a>
              </div>
              <div className="col-6 collapse-close">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global"
                  aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
            <li className="nav-item dropdown">
            
            </li>
            <li className="nav-item dropdown">
             
            </li>
          </ul>
          <ul className="navbar-nav align-items-lg-center ml-lg-auto">

            <li className="nav-item">
              <a className="nav-link nav-link-icon" href="https://www.linkedin.com/in/carlosbarrancosoto/" target="_blank"
                data-toggle="tooltip" rel="noreferrer" title="LinkedIn">
                <i className="fa fa-linkedin-square"></i>
                <span className="nav-link-inner--text d-lg-none">LinkedIn</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-icon" href="https://github.com/barrancocarlos" target="_blank"
                data-toggle="tooltip" title="Github" rel="noreferrer">
                <i className="fa fa-github"></i>
                <span className="nav-link-inner--text d-lg-none">Github</span>
              </a>
            </li>
            <li className="nav-item d-none d-lg-block ml-lg-4">
              <a href="assets/img/theme/CarlosBarrancoSotoCV-english.pdf" download="CarlosBarrancoSotoCV" className="btn btn-neutral btn-icon">
                <span className="btn-inner--icon">
                  <i className="fa fa-cloud-download mr-2"></i>
                </span>
                <span className="nav-link-inner--text">Download CV</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>



    {/* <!-- Hero --> */}
    <div className="position-relative">
      <section className="section section-lg">
        <div className="container">
          <div className="row row-grid justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-3 hero-title">Carlos Barranco Soto
                <span className="hero-subtitle">Software Engineer</span>
              </h1>
              <p className="lead">Software Engineer and Web Developer with more than 5 years of experience and participation in more
                than 30 web projects with different technologies, including Python`s Django Framework and the Node.js
                MERN stack </p>
              <div className="btn-wrapper">
                <a href="#projects" className="btn btn-primary mb-3 mb-sm-0">See Projects</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* <!-- Hero --> */}

    {/* <!-- Tech --> */}
    <section className="section section-lg pt-lg-0 tech">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="row row-grid">
              <div className="col-lg-4">
                <div className="card card-lift--hover shadow border-0">
                  <div className="card-body py-5">
                    <img src="assets/img/theme/python-logo.png" className="img-code" alt=""/>
                    <h6 className="text-primary text-uppercase">Python</h6>
                    <p className="description mt-3">Python`s Django Framework, with
                      DRF, MySQL and PostgreSQL</p>
                    <div>
                      <span className="badge badge-pill badge-primary">Django</span>
                      <span className="badge badge-pill badge-primary">DRF</span>
                      <span className="badge badge-pill badge-primary">Python</span>
                    </div>
                    <a href="#projects" className="btn btn-primary mt-4">Learn more</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card card-lift--hover shadow border-0">
                  <div className="card-body py-5">
                    <img src="assets/img/theme/js-logo.png" className="img-code" alt=""/>
                    <h6 className="text-js text-uppercase">JavaScript</h6>
                    <p className="description mt-3">Node.js backend framework
                      Express.js with React, Angular and MongoDB.</p>
                    <div>
                      <span className="badge badge-pill badge-js">Express.js</span>
                      <span className="badge badge-pill badge-js">React</span>
                      <span className="badge badge-pill badge-js">Angular</span>
                    </div>
                    <a href="#projects" className="btn btn-js mt-4">Learn more</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card card-lift--hover shadow border-0">
                  <div className="card-body py-5">
                    <img src="assets/img/theme/web-logo.png" className="img-code" alt=""/>
                    <h6 className="text-warning text-uppercase">Web Design</h6>
                    <p className="description mt-3">Html/CSS, Bootstrap, Wordpress,  and
                      Image Editing. </p>
                    <div>
                      <span className="badge badge-pill badge-warning">Wordpress</span>
                      <span className="badge badge-pill badge-warning">Bootstrap</span>
                      <span className="badge badge-pill badge-warning">Html/CSS</span>
                    </div>
                    <a href="#projects" className="btn btn-warning mt-4">Learn more</a>
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
    <section className="section section-lg" id="projects">
      <div className="row justify-content-center text-center">
        <div className="col-lg-12">
          <h2 className="display-3">Portfolio</h2>
          <p className="lead text-muted hero">This is a list of my latest projects. Dummy data was used to protect the
            client`s privacy</p>
        </div>
      </div>
      <div className="container">
        {/* <!-- Bliss --> */}
        <div className="row row-grid row-portfolio align-items-center">
          <div className="col-md-6">
            <div className="pr-md-5">
              <h3>Bliss Group</h3>
              <p>Progressive Web App for Wellness Coach. Online courses and workshops.</p>
              <ul className="list-unstyled mt-5">
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-bliss mr-3">
                        <i className="ni ni-settings-gear-65"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0">Django, React (with Ionic), PostgreSQL</h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-bliss mr-3">
                        <i className="ni ni-square-pin"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0">United States</h6>
                    </div>
                  </div>
                </li>               
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <a href="#blissModal" data-toggle="modal"><img src="assets/img/theme/bliss.jpg" className="img-portfolio" alt=""/></a>
          </div>
          {/* <!-- Modal --> */}
          <div className="modal fade" id="blissModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img src="assets/img/theme/bliss.jpg" className="img-portfolio" alt=""/>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
        </div>
        {/* <!-- Bliss --> */}
        {/* <!-- Arc --> */}
        <div className="row row-grid row-portfolio align-items-center">
          <div className="col-md-6">
            <a href="#arcModal" data-toggle="modal"><img src="assets/img/theme/arc.jpg" className="img-portfolio" alt=""/></a>
          </div>
          {/* <!-- Modal --> */}
          <div className="modal fade" id="arcModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img src="assets/img/theme/arc.jpg" className="img-portfolio" alt=""/>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
          <div className="col-md-6 portfolio-pair">
            <div className="pr-md-5">
              <h3>Bonus Book</h3>
              <p>HRM system for oilfield and gas process equipment company.</p>
              <ul className="list-unstyled mt-5">
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-arc mr-3">
                        <i className="ni ni-settings-gear-65"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0">Django, Angular, PostgreSQL</h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-arc mr-3">
                        <i className="ni ni-square-pin"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0">United States</h6>
                    </div>
                  </div>
                </li>               
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Arc --> */}
        {/* <!-- Survey --> */}
        <div className="row row-grid row-portfolio align-items-center">
          <div className="col-md-6">
            <div className="pr-md-5">
              <h3>Survey</h3>
              <p>App for Model Agency. Survey for customer satisfaction</p>
              <ul className="list-unstyled mt-5">
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-arc mr-3">
                        <i className="ni ni-settings-gear-65"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0">Express.js, React, MongoDB</h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-arc mr-3">
                        <i className="ni ni-square-pin"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0">Colombia</h6>
                    </div>
                  </div>
                </li>               
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <a href="#surveyModal" data-toggle="modal"><img src="assets/img/theme/survey.jpg" className="img-portfolio" alt=""/></a>
          </div>
          {/* <!-- Modal --> */}
          <div className="modal fade" id="surveyModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img src="assets/img/theme/survey.jpg" className="img-portfolio" alt=""/>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
        </div>
        {/* <!-- Survey --> */}
        {/* <!-- Models --> */}
        <div className="row row-grid row-portfolio align-items-center">
          <div className="col-md-6">
            <a href="#modelsModal" data-toggle="modal"><img src="assets/img/theme/models.jpg" className="img-portfolio" alt=""/></a>
          </div>
          {/* <!-- Modal --> */}
          <div className="modal fade" id="modelsModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img src="assets/img/theme/models.jpg" className="img-portfolio" alt=""/>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
          <div className="col-md-6 portfolio-pair">
            <div className="pr-md-5">
              <h3>CRM</h3>
              <p>CRM system for Model Agency.</p>
              <ul className="list-unstyled mt-5">
              <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-bliss mr-3">
                        <i className="ni ni-settings-gear-65"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0">Django, Angular, PostgreSQL</h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-bliss mr-3">
                        <i className="ni ni-square-pin"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0">Colombia</h6>
                    </div>
                  </div>
                </li>              
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Models --> */}
        {/* <!-- Tickets --> */}
        <div className="row row-grid row-portfolio align-items-center">
          <div className="col-md-6">
            <div className="pr-md-5">
              <h3>Event Tickets</h3>
              <p>Event Management App. Ticket purchase for conferences</p>
              <ul className="list-unstyled mt-5">
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-bliss mr-3">
                        <i className="ni ni-settings-gear-65"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0">Express.js, MongoDB</h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-bliss mr-3">
                        <i className="ni ni-square-pin"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0">Colombia</h6>
                    </div>
                  </div>
                </li>            
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <a href="#ticketsModal" data-toggle="modal"><img src="assets/img/theme/tickets.jpg"
                className="img-portfolio" alt=""/></a>
          </div>
          {/* <!-- Modal --> */}
          <div className="modal fade" id="ticketsModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img src="assets/img/theme/tickets.jpg" className="img-portfolio" alt=""/>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
        </div>
        {/* <!-- Tickets --> */}
        {/* <!-- Mooncrew --> */}
        <div className="row row-grid row-portfolio align-items-center">
          <div className="col-md-6">
            <a href="#mooncrewModal" data-toggle="modal"><img src="assets/img/theme/mooncrew.jpg"
                className="img-portfolio" alt=""/></a>
          </div>
          {/* <!-- Modal --> */}
          <div className="modal fade" id="mooncrewModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img src="assets/img/theme/mooncrew.jpg" className="img-portfolio" alt=""/>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Modal --> */}
          <div className="col-md-6 portfolio-pair">
            <div className="pr-md-5">
              <h3>Mooncrew</h3>
              <p>Events Website. Users could post concerts and cultural events.</p>
              <ul className="list-unstyled mt-5">
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-bliss mr-3">
                        <i className="ni ni-settings-gear-65"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0">Wordpress, Custom Post Types, Frontend Post Submissions.</h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="badge badge-circle badge-bliss mr-3">
                        <i className="ni ni-square-pin"></i>
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-0">Australia</h6>
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

    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">

        <div className="row justify-content-center text-center">
          <div className="col-lg-12">
            <h2 className="display-3">Web Design</h2>
            <p className="lead text-muted hero">E-commerce and Corporate Websites</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">E-commerce</li>
              <li data-filter=".filter-card">Corporate</li>
              <li data-filter=".filter-web">Personal</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/theme/patricia-prev.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Patricia Arceneaux</h4>
                <p>Wellness Coach</p>
                <div className="portfolio-links">
                  <a href="assets/img/theme/patricia.png" data-gall="portfolioGallery" className="venobox"><i className="fa fa-eye mr-2"></i></a>                  
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/theme/ricarda-prev.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Ricarda Pantoja</h4>
                <p>Online Store</p>
                <div className="portfolio-links">
                  <a href="assets/img/theme/ricarda.jpeg" data-gall="portfolioGallery" className="venobox"><i className="fa fa-eye mr-2"></i></a>                 
                </div>
              </div>
            </div>
          </div>        

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/theme/ortho.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Orthocenter</h4>
                <p>Dentist Office</p>
                <div className="portfolio-links">
                  <a href="assets/img/theme/ortho.jpg" data-gall="portfolioGallery" className="venobox"><i className="fa fa-eye mr-2"></i></a>                 
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/theme/miversion.png" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Mi Version Fit</h4>
                <p>Fitness Coach</p>
                <div className="portfolio-links">
                  <a href="assets/img/theme/miversion.png" data-gall="portfolioGallery" className="venobox"><i className="fa fa-eye mr-2"></i></a>                  
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/theme/arc2-prev.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>ARC Fabrication</h4>
                <p>Industrial Equipment</p>
                <div className="portfolio-links">
                  <a href="assets/img/theme/arc2.png" data-gall="portfolioGallery" className="venobox"><i className="fa fa-eye mr-2"></i></a>                 
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/theme/autotronica-prev.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Autotronica</h4>
                <p>Car Shop</p>
                <div className="portfolio-links">
                  <a href="assets/img/theme/autotronica.jpg" data-gall="portfolioGallery" className="venobox"><i className="fa fa-eye mr-2"></i></a>                 
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/theme/harmonia.png" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Harmonia Roses</h4>
                <p>Roses that last</p>
                <div className="portfolio-links">
                  <a href="assets/img/theme/harmonia.png" data-gall="portfolioGallery" className="venobox"><i className="fa fa-eye mr-2"></i></a>                 
                </div>
              </div>
            </div>
          </div> 

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/theme/genia-prev.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Genia Creativa</h4>
                <p>Coach</p>
                <div className="portfolio-links">
                  <a href="assets/img/theme/genia.png" data-gall="portfolioGallery" className="venobox"><i className="fa fa-eye mr-2"></i></a>                  
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/theme/tosaka-prev.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Tosaka</h4>
                <p>Toyota Car Products</p>
                <div className="portfolio-links">
                  <a href="assets/img/theme/tosaka.jpg" data-gall="portfolioGallery" className="venobox"><i className="fa fa-eye mr-2"></i></a>                 
                </div>
              </div>
            </div>
          </div> 

         




        </div>

      </div>
    </section>

 {/* <!-- Wordpress Portfolio --> */}

{/* <!-- Github Projects --> */}
    
    <section className="section section-shaped my-0 overflow-hidden">
      <div className="shape shape-style-3 bg-gradient-default">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="container pt-lg">
        <div className="row text-center justify-content-center">
          <div className="col-lg-10">
            <img src="assets/img/theme/github.png" className="img-gitlogo" alt=""/>
            <h2 className="display-3 text-white">Github Projects</h2>
            <p className="lead text-white">Some Hackaton and Pet Projects. Click the image for the repository</p>
          </div>
        </div>
        <div className="row text-center row-grid mt-5">
        <div className="col-lg-3">
            <a href="https://github.com/barrancocarlos/Aqua-IoT" target="_blank"  rel="noreferrer"><img src="assets/img/theme/home-aqua.png" className="img-github" alt=""/></a>            
            <h5 className="text-white mt-3">Aqua-IoT</h5>
            <p className="text-white mt-3">An app to monitor aquaponic systems.</p>
          </div>
          <div className="col-lg-3">
            <a href="https://github.com/barrancocarlos/movies-tracker" target="_blank"  rel="noreferrer"><img src="assets/img/theme/movies.jpg" className="img-github" alt=""/></a>            
            <h5 className="text-white mt-3">Movies Tracker</h5>
            <p className="text-white mt-3">An app that allows you to keep track of the movies you want to see.</p>
          </div>
          <div className="col-lg-3">
            <a href="https://github.com/barrancocarlos/nebula-spaceapps" target="_blank"  rel="noreferrer"><img src="assets/img/theme/nebula.jpg" className="img-github" alt=""/></a>
            <h5 className="text-white mt-3">Nebula</h5>
            <p className="text-white mt-3">The Nebula Data Visualization App was a NASA Space Apps 2021 Global Nominee.</p>
          </div>
          <div className="col-lg-3">
            <a href="https://github.com/barrancocarlos/agroconnect" target="_blank"  rel="noreferrer"><img src="assets/img/theme/agro.gif" className="img-github" alt=""/></a>
            <h5 className="text-white mt-3">AgroConnect</h5>
            <p className="text-white mt-3">Winner of the 2021 Ideathon Competition. Full engineering scholarship as prize.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-lg pt-lg-10 section-contact-us">
      <div className="container">
        <div className="row justify-content-center mt--300">
        </div>
      </div>
    </section>
    {/* <!-- Github Projects --> */}
  
  {/* <!-- Footer --> */}
  <footer className="footer has-cards">
    <div className="container container-lg">
      <div className="row">

      </div>
    </div>
    <div className="container">
      <div className="row row-grid align-items-center my-md">
        <div className="col-lg-6">
          <h3 className="text-primary font-weight-light mb-2">Thank you for your attention!</h3>
          <h4 className="mb-0 font-weight-light">Find me on these platforms.</h4>
        </div>
        <div className="col-lg-6 text-lg-center btn-wrapper">        
          <a target="_blank" href="https://www.linkedin.com/in/carlosbarrancosoto/"
            className="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" data-toggle="tooltip"
            data-original-title="Linkedin" rel="noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
          <a target="_blank" href="https://github.com/barrancocarlos"
            className="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
            data-original-title="Star on Github" rel="noreferrer">
            <i className="fa fa-github"></i>
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