import Button from "antd-button-color";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
function Footer() {
  let { user } = useSelector((state) => ({ ...state }));
  let history = useHistory();
  return (
    <div className="mainfooterwioiuw">
      <FootContainer>
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              {/* Column 1 */}
              <div className="col-md-3 col-sm-6">
                <h4>Adopti</h4>
                <ul className="list-unstyled">
                  <h3>ABOUT ADOPTI</h3>
                  <li>
                    <a href="/About">About Adopti</a>
                  </li>
                  <li>
                    <a href="/FAQ">FAQs</a>
                  </li>
                  <li>
                    <a href="/Contact">Contact Us</a>
                  </li>
                </ul>
              </div>
              {/* Column 2 */}
              <div className="col-md-3 col-sm-6">
                <br />
                <ul className="list-unstyled pt-3">
                  <h3>PET ADOPTION</h3>
                  <li>
                    <a href="/dogadoption">Dog Adoption</a>
                  </li>
                  <li>
                    <a href="/catadoption">Cat Adoption</a>
                  </li>
                  <li>
                    <a href="/otherpetadoption">Other Pet Adoption</a>
                  </li>
                </ul>
              </div>
              {/* Column 3 */}
              <div className="col-md-3 col-sm-6">
                <br />
                <ul className="list-unstyled pt-3">
                  <h3>PET CARE TOPICS</h3>
                  <li>
                    <a href="/dogcare">Dog Care</a>
                  </li>
                  <li>
                    <a href="/catcare">Cat Care</a>
                  </li>
                  <li>
                    <a href="/helppets">Helping Pets</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 pt-5 mb-2">
                {user && user.token ? (
                  ""
                ) : (
                  <>
                    {" "}
                    <h3>
                      To get the latest on Adopti.tn and pet care, sign up to
                      hear from us.
                    </h3>
                    <Button
                      onClick={() => history.push("/sign-up")}
                      type="primary"
                      shape="round"
                      size="large"
                      icon={<i class="fas fa-user-plus "></i>}
                    >
                      {" "}
                      SIGN UP
                    </Button>
                  </>
                )}
              </div>
            </div>
            {/* Footer Botom */}
            <hr />
            <div className="footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()} Adopti.tn All Right Reserved
                (First React Project)
              </p>
              <a href="/">
                <i class="fab fa-facebook fa-3x float-right pr-4  "></i>
              </a>
              <a href="/">
                <i class="fab fa-twitter fa-3x float-right pr-4 "></i>
              </a>
              <a href="/">
                <i class="fab fa-instagram fa-3x float-right pr-4"></i>
              </a>
              <a href="/">
                <i class="fab fa-youtube fa-3x float-right pr-4"></i>{" "}
              </a>
              <a href="/">
                <i class="fab fa-pinterest-p  fa-3x float-right pr-4"></i>
              </a>
            </div>
          </div>
        </div>
      </FootContainer>
    </div>
  );
}

export default Footer;

const FootContainer = styled.footer`
  .footer-middle {
    background: #212529;
    padding-top: 3rem;
    color: var(--mainWhite);
    margin-bottom: 20px;
  }

  .footer-bottom {
    padding-top: 0.6rem;
    padding-bottom: 3rem;
    font-size: x-small;
  }
  ul li a {
    color: var (--mainGrey);
  }
  ul li a::hover {
    color: var (--mainLightGrey);
  }
  h4 {
    color: #fff;
  }
  h3 {
    font-size: small;
    color: white;
  }
`;
