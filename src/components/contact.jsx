import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
             <div className="col-md-8">
               <div className="row">
                <div className="section-title">
                  <h2>Ole yhteydessä</h2>
                  <p>
                    Ota yhteyttä allaolevilla tavoilla.
                  </p>


                <p>

                  <a href="https://www.linkedin.com/in/karieronen71/">Kari Eronen LinkedIn</a>
                  </p>

                  <p>
                  <a href="http://zilant.tech">Zilant - kansainvälinen yhteistyökumppani</a>
                  </p>

                  <p>
                  <a href="mailto:k.eronen@zilant.tech">Lähetä sähköpostia email: k.eronen@zilant.tech</a>
                  </p>
                  <p>
                <a href="tel:+358400633529">Soita +358400633529</a>
                </p>
              </div>

              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Yhteystiedot</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Osoite
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Puhelin
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Sähköposti
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.linkedin : "/"}>
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                    <a href="www.yrittajat.fi"><img src="/img/team/jasenbanneri_medium.png" ></img>
                    </a>
                    </li>



                    <li>
                    Design by{" "}
                    <a href="http://www.templatewire.com" rel="nofollow">
                      TemplateWire
                    </a>
                    </li>
                  </ul>
                </div>


          </div>
        </div>
      
      </div>
    </div>
   </div>

    );
  }
}

export default Contact;
