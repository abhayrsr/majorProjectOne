import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function MensPage() {
  return (
    <>
      <Header />
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-3">
            <div class="row">
              <div class="col-md-6">
                <h5 class="m-3">Filter</h5>
              </div>
              <div class="col-md-6">
                <h5 class="m-3">Clear</h5>
              </div>
            </div>
          </div>
          <div class="col-md-9 bg-body-tertiary position-relative">
            <h5 class="position-absolute top-0 start-0 m-3">
              Showing All Products
            </h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
