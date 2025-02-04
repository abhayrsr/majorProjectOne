import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/product/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log("Error fetching the data");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <>
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <img
              src={product.image}
              className="card-img-top mt-3"
              alt="..."
              height="350rem"
              width="200rem"
            />
            <br />
            <button class="btn btn-primary mt-2"> Buy Now </button>
            <br />
            <button class="btn btn-secondary mt-2"> Add to Cart </button>
            <br />
          </div>
          <div class="col-md-9 mt-3 text-start">
            <h4 class="text-start">{product.name}</h4>
            <p class="fs-3">${product.price}</p>
            <p>
              <span class="fw-medium">Quantity</span>
              <button class="mx-2 btn btn-light rounded-circle btn-sm">
                {" "}
                -{" "}
              </button>
              <input class="me-2" value={quantity} id="quantit" size="1" />
              <button class="btn btn-light rounded-circle btn-sm"> + </button>
            </p>
            <p>
              <span class="fw-medium">Size</span>
              <button class="btn btn-outline-secondary mx-2 btn-sm">S</button>
              <button class="btn btn-outline-secondary me-2 btn-sm">M</button>
              <button class="btn btn-outline-secondary me-2 btn-sm">L</button>
              <button class="btn btn-outline-secondary me-2 btn-sm">XL</button>
              <button class="btn btn-outline-secondary me-2 btn-sm">XXL</button>
            </p>
            <hr />
            <p>
                <span class="fw-medium">Description</span>
                <p>{product.details}</p>
                {/* <ul>
                    {product.details.map((item, val) => {
                        return(
                            <li key={val}>{item}</li>
                        )
                    })}
                </ul> */}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
