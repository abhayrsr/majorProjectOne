import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="d-block w-100"
              alt="..."
              width="100rem"
              height="500rem"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/6461325/pexels-photo-6461325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="d-block w-100"
              alt="..."
              width="100rem"
              height="500rem"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="d-block w-100"
              alt="..."
              width="100rem"
              height="500rem"
            />
          </div>
        </div>
      </div>

      <div class="container text-center my-5 ">
        <div class="row justify-content-around">
          <div class="col-md-4">
            <div
              class="card"
              style={{ width: "37rem", height: "25rem" }}
            >
              <div class="row">
                <div class="col-6">
                  <img src="https://images.pexels.com/photos/1209611/pexels-photo-1209611.jpeg" height="398rem" class="card-img rounded-start" alt="..." />
                </div>
                <div class="col-6">
                  <div class="card-body">
                    <h5 class="card-title">New Arrival</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    
                    <br />
                    <br />
                    <br />
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="card"
              style={{ width: "37rem", height: "25rem" }}
            >
              <div class="row">
                <div class="col-6">
                  <img src="https://images.pexels.com/photos/1209611/pexels-photo-1209611.jpeg" height="398rem" class="card-img rounded-start" alt="..." />
                </div>
                <div class="col-6">
                  <div class="card-body">
                    <h5 class="card-title">New Arrival</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    
                    <br />
                    <br />
                    <br />
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-5">
            <div
              class="card"
              style={{ width: "37rem", height: "25rem" }}
            >
              <div class="row">
                <div class="col-6">
                  <img src="https://images.pexels.com/photos/1209611/pexels-photo-1209611.jpeg" height="398rem" class="card-img rounded-start" alt="..." />
                </div>
                <div class="col-6">
                  <div class="card-body">
                    <h5 class="card-title">New Arrival</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    
                    <br />
                    <br />
                    <br />
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-5">
            <div
              class="card"
            >
              <div class="row">
                <div class="col-6">
                  <img src="https://images.pexels.com/photos/1209611/pexels-photo-1209611.jpeg" height="250rem" class="card-img rounded-start" alt="..." />
                </div>
                <div class="col-6">
                  <div class="card-body">
                    <h5 class="card-title">New Arrival</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-5">
            <div
              class="card"
              style={{ width: "40rem", height: "25rem" }}
            >
              <div class="row">
                <div class="col-6">
                  <img src="https://images.pexels.com/photos/1209611/pexels-photo-1209611.jpeg" height="398rem" class="card-img rounded-start" alt="..." />
                </div>
                <div class="col-6">
                  <div class="card-body">
                    <h5 class="card-title">New Arrival</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    
                    <br />
                    <br />
                    <br />
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
