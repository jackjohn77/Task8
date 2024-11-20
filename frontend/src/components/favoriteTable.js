// Import frameworks and library's
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, Container } from "react-bootstrap";

// Import store Slice reducers.
import { favoriteAdd, favoriteDelete } from "../store/favoriteState";

// Import image
import trash from "../images/trash.png";

/* Favorite table component, takes the array objects from the favoriteState and
populates a table using map function with ability to edit the quantity 
and delete via buttons. Button clicks invoke the the favoriteState reducers*/
export default function FavoriteTable() {

  // Retrieve the favorite state from the Redux store.
  const favorite = useSelector((state) => state.favorite.favorite);

  // Retrieve the totalPrice state from the Redux store
  const totalPrice = useSelector((state) => state.favorite.total);
  const dispatch = useDispatch();

  return (
    <div className="full-height">
      <Container className="table-container grey-background">
        <Table className="content" striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Item</th>
              <th className="actions-column">Selection</th>
              <th className="actions-column">cost</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {favorite.map((favoriteItems, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={favoriteItems.image}
                    alt={favoriteItems.title}
                    width="30px"
                  ></img>
                </td>
                <td>{favoriteItems.title}</td>

                <td>{favoriteItems.selectedColour}</td>
                <td>{favoriteItems.price}</td>
                <td>{favoriteItems.quantity}</td>

                <td>{(favoriteItems.quantity * favoriteItems.price).toFixed(2)}</td>
                <td className="button-group">
                  <Button
                    variant="light"
                    onClick={() => dispatch(favoriteAdd(favoriteItems))} // Increase the favorite item.
                  >
                    +
                  </Button>
                  <Button
                    variant="light"
                    onClick={() => dispatch(favoriteDelete(index))} // Delete the whole favorite item.
                  >
                    <img src={trash} alt="del" width="10px"></img>
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="5" style={{ textAlign: "right" }}>
                <strong>Total:</strong>
              </td>
              <td>{totalPrice.toFixed(2)}</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
