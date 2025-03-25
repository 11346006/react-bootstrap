import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Navbar, Nav, Carousel, Row, Col, Card, Form, Button, Accordion, Modal } from "react-bootstrap";
import Image from 'next/image';
import { useReducer, useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const reducer = (state, active) => {
    switch (active.type) {
      case "name":
        return { ...state, name: active.payload.name };
      case "email":
        return { ...state, email: active.payload.email };
      case "text":
        return { ...state, text: active.payload.text };
      case "handleSubmit":
        return { name: "", email: "", text: "" }
      default:
        return state;
    }
  }


  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    text: ""
  })


  return (
    <>
      <Navbar expand="lg" bg="primary" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-4">東花浪人季</Navbar.Brand>
          <Navbar.Toggle aria-controls="Navbar" />
            <Navbar.Collapse id="Navbar">
              <Nav className="me-auto">
                <Nav.Link href="#Introduction" className="fs-6">活動資訊</Nav.Link>
                <Nav.Link href="#type" className="fs-6">國際學校介紹</Nav.Link>
                <Nav.Link href="#Form-Information" className="fs-6">意見表單</Nav.Link>
                <Nav.Link href="#Form-Information" className="fs-6">聯絡資訊</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel indicators={false} className="min-vh-100">
        <Carousel.Item >
          <Image src="/Images/Special_Event2.jpg" alt="" style={{width:"100%",height:"100vh"}}  width={100} height={100} objectFit="cover" />
          <Carousel.Caption>
            <h2 className="fw-bold">東花浪人季</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="/Images/Special_Event9.jpg" alt="" style={{width:"100%",height:"100vh"}}  width={100} height={100} objectFit="cover" />
          <Carousel.Caption>
            <h2 className="fw-bold">國際交流預告</h2>
            <h4>活動消息：3月3日將迎來來自巴黎藝術學院的代表，與我們練習生分享藝術視野</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="/Images/Special_Event12.jpg" alt="" style={{width:"100%",height:"100vh"}} width={100} height={100} objectFit="cover" />
          <Carousel.Caption>
            <h2 className="fw-bold">主題展覽倒數</h2>
            <h4>提醒大家：藝術展覽倒數計時中，3月28日即將展出的主題作品，提前感受藝術的饗宴</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section id="Introduction" style={{ background: "url(/BeefnoodlesImg/react-bootstrap.png) no-repeat center center/cover" }}>
        <Container className="pt-5">
          <Row>
            <h1 className="py-5 text-center fw-bold">活動資訊</h1>
            <Col md="6" className="mb-5">
              <Accordion defaultActiveKey={"0"}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>活動目的</Accordion.Header>
                  <Accordion.Body>
                    透過「讓仁藝術實驗學校」的〈國際浪人交流計畫〉，我們立志搭建一座通往世界的文化橋樑，將
                    學校的教育理念與臺灣文化瑰寶融入國際交流的大舞台中。此計畫的緣起源自對於在地域、世界趨
                    勢和國際藝術領域不斷演進的渴望，期望藉由學生的國際交流，將學校凝聚的智慧和藝術光輝發揚
                    光大
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>參與對象</Accordion.Header>
                  <Accordion.Body>
                    <p>A. 學生家長：活動中的家長之夜將提供練習生家長深入了解學校的教學理念和藝術教育特色的機
                    會，以及親身體驗孩子的學習環境。</p>
                    <p>B. 外賓：包括其他友校的代表、教育專業人士、曠野藝術家等，透過參與各種活動，我們期待促
                    進跨學校的合作與交流。</p>
                    <p>C. 姐妹校學生：活動中力邀姐妹校的學生參與，加入國際化的觀摩與互動。</p>
                    <p>D. 其他平台或學校的教育工作者：期待來自實驗學校的同盟學校，透過分享與學習提升各校的教
                    學品質，共享精神與研究資源。</p>
                    <p>E. 對藝術、教育和跨文化交流感興趣的個人：〈東花浪人季〉活動開放給對這些主題有濃厚興趣
                    的一般參與者，我們期許讓更多人受益於這場豐富的交流盛會！</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>辦理方法</Accordion.Header>
                  <Accordion.Body>
                    <p>1. 申請流程：
                    網路申請表格：提供線上申請表格，包括基本資料、學歷、語言能力等項目。
                    文件提交：學生需上傳相關文件，如學習證明、語言成績、推薦信等。</p>
                    <p>2. 申請資格：
                    學術背景：要求具備相應的學術背景，滿足姐妹學校留學要求。
                    語言要求：確保已完成讓仁國際語言基礎課程，以足夠語言能力適應學習環境。</p>
                    <p>3. 面試程序：
                    安排線上面試，國際三校委員初步評估學生的藝術與語言能力，同時了解學生的適應能力。</p>
                    <p>4. 接待與安排：
                    導師制度：讓仁藝術實驗高中提供導師制度，協助國際學生/交換學生融入校園。
                    接機服務：由姐妹校的交流委員會提供接機服務，確保讓仁練習生安全抵達。</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>學生國際交流機會</Accordion.Header>
                  <Accordion.Body>
                    <p>• 國際藝術大賽金獎： 學校練習生在國際藝術大賽中脫穎而出，榮獲金獎，以優異的藝術創作在
                    國際舞台上獲得高度肯定。</p>
                    <p>• 國外學術期刊發表藝術創作分享： 練習生透過學校的國際學術合作專案，有機會在國外學術期
                    刊上分享對藝術創作的心得和經驗，促進跨文化的藝術交流。</p>
                    <p>• 國際藝術家邀約展覽： 學校藝術系練習生受邀由國際知名藝術家親自邀約參與展覽，展現出色
                    的創作實力，成為國際藝術舞台上的亮點。</p>
                    <p>• 留學申請全額獎學金： 學生透過參與學校的國際交流計畫，展現了卓越的學術和藝術實力，成
                    功獲得國外大學提供的全額獎學金，為未來的留學之路鋪平了道路。</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col md="6" className="d-flex justify-content-center">
              <Carousel fade controls={false} indicators={false} interval={3000} style={{ width: "400px", height: "400px", }} >
                <Carousel.Item>
                  <Image src="/Images/Event_Poster1.png" alt="" width={400} height={450} objectFit="cover"></Image>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src="/Images/Event_Poster3.png" alt="" width={400} height={450} objectFit="cover"></Image>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src="/Images/Event_Poster4.png" alt="" width={400} height={450} objectFit="cover"></Image>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="min-vh-100" id="type" style={{ background: "url(/BeefnoodlesImg/typeBackground.png) no-repeat center center/cover", backgroundAttachment: "fixed" }}>
        <Container className="pt-5">
          <Row>
            <h1 className="text-center fw-bold py-5">國際學校介紹</h1>
            <Col lg="4" className="mb-4">
              <Card>
                <Card.Img src="/Images/紐約藝術聯盟學院Logo.png" style={{ height: "350px", objectFit: "cover" }}></Card.Img>
                <Card.Body>
                  <Card.Title className="text-center fw-bold fs-3" >紐約藝術聯盟學院</Card.Title>
                  <Card.Text className="text-center">
                    地點： 美國紐約州紐約市
                    特色：作為紐約市的藝術教育樞紐，該學院致力於將學生引領到豐富的藝術世界。學院擁有優越的
                    城市資源，提供學生與當地藝術機構和專業藝術家合作的機會
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" className="mb-4">
              <Card>
                <Card.Img src="/Images/賓州人文學院Logo.png" style={{ height: "350px", objectFit: "cover" }}></Card.Img>
                <Card.Body>
                  <Card.Title className="text-center fw-bold fs-3" >賓州人文學院</Card.Title>
                  <Card.Text className="text-center">
                    地點：賓夕法尼亞州費城
                    特色：以人文學科和傳統藝術聞名，注重培養學生的文學、哲學和歷史等人文素養。學院提供獨特
                    的文學藝術課程，並鼓勵學生參與社區文化活動
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" className="mb-4">
              <Card>
                <Card.Img src="/Images/太平洋藝術聚落學院Logo.png" style={{ height: "350px", objectFit: "cover" }}></Card.Img>
                <Card.Body>
                  <Card.Title className="text-center fw-bold fs-3" >太平洋藝術聚落學院</Card.Title>
                  <Card.Text className="text-center">
                    地點：加利福尼亞州洛杉磯
                    特色：以多元文化藝術和科技整合為特點，學院強調創新和跨領域合作。學生在這裡有機會參與融
                    合藝術與科技的專案，培養未來藝術家在數位時代的創作能力
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="Form-Information" style={{ background: "url(/BeefnoodlesImg/Form-InformationBG.png) no-repeat top center /cover", }}>
        <Container className="p-lg-5 p-3">
          <Row className="p-lg-5 p-3">
            <Col lg="6" className="mb-4">
              <h1 className="fw-bold">活動報名</h1>
              <Form onSubmit={(e) => { e.preventDefault(); handleShow(); dispatch({ type: "handleSubmit" }) }}>
                <Form.Group className="py-2">
                  <Form.Label>姓名：</Form.Label>
                  <Form.Control type="text" placeholder="name" value={state.name} name="name" onChange={(e) => { dispatch({ type: "name", payload: { name: e.target.value } }) }} required></Form.Control>
                  <Form.Text>請填寫真實姓名</Form.Text>
                </Form.Group>
                <Form.Group className="py-2">
                  <Form.Label>電子郵件：</Form.Label>
                  <Form.Control type="email" placeholder="email" value={state.email} name="email" onChange={(e) => { dispatch({ type: "email", payload: { name: e.target.value } }) }} required></Form.Control>
                </Form.Group>
                <Form.Group className="py-2">
                  <Form.Label>報名理由：</Form.Label>
                  <Form.Control type="text" placeholder="text" value={state.text} name="text" onChange={(e) => { dispatch({ type: "text", payload: { name: e.target.value } }) }} required></Form.Control>
                </Form.Group>
                <Button type="reset" className="mt-2 me-2 fw-bold" variant="outline-danger">清除</Button>
                <Button type="submit" className="mt-2 fw-bold" variant="outline-primary">送出</Button>
              </Form>
            </Col>
            <Col lg="6" className="mb-4">
              <h1 className="fw-bold">聯絡資訊</h1>
              <div className="p-3">
                <h4>電話：0800-514-914 有藝術，有意思！</h4>
                <h4>Facebook：東花浪人季官方粉絲頁</h4>
                <h4>Instagram 搜尋：讓仁藝術實驗學校</h4>
                <h4 className="mb-5">電子郵件：service@mbae.edu.tw</h4>
                <h5 className="fw-bold">融合藝術與文化的盛宴即將開啟，東花浪人季誠摯邀請您參與這場不可錯過的慢動作探索。攜手家
                  人和摯友，共享東花浪人季獨具的藝術饗宴，品味美食、沉浸文化，感受藝術的心靈震撼</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
                <p className="text-center">&copy;讓仁藝術國際實驗高級學校</p>
            </Col>
          </Row>
        </Container>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>活動報名送出成功</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          感謝您報名此活動，待某人審核後將以郵件通知您
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>關閉</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
