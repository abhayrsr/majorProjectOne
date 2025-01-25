import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Slider from "@mui/material/Slider";
import "./MensPage.css";
import { useState, useEffect } from "react";

export default function MensPage() {
  const [mensData, setMensData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [value, setValue] = useState(0);
  const [buttonState, setButtonState] = useState(0);
  const [wishlistState, setWishlistState] = useState([]);
  const [isCheckedCategory, setIsCheckedCategory] = useState([]);
  const [isRadioChecked, setRadioChecked] = useState(null);
  const [firstFilter, setFirstFilter] = useState(null);

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
    setWishlistState(Array(mensData.length).fill(false));
  }, [mensData]);

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

  

  const handlePriceFilter = (event, newValue) => {
    setValue(newValue);

    if (filteredData.length === 0 || firstFilter.price) {
      setFirstFilter((prev) => ({ ...prev, price: true }));
      const filteredDataByPrice = mensData.filter(
        (item) => item.price >= event.target.value
      );
      setFilteredData(filteredDataByPrice);
    } else {
      const filteredDataByPrice = filteredData.filter(
        (item) => item.price >= event.target.value
      );
      setFilteredData(filteredDataByPrice);
    }
  };

  const handleCheckboxCategory = (event) => {
    const { name } = event.target;
    const isChecked = !isCheckedCategory[name];

    console.log(isCheckedCategory[name]);
    setIsCheckedCategory((prev) => ({
      ...prev,
      [name]: !isCheckedCategory[name],
    }));

    if (filteredData.length === 0 || firstFilter.category) {
      setFirstFilter((prev) => ({ ...prev, category: true }));
      const filteredDataByCat = isChecked
        ? mensData.filter((item) => item.category === event.target.value)
        : mensData.filter((item) => item.category !== event.target.value);
      setFilteredData(filteredDataByCat);
    } else {
      const filteredDataByCat = isChecked ? filteredData.filter(
        (item) => item.category === event.target.value
      ) : filteredData.filter((item) => item.category !== event.target.value);
      setFilteredData(filteredDataByCat);
    }
  };

  const handleRadioChecked = (event) => {
    console.log(event.target.value);
    setRadioChecked(Number(event.target.value));

    if (filteredData.length === 0) {
      setFirstFilter((prev) => ({ ...prev, rating: true }));
    }

    if (firstFilter.rating) {
      const filteredDataByRadio = mensData.filter(
        (item) => item.rating >= Number(event.target.value)
      );
      setFilteredData(filteredDataByRadio);
    } else {
      const filteredDataByRadio = filteredData.filter(
        (item) => item.rating >= Number(event.target.value)
      );
      setFilteredData(filteredDataByRadio);
    }
  };

  return (
    <>
      <Header />
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-3">
            <div class="row">
              <div class="col-md-6">
                <h5 class="m-3">Filter</h5>
                <h5 class="">Price</h5>
                <Slider
                  aria-label="Temperature"
                  defaultValue={0}
                  valueLabelDisplay="auto"
                  shiftStep={20}
                  step={20}
                  marks
                  min={0}
                  max={100}
                  onChange={handlePriceFilter}
                />
              </div>
              <div class="col-md-6">
                <h5 class="m-3">Clear</h5>
              </div>

              <div class="col-md-3">
                <h5 class="ms-4">Category</h5>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    checked={isCheckedCategory.men}
                    value="Men"
                    name="men"
                    onChange={handleCheckboxCategory}
                    id="menCheck"
                  />
                  <label class="form-check-label" for="menCheck">
                    Men
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    checked={isCheckedCategory.women}
                    value="Women"
                    name="women"
                    onChange={handleCheckboxCategory}
                    id="womenCheck"
                  />
                  <label class="form-check-label" for="womenCheck">
                    Women
                  </label>
                </div>
              </div>
            </div>

            <div class="form-check">
              <h5 class="custom-rating my-3">Rating</h5>
              <input
                class="form-check-input"
                type="radio"
                checked={isRadioChecked}
                value={4}
                name="rating"
                onChange={handleRadioChecked}
                id="flexRadio4"
              />
              <label class="form-check-label" for="flexRadio4">
                4 star and above
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                checked={isRadioChecked}
                value={3}
                name="rating"
                onChange={handleRadioChecked}
                id="flexRadio3"
              />
              <label class="form-check-label" for="flexRadio3">
                3 star and above
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                checked={isRadioChecked}
                value={2}
                name="rating"
                onChange={handleRadioChecked}
                id="flexRadio2"
              />
              <label class="form-check-label" for="flexRadio2">
                2 star and above
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                checked={isRadioChecked}
                value={1}
                name="rating"
                onChange={handleRadioChecked}
                id="flexRadio1"
              />
              <label class="form-check-label" for="flexRadio1">
                1 star and above
              </label>
            </div>
          </div>
          <div class="col-md-9 bg-body-tertiary position-relative">
            <h5 class="position-absolute top-0 start-0 m-3">
              Showing All Products{" "}
              <span class="custom-span">
                (
                {value !== 0 ||
                isCheckedCategory.men !== false ||
                isCheckedCategory.women !== false ||
                isRadioChecked !== 0
                  ? filteredData.length > 0
                    ? `Showing ${filteredData.length} products`
                    : `No product`
                  : `Showing ${mensData.length} products`}
                )
              </span>
            </h5>
            <div className="row mt-5">
              {value !== 0
                ? filteredData.map((product, index) => (
                    <div key={index} className="col-md-4 mb-4">
                      <div className="card" style={{ width: "18rem" }}>
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt="..."
                          height="350rem"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">{product.description}</p>
                          <p>
                            <span className="fw-bold">Price: </span> $
                            {product.price}
                          </p>
                          <div onClick={() => buttonClick(index)}>
                            {!buttonState[index] ? (
                              <a
                                href="#"
                                className="btn btn-secondary m-2"
                                key={index}
                              >
                                Add to Cart
                              </a>
                            ) : (
                              <a
                                href="#"
                                className="btn btn-secondary m-2"
                                key={index}
                              >
                                Go to Cart
                              </a>
                            )}
                          </div>
                          <div onClick={() => btnWishlistClick(index)}>
                            {!wishlistState[index] ? (
                              <a
                                href="#"
                                className="btn btn-secondary m-2"
                                key={index}
                              >
                                Save to wishlist
                              </a>
                            ) : (
                              <a
                                href="#"
                                className="btn btn-secondary m-2"
                                key={index}
                              >
                                Saved to wishlist
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : mensData.map((product, index) => (
                    <div key={index} className="col-md-4 mb-4">
                      <div className="card" style={{ width: "18rem" }}>
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt="..."
                          height="350rem"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">{product.description}</p>
                          <p>
                            <span className="fw-bold">Price: </span> $
                            {product.price}
                          </p>
                          <div onClick={() => buttonClick(index)}>
                            {!buttonState[index] ? (
                              <a
                                href="#"
                                className="btn btn-secondary m-2"
                                key={index}
                              >
                                Add to Cart
                              </a>
                            ) : (
                              <a
                                href="#"
                                className="btn btn-secondary m-2"
                                key={index}
                              >
                                Go to Cart
                              </a>
                            )}
                          </div>
                          <div onClick={() => btnWishlistClick(index)}>
                            {!wishlistState[index] ? (
                              <a
                                href="#"
                                className="btn btn-secondary m-2"
                                key={index}
                              >
                                Save to wishlist
                              </a>
                            ) : (
                              <a
                                href="#"
                                className="btn btn-secondary m-2"
                                key={index}
                              >
                                Saved to wishlist
                              </a>
                            )}
                          </div>
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
