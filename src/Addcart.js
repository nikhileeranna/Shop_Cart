import { useState } from "react";
import Button from "@material-ui/core/Button";

export default function AddCart({ cartCount, setCartCount }) {
  const [add, setAdd] = useState(false);

  return (
    <>
      <div>
        <Button
          type="button"
          className={
            add ? "btn btn-dark btn-lg" : "btn btn-secondary btn-lg active"
          }
          onClick={() => {
            setCartCount(add ? cartCount - 1 : cartCount + 1);
            setAdd(!add);
          }}
        >
          {add ? "Remove from " : " Add to "} Cart
        </Button>
      </div>
    </>
  );
}
