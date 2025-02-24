import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CancelIcon from "@mui/icons-material/Cancel";
import { SvgIcon } from "@mui/material";
import Badge from "@mui/material/Badge";
import { grey } from '@mui/material/colors';


export default function WishListPage() {
  const [wishlistData, setWishlistData] = useState([]);
  const [loading, setIsLoading] = useState(false);

  console.log("abhay");
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

  const handleWishlistDelete = async (item) => {
    await fetch(`http://localhost:5000/wishlist/${item._id}`, {
      method: "DELETE",
    })
      .then(async (response) => {
        const data = await response.json();
        if (!data.ok) {
          console.log("no data found");
        }
      })
      .catch((e) => {
        console.log("error while finding delete wishlist id", e);
      });

    window.location.reload();
  };

  return (
    <>
      <Header wishlistBadge={wishlistData.length} />
      <div className="container mt-5">
        <h5>My Wishlist</h5>
        <div class="row mt-5">
          {wishlistData.map((item, index) => {
            return (
              <div className="col-md-3 mb-5">
                <div class="card" key={index}>
                  <Badge
                    badgeContent={"X"}
                    color="primary"
                    anchorOrigin="top-right"
                    onClick = {() => handleWishlistDelete(item)}
                    style={{ cursor: "pointer" }}
                  >
                  </Badge>
                  <img src={item.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">
                      <b>${item.price}</b>
                      <br />
                      <button className="btn btn-primary m-2">
                        Move to Cart
                      </button>
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
