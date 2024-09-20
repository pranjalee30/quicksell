import React from "react";
import "./styles.css";

const Ticket = ({ id, title, tag, status, priority }) => {
  
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";

  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        <div
          className="imageContainer relative"
          style={{ width: "30px", height: "30px" }}
        >
          <img
            style={{ width: "95%", height: "95%", borderRadius: "50%" }}
            src={`${process.env.PUBLIC_URL}/user.png`}alt="UserImage"
          />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        {!isStatus &&
          (
            status === "Backlog" ? (
              <img src={`${process.env.PUBLIC_URL}/icons_FEtask/Backlog.svg`} alt="Backlog"  style={{ fontSize: "14px" }}/>
            )
              : status === "Todo" ? (
                <img src={`${process.env.PUBLIC_URL}/icons_FEtask/To-do.svg`}  alt="Todo" style={{ fontSize: "13px", color: "#ddeded" }}/>
              ) : status === "In progress" ? (
                <img src={`${process.env.PUBLIC_URL}/icons_FEtask/in-progress.svg`} alt="In progess"  style={{ fontSize: "14px", color: "#f2d750" }} />
              ) : status === "Done" ? (
                <img src={`${process.env.PUBLIC_URL}/icons_FEtask/Done.svg`} alt="Done"  />
              )
                : (
                  <img src={`${process.env.PUBLIC_URL}/icons_FEtask/Canceled.svg`} alt="Canceled"  />
                ))}
        <span style={{ margin: "0.2px" }}>{title}</span>
      </div>
      <div className="cardTags">
        {!isPriority ? (
          <div className="tags color-grey">
            {priority === 1 || priority === 2 || priority === 3 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-signal"
                viewBox="0 0 16 16"
              >
                <rect x="1" y="10" width="3" height="2" />
                <rect
                  x="5"
                  y="7"
                  width="3"
                  height="5"
                  opacity={priority === 2 || priority === 3 ? 1 : 0.25}
                />
                <rect
                  x="9"
                  y="4"
                  width="3"
                  height="8"
                  opacity={priority === 3 ? 1 : 0.25}
                />
              </svg>
            ) : priority === 4 ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 1C1.91067 1 1 1.91067 1 3V13C1 14.0893 1.91067 15 3 15H13C14.0893 15 15 14.0893 15 13V3C15 1.91067 14.0893 1 13 1H3ZM7 4H9L8.75391 8.99836H7.25L7 4ZM9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z" fill="#FB773F"/>
</svg>

            ) : (
              <p><img src={`${process.env.PUBLIC_URL}/icons_FEtask/3 dot menu.svg`} alt="3 dot menu"  /></p>
            )}
          </div>
        ) : null}
        {tag?.map((element, index) => {
          return (
            <div key={index} className="tags color-grey">
              {" "}
              <span>•</span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Ticket;
