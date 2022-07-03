import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "api";
import { Divider, Grid } from "@mui/material";
import { update, remove } from "store/cart";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";

import "styles/pages/Cart.css";
import { Link } from "react-router-dom";
import Navbar from "components/Layout/Navbar";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const subTotal = getTotalPrice();
  const grandTotal = subTotal - subTotal * 0.2;
  function getTotalPrice() {
    let price = 0;
    items.forEach((item) => {
      const Product = getProduct(item.pid);
      price += Number(Product.price) * Number(item.count);
    });
    return price;
  }
  return (
    <div className="wrapper">
      <Navbar />
      <h1 className="cartHeading">Your Cart</h1>
      <div className="itemListWrapper">
        {items.length === 0 ? (
          <>
            <h3>You Don't have any Items in your cart</h3>
            <Link to="/app">Shop now</Link>
          </>
        ) : (
          ""
        )}
        {items.map((item) => {
          return <Item item={item} />;
        })}
      </div>
      <Grid
        className="itemTotalPrice"
        container
        justifyContent="right"
        spacing={2}
      >
        <Grid item container xs={12} justifyContent="right">
          <Grid item xs={2}>
            Sub Total
          </Grid>
          <Grid item xs={1}>
            :
          </Grid>
          <Grid item xs={1} className="currency">
            {subTotal}
          </Grid>
        </Grid>
        <Grid item container xs={12} justifyContent="right">
          <Grid item xs={2}>
            Discount
          </Grid>
          <Grid item xs={1}>
            :
          </Grid>
          <Grid item xs={1}>
            20%
          </Grid>
        </Grid>
        <Grid item container xs={12} justifyContent="right">
          <Grid item xs={2}>
            Grand Total
          </Grid>
          <Grid item xs={1}>
            :
          </Grid>
          <Grid item xs={1} className="currency grandTotal">
            {grandTotal}
          </Grid>
        </Grid>
        <Grid item container xs={4} justifyContent="right">
          <Button
            fullWidth
            color="highlight1"
            disabled={items.length === 0}
            onClick={() => {
              alert("Success");
            }}
            variant="contained"
          >
            BUY NOW
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

function Item({ item }) {
  const Product = getProduct(item.pid);
  const dispatch = useDispatch();
  const itemCount = useSelector((state) => {
    const index = state.cart.items.findIndex((item) => {
      return item.pid === Product.pid;
    });
    if (index >= 0) {
      return state.cart.items[index].count;
    } else {
      return 0;
    }
  });
  function increment() {
    dispatch(
      update({
        pid: Product.pid,
        count: itemCount + 1,
      })
    );
  }
  function decrement() {
    if (itemCount > 1) {
      dispatch(
        update({
          pid: Product.pid,
          count: itemCount - 1,
        })
      );
    }
  }
  return (
    <>
      <Grid
        className="cart--item"
        item
        xs={12}
        container
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Grid item xs={5} textAlign="left">
          <h3>{Product.name}</h3>
        </Grid>
        <Grid item xs={5} justifyContent="center" alignItems="center">
          <img
            className="cart--item--image"
            src={Product.image}
            alt={Product.name}
          />
        </Grid>
        <Grid
          item
          xs={2}
          rowSpan={2}
          onClick={() => {
            dispatch(
              remove({
                pid: Product.pid,
              })
            );
          }}
        >
          <IconButton color="error">
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid item xs={3} alignItems="left">
          <ButtonGroup
            variant="outlined"
            fullWidth
            color="primary"
            size="small"
          >
            <Button
              sx={{ width: "20%" }}
              onClick={decrement}
              disabled={itemCount <= 1}
            >
              <RemoveIcon />
            </Button>
            <Button
              fullWidth
              disableRipple
              disableFocusRipple
              disableTouchRipple
            >
              {itemCount}
            </Button>
            <Button sx={{ width: "20%" }} onClick={increment}>
              <AddIcon />
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={1}>
          x
        </Grid>
        <Grid item xs={2} className="currency">
          {Product.price}
        </Grid>
        <Grid item xs={6} className="currency">
          <h3 className="itemTotal">
            {Number(Product.price) * Number(itemCount)}
          </h3>
        </Grid>
      </Grid>
      <Divider className="divider" />
    </>
  );
}

export default Cart;
