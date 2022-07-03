import { useState } from "react";
import { Grid } from "@mui/material";
import "styles/components/Product/ProductAddCart.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useSelector, useDispatch } from "react-redux";
import { update } from "store/cart";
import { useNavigate } from "react-router-dom";

function ProductAddCart(props) {
  const { Product } = props;
  const navigate = useNavigate();

  const [count, setCount] = useState(
    useSelector((state) => {
      const index = state.cart.items.findIndex((item) => {
        return item.pid === Product.pid;
      });
      if (index >= 0) {
        return state.cart.items[index].count;
      } else {
        return 0;
      }
    })
  );

  const existsInCart = useSelector((state) => {
    const index = state.cart.items.findIndex((item) => {
      return item.pid === Product.pid;
    });
    if (index >= 0) {
      return state.cart.items[index].count;
    } else {
      return false;
    }
  });
  const dispatch = useDispatch();
  function decrement() {
    if (count >= 1) {
      setCount(count - 1);
    }
  }
  function increment() {
    setCount(count + 1);
  }
  return (
    <div className="productCartWrapper">
      <Grid
        container
        className="pricing"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Grid item xs={5}>
          MRP
        </Grid>
        <Grid item xs={1}>
          :
        </Grid>
        <Grid item xs={6} className="actualPrice">
          ₹{Product.actualPrice}
        </Grid>
        <Grid item xs={5}>
          Today's Offer
        </Grid>
        <Grid item xs={1}>
          :
        </Grid>
        <Grid item xs={6} className="price">
          ₹{Product.price}
        </Grid>
      </Grid>
      <Grid
        className="checkout"
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={4}>
          Quantity:
        </Grid>
        <Grid item xs={4} container justifyContent="center" alignItems="center">
          <ButtonGroup variant="outlined" fullWidth color="primary">
            <Button
              sx={{ width: "20%" }}
              onClick={decrement}
              disabled={count <= 0}
            >
              <RemoveIcon />
            </Button>
            <Button
              fullWidth
              disableRipple
              disableFocusRipple
              disableTouchRipple
            >
              {count}
            </Button>
            <Button sx={{ width: "20%" }} onClick={increment}>
              <AddIcon />
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={8}>
          <Button
            fullWidth
            color="highlight2"
            disabled={
                (
                    existsInCart &&
                    existsInCart === count
                ) || 
                (
                    !existsInCart && count===0
                )
            }
            onClick={() => {
              dispatch(
                update({
                  pid: Product.pid,
                  count: count,
                })
              );
            }}
            variant="contained"
          >
            {
                existsInCart 
                ? 
                    count===0
                    ? "Remove From Cart"
                    : "Update Cart"
                : "Add to Cart"
            }
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Button
            fullWidth
            color="highlight1"
            disabled={
                (
                    !existsInCart && count===0
                )
            }
            onClick={() => {
              dispatch(
                update({
                  pid: Product.pid,
                  count: count,
                })
              );
              navigate('/cart');
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

export default ProductAddCart;
