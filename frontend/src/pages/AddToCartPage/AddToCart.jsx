import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
export default function AddToCartPage() {
  return (
    <div>
      <Header />
      <div className="container">
        <h5 className="mt-3">My Cart</h5>
        <div className="row container justify-content-center">
          <div class="card mb-3" style={{maxWidth: "100rem"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
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
      </div>
      <Footer />
    </div>
  );
}
