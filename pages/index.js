import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import {
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const divStyle = {
  marginLeft: "10px",
};

const divStyle2 = {
  marginLeft: "25px",
};

function Feed({ data }) {
  return (
    <div
 style={{
                backgroundImage:
                    "url(" + `${require("../public/background2.jpg")}` + ")",
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
>

      <Head>
        <title>Novel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Container className={styles.about}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column  mt-5">
                  <Nav.Item>
                    <Nav.Link className="nav-link1" eventKey="first">
                      {" "}
                      profile
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link className="nav-link1" eventKey="second">
                      partnership
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link className="nav-link1" eventKey="third">
                      contacts
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link className="nav-link1" eventKey="four">
                      confirmation
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col sm={9}>
                {/* //______________________________________________________________________________________________________________________ */}
                <Tab.Content className="mt-5">
                  <Tab.Pane eventKey="first">
                    <img
                      src="/static/web600wh.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                    <p className="mt-3 text-center font-weight-bold ">

                       Привет! Меня зовут Роман.Профессионально занимаюсь видеомонтажом
                       с 2017 года (а непрофессионально с 2010) Работаю в
                    Adobe After Effect, Photoshop, Premiere Pro, Illustrator,
                    Audition, 3DS Max. В планах изучить SideFX Houdini.
                    Имею навыки в web-разработке на javascript, в частности под nodejs
                    (да, этот сайт написал тоже я).
                       Координировал график съемок с актерами и съемочной группой,
                    и работал с задачами пост-продакшена, такими как просмотр
                    отснятого материала, принятие редакционных решений, черновые версии,
                    корректировка звука, цветокоррекция и окончательное редактирование.
                       Работал с заказчиками над сборкой необработанных изображений,
                    видеоматериалов и сценариев в готовый продукт для рынка социальных сетей.
                     Создавал визуальные эффекты для пост-обработки (Photoshop, After Effects,
                    Premiere Pro), чтобы сформировать логичную, впечатляющую сюжетную линию
                    в конечном итоге

                    </p>
                  </Tab.Pane>
                  {/* //______________________________________________________________________________________________________________________ */}
                  <Tab.Pane
                    eventKey="second"
                    className="mt-3 text-center font-weight-bold"
                  >
                    <img
                      src="/static/partners.png"
                      className="img-fluid "
                      alt="image"
                    />

                    <p className="mt-3 text-center font-size:20px">
                      Сотрудничество с одними из самых передовых организаций
                      города и области.
                    </p>
                  </Tab.Pane>
                  {/* //______________________________________________________________________________________________________________________ */}
                  <Tab.Pane eventKey="third" className="position-top">
                    <img
                      src="/static/web400wh.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                    <Row>
                      <Col
                        md={2}
                        className="text-center mt-5  text-md-center offset-md-auto"
                      >
                        <span style={{ fontSize: "30px", color: "#9e005c" }}>
                          <AiOutlineMail className={styles.icon} />
                          <a
                            href="mailto:novel_rn@outlook.com"
                            style={divStyle}
                          >
                            {" "}
                            emaiL
                          </a>
                        </span>
                      </Col>

                      <Col md={2} className="text-center mt-5 offset-md-1">
                        <span
                          style={{
                            fontSize: "30px",
                            color: "rgb(0, 123, 255)",
                          }}
                        >
                          <AiOutlineFacebook className={styles.icon} />
                          <a
                            href="https://www.facebook.com/vip.Novel/"
                            style={divStyle}
                          >
                            {" "}
                            Facebook{" "}
                          </a>
                        </span>
                      </Col>

                      <Col
                        md={2}
                        className="text-center mt-5 text-md-center offset-md-1"
                      >
                        <span style={{ fontSize: "30px", color: "#9e005c" }}>
                          <AiOutlineInstagram className={styles.icon} />
                          <a
                            href="https://www.instagram.com/novel_rn/"
                            style={divStyle}
                          >
                            {" "}
                            Instagram
                          </a>
                        </span>
                      </Col>

                      <Col
                        md={2}
                        className="text-center mt-5 text-md-center offset-md-1"
                      >
                        <span style={{ fontSize: "30px", color: "green" }}>
                          <AiOutlineWhatsApp className={styles.icon} />
                          <a href=" https://wa.me/77777423055" style={divStyle}>
                            {" "}
                            WhatsApp
                          </a>
                        </span>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  {/* //______________________________________________________________________________________________________________________ */}
                  <Tab.Pane eventKey="four" className=" text-center">
                    {/* <Container> */}
                      {/* <Row> */}
                        <Col className=" text-center ">
                          <div>
                            <img
                              src="/static/web10.jpg"
                              className="img-fluid"
                              alt="img"
                              width={680}
                              height={450}
                            />
                          </div>
                          <div className="text-center mt-5 offset-md">
                            <img
                              src="/static/web20.jpg"
                              className="img-fluid"
                              alt="img"
                              width={680}
                              height={450}
                            />
                          </div>
                          </Col>
<Col>
                          <div className="text-center mt-5 offset-md">
                            <img
                              src="/static/web30.jpg"
                              className="img-fluid"
                              alt="img"
                              width={680}
                              height={450}
                            />
                          </div>

                          <div className="text-center mt-5 offset-md">
                            <img
                              src="/static/web40.jpg"
                              className="img-fluid"
                              alt="picture"
                              width={1000}
                              height={700}
                            />
                          </div>
                        </Col>
                      {/* </Row> */}
                    {/* </Container> */}
                  </Tab.Pane>
                  {/* //______________________________________________________________________________________________________________________ */}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
        <hr />
        <Footer />
      </div>
</div>
  );
}
export default Feed;
