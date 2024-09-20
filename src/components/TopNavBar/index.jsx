import React, { useEffect, useState } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { selectData } from "../../store/Actions/DataAction";

const setLocalStorageItems = ()=>{
  localStorage.setItem("group", "status");
  localStorage.setItem("order", "priority");
}

setLocalStorageItems();

const getOrder = () => {
  if (localStorage.getItem("order")) {
    return localStorage.getItem("order");
  } else {
    return "priority";
  }
};
const getGroup = () => {
  if (localStorage.getItem("group")) {
    return localStorage.getItem("group");
  } else {
    return "status";
  }
};

const NavBar = () => {

  const [clickOnnDisp, setClickOnnDisp] = useState(false);
  const dispatch = useDispatch();
  const { allTickets, allUser } = useSelector((state) => state.DataReducer);
  const [groups, setGroups] = useState(getGroup());
  const [allOrders, setAllOrders] = useState(getOrder());

  const handleGroups = (e, valueBool) => {
    if (valueBool) {
      setGroups(e.target.value);
      setClickOnnDisp(!clickOnnDisp);
      localStorage.setItem("group", e.target.value);
    } else {
      setAllOrders(e.target.value);
      setClickOnnDisp(!clickOnnDisp);
      localStorage.setItem("order", e.target.value);
    }
  };

  useEffect(() => {
    if (groups === "user") {
      dispatch(
        selectData(
          groups,
          {
            allTickets,
            allUser,
          },
          allOrders
        )
      );
    } else {
      dispatch(selectData(groups, allTickets, allOrders));
    }
  }, [allTickets, dispatch, groups, allUser, allOrders]);

  return (
    <div className="top-header" style={{ paddingLeft: "13px" }}>
      <div className="displayButton">
        <button
          className="p-10 f-16 btn"
          onClick={() => setClickOnnDisp(!clickOnnDisp)}
        >
          {" "}
          <img src={`${process.env.PUBLIC_URL}/icons_FEtask/Display.svg`} alt="Display"  /> Display
        </button>
        {clickOnnDisp && (
          <>
            <div className="dropOnClick flex-gap-10 p-10">
              <div className="selectGroup flex-sb">
                <span style={{ fontSize: "14px", color: "#555B5A" }} >Grouping</span>
                <select
                  value={groups}
                  onChange={(e) => handleGroups(e, true)}
                  className="selectStyle"
                  name="group"
                  id="group"
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="selectGroup flex-sb">
                <span style={{ fontSize: "14px", color: "#555B5A" }}>Ordering</span>
                <select
                  value={allOrders}
                  onChange={(e) => handleGroups(e, false)}
                  className="selectStyle"
                  name="order"
                  id="order"
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default NavBar;
