import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeSlider from "./HomeSlider";
import Faq from "./HomeAccordion/Faq";
import { Helmet } from "react-helmet-async";
import { FaPaperPlane } from "react-icons/fa";
const Home = () => {
  const blogs = [
    {
      img: "Img/Frame 63.png",
      alt: "Plumbing Work",
      date: "March 24, 2025",
      title: "Plumbing Servicing Work",
    },
    {
      img: "Img/Frame 65.png",
      alt: "Electric Repair",
      date: "June 16, 2025",
      title: "Electric Repairing Work",
    },
    {
      img: "Img/Frame 66.png",
      alt: "Carpentry",
      date: "May 04, 2025",
      title: "Carpentry Work",
    },
    {
      img: "Img/Frame 63 (1).png",
      alt: "Electric Work",
      date: "April 24, 2025",
      title: "Electric Repairing Work",
    },
    {
      img: "Img/Frame 65 (1).png",
      alt: "Plumbing Work",
      date: "July 24, 2025",
      title: "Plumbing Work",
    },
    {
      img: "Img/Frame 66 (1).png",
      alt: "Carpentry Work",
      date: "February 10, 2025",
      title: "Carpentry Work",
    },
  ];
  return (
    <div>
      {/* //Seo Start */}
      <Helmet>
        {/* Schema Markup */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Home Buddy",
          "url": "https://www.homebuddy.com",
          "logo": "",
          "sameAs": [
            "https://www.facebook.com/HomeBuddyCom",
            "https://www.instagram.com/homebuddycom"
          ]
        }
      `}</script>

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.homebuddy.com/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Home" />
        <meta property="og:site_name" content="HomeBuddy" />
        <meta property="og:url" content="https://www.homebuddy.com/" />
        <meta
          property="og:description"
          content="HomeBuddy.com is an online platform designed to connect homeowners with trusted home improvement professionals. It helps find qualified contractors for renovation, remodeling, repair, and maintenance projects while also supporting contractors with valuable leads."
        />
        <meta property="og:type" content="business.business" />
        <meta property="og:image" content="" />

        {/* Standard Meta Tags */}
        <meta name="title" content="Find Quick Home Fixes at HomeBuddy" />
        <meta
          name="description"
          content="Discover HomeBuddy's easy tools for home repairs and decor. Get tips, product picks, and step-by-step guides to fix your space quickly. Start your project today."
        />
      </Helmet>
      {/* //Seo End */}
      {/* <=====Hero Section=====> */}
      <div className="banner">
        <Container>
          <Row>
            {/* Left Column */}
            <Col
              lg={6}
              md={12}
              className=" d-flex  flex-column align-item-center  justify-content-center"
            >
              <div className="left">
                <h3 className="text-light mb-3">My Home Buddy</h3>
                <h1 className="text-light mb-3">
                  Making Life Easier,
                  <br /> One Service At A Time
                </h1>
                <p className="text-light">
                  Feel the spotless difference, where your home and peace of
                  mind come first.
                </p>
                <Link className="banner-btn" to="/contactus">Contac Us<FaPaperPlane className="ms-2 mb-2 paper-plane" size={30} /></Link>
              </div>

              {/* Numbers Section */}
              <div className="left-bot d-flex gap-4 mt-4">
                <div className="num">
                  <h2>200K</h2>
                  <p>Happy customers</p>
                </div>
                <div className="num">
                  <h2>99%</h2>
                  <p>Client Satisfaction</p>
                </div>
                <div className="num">
                  <h2>500+</h2>
                  <p>Team Members</p>
                </div>
              </div>
            </Col>

            {/* Right Column */}
            <Col lg={6} md={12}>
              <div className="right">
                <div className="right-img">
                  <img
                    src="Img/Frame 7.png"
                    alt="man-holding-cleaner"
                    loading="lazy"
                    className="img-fluid p-4"
                  />
                </div>

                <div className="right-icon d-flex align-items-center mt-3">
                  <div className="img-txt me-3">
                    <img
                      src="Img/Frame 16.png"
                      alt="room"
                      loading="lazy"
                      className="img-fluid"
                    />
                  </div>
                  <div className="icon-text">
                    <h3>HOME CLEANING</h3>
                    <p className="text-black">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <=====Services Demo Card======> */}

      <div className="service cmn-gap mt-5 p-5">
        <Container>
          <Row>
            {/* Service 1 */}
            <Col lg={4} md={6} sm={12} className="h-100 mb-4">
              <Card className="service-card text-center p-3 border-0">
                <figure>
                  <img
                    src="Img/Frame 18.png"
                    alt="plug"
                    className="img-fluid"
                  />
                </figure>
                <Card.Body as="figcaption">
                  <h3>ELECTRIC SERVICE</h3>
                  <p className="text-dark">
                    Our eco-conscious service protects your home.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Service 2 */}
            <Col lg={4} md={6} sm={12} className="h-100 mb-4">
              <Card className="service-card text-center p-3 border-0">
                <figure>
                  <img
                    src="Img/Frame 18 (1).png"
                    alt="fan"
                    className="img-fluid"
                  />
                </figure>
                <Card.Body as="figcaption">
                  <h3>PLUMBING SERVICE</h3>
                  <p className="text-dark">
                    Our harass-free service protects your home.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Service 3 */}
            <Col lg={4} md={6} sm={12} className="h-100 mb-4">
              <Card className="service-card text-center p-3 border-0">
                <figure>
                  <img
                    src="Img/Frame 18.png"
                    alt="home"
                    className="img-fluid"
                  />
                </figure>
                <Card.Body as="figcaption">
                  <h3 className="">CARPENTRY SERVICE</h3>
                  <p className="text-dark">
                    Trusted protection for your home with our always on-time
                    service.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <======Grid services=====> */}

      <div className="shame cmn-gap">
        <Container className="p-5">
          <div className="smart-work">
            <Row>
              {/* Left content */}
              <Col md={6}>
                <div className="content">
                  <span className="tag">My Home Buddy</span>
                  <h1>
                    Safe, Smart and Seamless <br /> Electric-Work
                  </h1>
                  <p className="text-dark">
                    We are committed to enhancing spaces with experts,
                    dependable and meticulous services solutions.
                  </p>

                  <div className="stat-box">
                    <h2>98%</h2>
                    <p>
                      Our skilled team provides flawless outcomes, making sure
                      every part of your home gleams.
                    </p>
                  </div>

                  <div className="stat-box">
                    <h2>90%</h2>
                    <p>
                      We prioritize your well-being and planet, utilize only
                      safe, non-toxic, eco-conscious products.
                    </p>
                  </div>
                </div>
              </Col>

              {/* Right image */}
              <Col md={6}>
                <div className="image">
                  <img src="Img/Frame 24.png" alt="" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* <=====RELEX Section CARD=====> */}

      <div className="relax cmn-gap">
        <Container className="p-5">
          <div className="serv">
            <div className="tag">My Home Buddy</div>
            <h1 className="main-heading">Schedule Today Relax Tomorrow</h1>
            <p className="sub-text">
              We make it easy to get the services you need. Simply book your
              service, let us handle the servicing, and enjoy the flawless
              result.
            </p>

            <Row>
              {/* Card 1 */}
              <Col md={4} sm={6} xs={12} className="mb-4 ">
                <Card className="Relex-card">
                  <div className="tag resu">Book Your Service</div>
                  <Card.Body>
                    <Card.Title>Customize your service.</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur. Nam morbi interdum
                      magna elit a nisi ac vulputate.
                    </Card.Text>
                    <img
                      src="Img/Frame 32.png"
                      alt="Service 1"
                      loading="lazy"
                    />
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 2 */}
              <Col md={4} sm={6} xs={12}>
                <Card className="Relex-card  mb-4">
                  <div className="tag resu">We provide the service</div>
                  <Card.Body>
                    <Card.Title>We handle your service.</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur. Nam morbi interdum
                      magna elit a nisi ac vulputate.
                    </Card.Text>
                    <img
                      src="Img/Frame 32 (1).png"
                      alt="Service 2"
                      loading="lazy"
                    />
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 3 */}
              <Col md={4} sm={6} xs={12} className="mb-4 ">
                <Card className="Relex-card">
                  <div className="tag resu">Enjoy the results</div>
                  <Card.Body>
                    <Card.Title>Relax and revel in the fresh.</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur. Nam morbi interdum
                      magna elit a nisi ac vulputate.
                    </Card.Text>
                    <img
                      src="Img/Frame 32 (2).png"
                      alt="Service 3"
                      loading="lazy"
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* <====Home Repaire Service=====> */}
      <div className="repair cmn-gap">
        <Container>
          {/* Heading */}
          <div className="serv text-center mb-5">
            <div className="tag">My Home Buddy</div>
            <h1 className="heading">Home Repair Services</h1>
            <p className="description">
              We provide customized plans, flexible scheduling and specialized
              service solutions that you mostly needed in every time.
            </p>
          </div>

          {/* Service 1 */}
          <Row className="services align-items-center mb-5">
            <Col md={6}>
              <div className="text">
                <div className="tag">My Home Buddy</div>
                <h3>Electric Service</h3>
                <p className="text-dark">
                  Our home service provides thorough and reliable service for
                  your living space.
                </p>
                <Link className="cmn-btn"  to="/contactus">Contact Us</Link>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="Img/Frame 39.png"
                alt="Electric Service"
                className="img-fluid"
                loading="lazy"
              />
            </Col>
          </Row>

          {/* Service 2 (Reverse) */}
          <Row className="services reverse align-items-center mb-5 flex-md-row-reverse">
            <Col md={6}>
              <div className="text">
                <div className="tag">My Home Buddy</div>
                <h3>Plumbing Service</h3>
                <p className="text-dark">
                  Our home service provides thorough and reliable service for
                  your living space.
                </p>
                <Link className="cmn-btn"  to="/contactus">Contact Us</Link>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="Img/Frame 39 (1).png"
                alt="Plumbing Service"
                className="img-fluid"
                loading="lazy"
              />
            </Col>
          </Row>

          {/* Service 3 */}
          <Row className="services align-items-center">
            <Col md={6}>
              <div className="text">
                <div className="tag">My Home Buddy</div>
                <h3>Carpentry Service</h3>
                <p className="text-dark">
                  Our home service provides thorough and reliable service for
                  your living space.
                </p>
                <Link className="cmn-btn"  to="/contactus">Contact Us</Link>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="Img/Frame 39 (2).png"
                alt="Carpentry Service"
                className="img-fluid"
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <=====Temas====> */}
      <div className="exp-team cmn-gap p-5">
        <Container>
          {/* Heading */}
          <div className="head-line text-center mb-5">
            <div className="tag">My Home Buddy</div>
            <h2>Get services from our experienced team</h2>
            <p className="we-make">
              We make it easy to get proper services that you need. Simply book
              your service that you require and see the flawless result.
            </p>
          </div>

          {/* Cards */}
          <Row className=" g-4">
            <Col md={4} sm={6} className="mb-4">
              <Card className="card-man text-center h-100">
                <Card.Img
                  variant="top"
                  src="Img/Frame 42.png"
                  alt="Electric Service Man"
                />
                <Card.Body className="card-info">
                  <Card.Title>Noel Bowie</Card.Title>
                  <Card.Text>Electric Service Man</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={6} className="mb-4">
              <Card className="card-man text-center h-100">
                <Card.Img
                  variant="top"
                  src="Img/Frame 43.png"
                  alt="Carpentry Service Man"
                />
                <Card.Body className="card-info">
                  <Card.Title>Laim David</Card.Title>
                  <Card.Text>Carpentry Service Man</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} sm={6} className="mb-4">
              <Card className="card-man text-center h-100">
                <Card.Img
                  variant="top"
                  src="Img/Frame 44.png"
                  alt="Plumbing Service Man"
                />
                <Card.Body className="card-info">
                  <Card.Title>Saif Thompson</Card.Title>
                  <Card.Text>Plumbing Service Man</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <=====Slider=====> */}
      <HomeSlider />
      {/* <======Home Protected=====> */}
      <div className="plumbing-section cmn-gap p-5 mt-5">
        <Container>
          <Row className="align-items-center">
            {/* Text Content */}
            <Col md={6} className="text-content">
              <div className="tag resu">My Home Buddy</div>
              <h2>
                Protect Your Home With <br /> Expert Plumbing
              </h2>
              <p>
                Contact My Home Buddy for servicing critical plumbing issues
                quickly and efficiently.
              </p>
              <Link className="protect-btn">Contac Us</Link>
            </Col>

            {/* Image Content */}
            <Col md={6} className="image-content text-center">
              <img src="Img/Frame 52.png" alt="Plumber" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <=====Acordion====> */}
      <Faq />
      {/* <=====Blog Post=======> */}
      <div className="blog-section py-5">
        <Container>
          <div className="text-center mb-4">
            <div className="tag">My Home Buddy</div>
            <h2>Recent blog posts &amp; updates</h2>
          </div>

          <Row className="g-4 mt-4">
            {blogs.map((blog, index) => (
              <Col md={4} sm={6} xs={12} key={index}>
                <Card className="h-100 shadow-sm border-0 rounded-5 blog-cards">
                  <Card.Img variant="top" src={blog.img} alt={blog.alt} />
                  <Card.Body>
                    <div className="date text-muted">{blog.date}</div>
                    <Card.Title>{blog.title}</Card.Title>
                    <Link className="text-decoration-none fw-bold blog-btn">
                      Continue Read
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Link className="view-more">View More</Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
