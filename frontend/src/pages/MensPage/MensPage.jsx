import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./MensPage.css";
import { useState, useEffect } from "react";

export default function MensPage() {
  const [mensData, setMensData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMensProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:5000/mens");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        console.log("data", data);
        setMensData(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching the data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMensProducts();
  }, []);

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
              Showing All Products{" "}
              <span class="custom-span">(Showing 20 products)</span>
              {mensData.map((product) => (
                
                <div key={product.id} className="col-md-4 mb-4">
                  <div
                    className="card"
                    style={{ width: "18rem", height: "22rem" }}
                  >
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.description}</p>
                      <a href="#" className="btn btn-primary">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
