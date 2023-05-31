import React from "react";
import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { AppContext } from "../../context/AppContext";
import CartCards from "../../components/CartCards/CartCards";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const { cart } = useContext(AppContext);

  return (
    <>
     <NavLink
          to={"/ordering"}
          className="orderingLink"
        >
          <h2>ORDERING</h2>
        </NavLink>

      {cart.length !== 0 ? (
        <div className="cartCards">
          {cart.map((product) => (
            <CartCards
              key={product.id}
              id={product.id}
              productImage={product.imageURL}
              productName={product.title}
              productPrice={product.price}
              quantity={product.quantityInCart}
            />
          ))}
         
        </div>
      ) : (
        <div>
          <div
            style={{
              height: "70vh",
              backgroundImage: `url("https://www.adasglobal.com/img/empty-cart.png")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "50vw",
            }}
          ></div>
          <IconButton
            style={{
              marginTop: "-40px",
              backgroundColor: "green",
              borderRadius: "5px",
            }}
            color=""
            aria-label="add to shopping cart"
          >
            <a
              style={{
                color: "#d8ec81",
                textDecoration: "none",
                fontWeight: "700",
              }}
              href="products"
            >
              Go shopping
            </a>
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      )}
    </>
  );
}
