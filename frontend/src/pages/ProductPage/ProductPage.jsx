import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [recommendedProduct, setRecommendedProducts] = useState([]);
  const [buttonState, setButtonState] = useState(0);
  const [wishlistState, setWishlistState] = useState([]);

  console.log(product);
  console.log(id);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/product/${id}`);
        console.log("response", response);
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

  useEffect(() => {
    if (!id) return;
    const fetchRecommendedProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/mens`);
        console.log("response", response);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        console.log(data);
        setRecommendedProducts(data);
      } catch (error) {
        console.log("Error fetching the data");
      } finally {
        setLoading(false);
      }
    };
    fetchRecommendedProduct();
  }, []);

  const buttonClick = (index) => {
    setButtonState((prevState) => {
      return prevState.map((button, i) => (i === index ? !button : button));
    });
  };

  const btnWishlistClick = (index) => {
    setWishlistState((prevState) => {
      return prevState.map((button, i) => (i === index ? !button : button));
    });
  };

  return (
    <>
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-md-3 mb-5">
            <div class="card mt-3" style={{ width: "18rem" }}>
              <img
                src={product?.image}
                className="card-img-top mt-3"
                alt="..."
                height="280rem"
              />
              <div class="card-body">
                <button class="btn btn-primary mt-2"> Buy Now </button>
                <br />
                <button class="btn btn-secondary mt-2"> Add to Cart </button>
                <br />
              </div>
            </div>
          </div>
          <div class="col-md-9 mt-3 text-start">
            <h4 class="text-start">{product?.name}</h4>
            <p class="fs-3">${product?.price}</p>
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

              <ul>
                {product?.details?.map((item, val) => {
                  return <li key={val}>{item}</li>;
                })}
              </ul>
            </p>
          </div>
          <hr />
          <h5 class="text-start mb-3">More items you may like in apparel</h5>
          <Carousel responsive={responsive} itemClass="carousel-item-padding-40px">
            {recommendedProduct.map((item, index) => (
              <div className="card" style={{ width: "18rem" }}>
                <Link to={`/product/{item._id}`}>
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt="..."
                    height="280rem"
                  />
                </Link>
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p>
                    <span className="fw-bold">Price: </span> ${item.price}
                  </p>
                  <div onClick={() => buttonClick(index)}>
                    {!buttonState[index] ? (
                      <a href="#" className="btn btn-secondary m-2" key={index}>
                        Add to Cart
                      </a>
                    ) : (
                      <a href="#" className="btn btn-secondary m-2" key={index}>
                        Go to Cart
                      </a>
                    )}
                  </div>
                  <div onClick={() => btnWishlistClick(index)}>
                    {!wishlistState[index] ? (
                      <a href="#" className="btn btn-secondary m-2" key={index}>
                        Save to wishlist
                      </a>
                    ) : (
                      <a href="#" className="btn btn-secondary m-2" key={index}>
                        Saved to wishlist
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
          ;
        </div>
      </div>
      <Footer />
    </>
  );
}
