import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Navigoi</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              Constreng - Constructive engineering
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  Yhtiöstä
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  Meistä
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Palvelut
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Galleria
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Todettua
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Työntekijät
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Ota yhteyttä
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
