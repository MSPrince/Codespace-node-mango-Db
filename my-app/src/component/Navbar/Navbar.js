import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand css-text-mask" to="/">
            Booking.comcgcjghcjhgcfhjyfcj
            vhvhjvhj
            vvhjk
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <Link className="nav-link me-3" to="#">
                  <i
                    className="fa-solid fa-bed me-2"
                    style={{ color: "#FFD43B" }}
                  ></i>{" "}
                  Stays{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="#">
                  {" "}
                  <i
                    className="fa-solid fa-plane me-2"
                    style={{ color: "#FFD43B" }}
                  ></i>{" "}
                  Flights{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="#">
                  <i
                    className="fa-solid fa-hotel me-2"
                    style={{ color: "#FFD43B" }}
                  ></i>{" "}
                  Flights + Hotel{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="#">
                  <i
                    className="fa-solid fa-car me-2"
                    style={{ color: "#FFD43B" }}
                  ></i>{" "}
                  Car Rentals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="#">
                  <i
                    className="fa-solid fa-magnet me-2"
                    style={{ color: "#FFD43B" }}
                  ></i>{" "}
                  Attractions{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-3" to="#">
                  <i
                    className="fa-solid fa-taxi me-2"
                    style={{ color: "#FFD43B" }}
                  ></i>{" "}
                  Airport Taxis{" "}
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav lo">
              <li className="nav-item">
                <Link
                  to="/hotels/SignUp"
                  className="nav-link login1"
                  target="_parent"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>{" "}
          {/* navbar-collapse.// */}
        </div>{" "}
        {/* container-fluid.// */}
      </nav>
    </>
  );
}

export default Navbar;
