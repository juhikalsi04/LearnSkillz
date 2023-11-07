/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMenus } from "../actions/menuAction.js";
import { getRestaurants } from "../actions/restaurantAction.js";
import Fooditem from "./Fooditem.js";
import { setRestaurantId } from "../actions/cartAction.js";

const Menu = (storeId) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { menus, loading, error } = useSelector((state) => state.menus);
  dispatch(setRestaurantId(id));

  useEffect(() => {
    dispatch(getMenus(id));
    dispatch(getRestaurants());
  }, [dispatch, id, storeId]);

  return (
    <div>
      {loading ? (
        <p>Loading menus</p>
      ) : error ? (
        <p>Error:{error}</p>
      ) : menus && menus.length > 0 ? (
        menus.map((menu) => (
          <div key={menu._id}>
            <h2>{menu.category}</h2>
            <hr />
            {menu.items && menu.items.length > 0 ? (
              <div className="row">
                {menu.items.map((fooditem) => (
                  <Fooditem key={fooditem._id} fooditem={fooditem} />
                ))}
              </div>
            ) : (
              <p>No fooditems avaliable</p>
            )}
          </div>
        ))
      ) : (
        <p>No menus avaliable</p>
      )}
    </div>
  );
};

export default Menu;
