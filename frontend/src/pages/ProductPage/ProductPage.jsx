import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProductPage.css";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("");
  const [checkSize, setCheckSize] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [recommendedProduct, setRecommendedProducts] = useState([]);
  const [buttonState, setButtonState] = useState(0);
  const [wishlistState, setWishlistState] = useState([]);
  const [wishListItems, setWishListItems] = useState([]);

  // console.log(size.length);

  const responsive = {
    superLargeDesktop: {
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
        // console.log(data);
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
        // console.log("response", response);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        // console.log(data);
        setRecommendedProducts(data);
      } catch (error) {
        console.log("Error fetching the data");
      } finally {
        setLoading(false);
      }
    };
    fetchRecommendedProduct();
  }, []);

  const handleWishList = async (wishListItem) => {
    setWishListItems((prev) => [...prev, wishListItem]);
    // fetch(`http://localhost:5000/`, {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((data) => console.log(data))
    //   .catch((error) =>
    //     console.log("error occurred while posting the data", error)
    //   );
  };

  useEffect(() => {
    setButtonState(Array(product.length).fill(false));
    setWishlistState(Array(product.length).fill(false));
  }, [product]);

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

  const handlePlus = (e) => {
    let count = quantity;
    count++;
    setQuantity(count);
  };

  const handleMinus = (e) => {
    let count = quantity;
    count--;
    count < 0 ? setQuantity(0) : setQuantity(count);
  };

  const handleSize = (e) => {
    let sizeOfProduct = e.target.value;
    let flag = checkSize;
    setCheckSize(!flag);
    setSize(sizeOfProduct);
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
              <button
                class="mx-2 btn btn-light rounded-circle btn-sm"
                onClick={handleMinus}
              >
                {" "}
                -{" "}
              </button>
              <input class="me-2" value={quantity} id="quantity" size="1" />
              <button
                class="btn btn-light rounded-circle btn-sm"
                onClick={handlePlus}
              >
                {" "}
                +{" "}
              </button>
            </p>
            <p>
              <span class="fw-medium">Size</span>
              {/* <button
                id="S"
                class={`btn btn-outline-secondary mx-2 btn-sm ${
                  size.length !== 0 && checkSize ? "btn-selected" : ""
                }`}
                name="sizeOfProducts"
                value="S"
                onClick={handleSize}
              >
                S
              </button>
              <button
                id="M"
                class={`btn btn-outline-secondary mx-2 btn-sm ${
                  size.length !== 0 && checkSize ? "btn-selected" : ""
                }`}
                name="sizeOfProducts"
                value="M"
                onClick={handleSize}
              >
                M
              </button>
              <button
                id="L"
                class={`btn btn-outline-secondary mx-2 btn-sm ${
                  size.length !== 0 && checkSize ? "btn-selected" : ""
                }`}
                name="sizeOfProducts"
                value="L"
                onClick={handleSize}
              >
                L
              </button>
              <button
                id="XL"
                class={`btn btn-outline-secondary mx-2 btn-sm ${
                  size.length !== 0 && checkSize ? "btn-selected" : ""
                }`}
                name="sizeOfProducts"
                value="XL"
                onClick={handleSize}
              >
                XL
              </button>
              <button
                id="XXL"
                class={`btn btn-outline-secondary mx-2 btn-sm ${
                  size.length !== 0 && checkSize ? "btn-selected" : ""
                }`}
                name="sizeOfProducts"
                value="XXL"
                onClick={handleSize}
              >
                XXL
              </button> */}
              {["S", "M", "L", "XL", "XXL"].map((item, i) => (
                <button
                  key={i}
                  id={item}
                  className={`btn btn-outline-secondary mx-2 btn-sm ${
                    size === item ? `${item}-btn-selected` : ""
                  }`}
                  name="sizeOfProducts"
                  value={item}
                  onClick={handleSize}
                >
                  {item}
                </button>
              ))}
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
          <Carousel
            responsive={responsive}
            itemClass="carousel-item-padding-40px"
          >
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
                      <a
                        href=""
                        className="btn btn-secondary m-2"
                        key={index}
                        onClick={handleWishList(item)}
                      >
                        Save to wishlist
                      </a>
                    ) : (
                      <a href="" className="btn btn-secondary m-2" key={index}>
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
