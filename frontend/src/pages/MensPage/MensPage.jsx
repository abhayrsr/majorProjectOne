import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./MensPage.css";
import { useState, useEffect } from "react";

export default function MensPage() {
  const [mensData, setMensData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [buttonState, setButtonState] = useState([]);

  useEffect(() => {
    const fetchMensProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:5000/mens");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
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

  useEffect(() => {
    setButtonState(Array(mensData.length).fill(false));
  }, [mensData])

  const buttonClick = (index) => {
    setButtonState(prevState => {
      return prevState.map((button, i) => i === index ? !button : button)
    })
  }

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
              </h5>
              <div className="row mt-5">
                {mensData.map((product, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div
                      className="card"
                      style={{ width: "18rem",  }}
                    >
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt="..."
                        height="350rem"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p><span className="fw-bold">Price: </span> ${product.price}</p>
                        <div onClick={() => buttonClick(index)}>
                          {!buttonState[index] ? <a href="#" className="btn btn-secondary m-2" key={index}>Add to Cart</a> : <a href="#" className="btn btn-secondary m-2" key={index}>Go to Cart</a>}
                        </div>
                        <a href="#" className="btn btn-secondary">
                          Save to Wishlist
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
