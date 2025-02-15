import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CancelIcon from "@mui/icons-material/Cancel";
import { SvgIcon } from "@mui/material";

export default function WishListPage() {
  const [wishlistData, setWishlistData] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchWishlistProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:5000/wishlist/list");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        console.log("wishlist page:", data);
        setWishlistData(data);
      } catch (error) {
        console.log("Error fetching the data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchWishlistProducts();
  }, []);

  return (
    <>
      <Header wishlistBadge={wishlistData.length} />
      <div className="container mt-5">
        <h5>My Wishlist</h5>
        <div class="row">
          {wishlistData.map((item, index) => {
            return (
              <div className="col-md-3 mb-5">
                <div class="card" key={index}>
                <SvgIcon>
                    <CancelIcon/>
                  </SvgIcon>
                  <img src={item.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">
                      <b>${item.price}</b>
                      <br />
                      <button>Move to Cart</button>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
