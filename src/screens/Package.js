import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { happyPackage } from "../data";
import { FiArrowRightCircle } from "react-icons/fi";
import { withTranslation } from "react-i18next";

//=================== start Stepper ===================
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0)",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  icon: {
    color: "#007bff",
    // "&$activeIcon": {
    //   color: theme.palette.secondary.main,
    // },
    // "&$completedIcon": {
    //   color: theme.palette.secondary.main,
    // },
  },
  activeIcon: {},
  completedIcon: {},
}));
function getSteps() {
  return [
    "เลือกแพคเกจ",
    "จัดการโลโก้ และ แบนเนอร์",
    "จัดการข้อมูลผู้ประกอบการ และ ตำแหน่งงานที่ลงประกาศ",
    "รีวิว และ ลงประกาศงาน",
  ];
}
function HorizontalStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(null);
  const steps = getSteps();

  return (
    <div className="d-none d-xs-none d-sm-none d-md-none d-lg-block">
      <div className={classes.root} style={{ maxWidth: 1200 }}>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          style={{ backgroundColor: "transparent" }}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel StepIconProps={{ classes: { root: classes.icon } }}>
                {label}
              </StepLabel>
              {/* style={{backgroundColor:'blue', color:'red'}} */}
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
}
function VerticalStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(null);
  const steps = getSteps();

  return (
    <div className="d-block d-sm-block d-md-block d-md-none d-lg-none d-xl-none">
      <div
        className={classes.root}
        style={{
          maxWidth: 1200,
          textAlign: "left",
        }}
      >
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          style={{ backgroundColor: "transparent" }}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel StepIconProps={{ classes: { root: classes.icon } }}>
                {label}
              </StepLabel>
              {/* style={{backgroundColor:'blue', color:'red'}} */}
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
}
//=================== end Stepper ===================

class Package extends Component {
  render() {
    const { t, i18n } = this.props;
    return (
      <div style={{ marginTop: 135 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            backgroundColor: "#d6d6d6",
            paddingBottom: 20,
            paddingTop: 20,
          }}
        >
          <div style={{ maxWidth: 1200, textAlign: "left" }}>
            {/* {t('test')} */}
            <Card.Text
              style={{
                color: "#007bff",
                fontWeight: "bold",
                fontSize: 36,
              }}
            >
              ผู้ประกอบการ
            </Card.Text>
          </div>
        </div>

        <div
          id="stepperDiv"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <div style={{ maxWidth: 1200, padding: 15 }}>
            <Row>
              <Col lg style={{}}>
                <Card style={{ marginBottom: 20, padding: 15 }}>
                  <Card.Text
                    style={{
                      color: "#007bff",
                      fontWeight: "bold",
                    }}
                  >
                    การดึงดูดแรงงานคุณภาพให้คุณ คือ สิ่งที่เราทำ
                  </Card.Text>
                  <Card.Text style={{}}>
                    ตั้งแต่ปี 2020 เป็นต้นไป Happyworkersthai.com
                    จะเป็นแหล่งข้อมูลสำคัญสำหรับแรงงานต่างด้าวและแรงงานไทย
                    ที่สนใจในการใช้ชีวิตและการทำงานในไทย
                    โดยเราเชื่อมโยงผู้หางานหลายหมื่นคนเข้ากับโอกาสการจ้างงานในหลากหลายอุตสาหกรรม
                    และหน้าที่การงานที่เหมาะสมกับท่าน
                    ที่ทำให้ทุกท่านมีความสุขกับงานที่คุณเลือกสรร
                  </Card.Text>
                  <Card.Text style={{}}>
                    * การเข้าถึงเรซูเม่ของผู้หางานที่มีมากกว่า 50,000 คน
                  </Card.Text>
                  <Card.Text style={{}}>
                    * การเปิดเผยแก่ผู้เข้าชมที่ไม่ซ้ำกันมากกว่า 100,000
                    รายต่อเดือน
                  </Card.Text>
                  <Card.Text style={{}}>
                    * ผู้ใช้ที่ลงทะเบียนใหม่หลายพันคนต่อเดือน
                  </Card.Text>
                  <Card.Text style={{}}>
                    * จดหมายข่าวรายวัน Blog และข้อมูลเกี่ยวกับงานด้านต่างๆ
                    รวมถึงข่าวสารด้านกฎหมายแรงงานต่างๆ เป็นต้น
                  </Card.Text>
                  <Card.Text style={{}}>
                    * สื่อสังคมออนไลน์ที่ครอบคลุม / เครือข่ายการรวมงานเป้าหมาย
                    (รายการ)
                  </Card.Text>
                  <Card.Text style={{}}>
                    * ปรับให้เหมาะสมสำหรับใช้บนมือถือ -
                    รายการงานของคุณจะดูดีบนเดสก์ท็อป แท็บเล็ต หรือโทรศัพท์มือถือ
                  </Card.Text>
                </Card>
                <Card style={{ marginBottom: 20, padding: 15 }}>
                  <Card.Text
                    style={{
                      color: "#007bff",
                      fontWeight: "bold",
                    }}
                  >
                    เครื่องมือการสรรหาที่เหมาะสม
                  </Card.Text>
                  <Card.Text style={{}}>
                    ด้วย Happyworkersthai.com
                    เราใช้วิธีการแบบองค์รวมเพื่อตอบสนองความต้องการในการจ้างงานของคุณที่รวมรายการงานฐานข้อมูลเรซูเม่ที่ค้นหาได้อันดับต้น
                    ๆ พร้อมกับการสัมผัสผ่านเครือข่ายโซเชียลมีเดียขนาดใหญ่ของเรา
                    (รายละเอียด) ผลลัพธ์ที่ดีที่สุด
                  </Card.Text>
                  <Card.Text style={{}}>
                    เมื่อพิจารณาถึงจำนวนรายได้ที่สูญเสียไปในขณะที่งานไม่สำเร็จงานที่เขียนได้ดีและน่าดึงดูดใจบน
                    Happyworkersthai.com
                    สามารถให้ผู้สมัครที่มีคุณภาพจำนวนมากในช่วงเวลาสั้น ๆ
                    เราให้บริการแพลตฟอร์มที่เหมาะสมพร้อมด้วยเครื่องมือทั้งหมด
                    เพื่อจัดการผู้สมัครของคุณอย่างง่ายดายและมีประสิทธิภาพ
                  </Card.Text>
                </Card>
              </Col>
              <Col>
                <Image
                  src={`images/WorkersPackage.png`}
                  style={{ width: "100%", height: "auto" }}
                ></Image>
              </Col>
            </Row>
          </div>
        </div>
        <div
          id="stepperDiv"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            backgroundColor: "#d6d6d6",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              textAlign: "center",
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <Card.Text
              style={{
                color: "#007bff",
                fontWeight: "bold",
              }}
            >
              4. ขั้นตอนง่ายๆ ในการลงประกาศหาแรงงาน
            </Card.Text>
            <HorizontalStepper />
            <VerticalStepper />
          </div>
        </div>
        <div
          id="stepperDiv"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <div id="packageDiv" style={{ maxWidth: 1200, textAlign: "center" }}>
            <Card.Text
              style={{
                color: "#007bff",
                fontWeight: "bold",
              }}
            >
              บริการเด่นของเรา
            </Card.Text>
            <Card.Text>
              แผนการลงประกาศที่แตกต่างกัน
              เพื่อให้ตรงกับความต้องการการสรรหาแรงงาน สำหรับธุรกิจทุกขนาด
            </Card.Text>
            <Row style={{ marginBottom: 30 }}>
              {happyPackage.map((item, index) => (
                <Col
                  md
                  key={index}
                  style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 20 }}
                >
                  <Card
                    style={{
                      height: "100%",
                      textAlign: "left",
                      padding: 15,
                      paddingBottom: "4rem",
                    }}
                  >
                    <Card.Text
                      style={{
                        color: "#007bff",
                        fontWeight: "bold",
                        alignSelf: "center",
                      }}
                    >
                      {item.planTH}
                    </Card.Text>
                    <Card.Text
                      style={{
                        alignSelf: "center",
                        textDecoration: index == 0 ? "line-through" : "",
                      }}
                    >
                      {item.price}
                    </Card.Text>
                    {item.feature.duration && (
                      <Card.Text>
                        <FiArrowRightCircle color="#007bff" />{" "}
                        ระยะเวลาของรายการงาน:
                        {item.feature.duration} วัน
                      </Card.Text>
                    )}
                    {item.feature.featureSearch && (
                      <Card.Text>
                        <FiArrowRightCircle color="#007bff" />{" "}
                        คุณลักษณะเด่นในการค้นหา:
                        {item.feature.featureSearch} วัน
                      </Card.Text>
                    )}
                    {item.feature.postJob && (
                      <Card.Text>
                        <FiArrowRightCircle color="#007bff" /> รีเฟรชงาน:{" "}
                        {item.feature.postJob}
                        วัน
                      </Card.Text>
                    )}
                    {item.feature.relatedJobs && (
                      <Card.Text>
                        <FiArrowRightCircle color="#007bff" />{" "}
                        การเปิดรับส่วนงานที่เกี่ยวข้อง:
                        {item.feature.relatedJobs} วัน
                      </Card.Text>
                    )}
                    {item.feature.news && (
                      <Card.Text>
                        <FiArrowRightCircle color="#007bff" /> ข้อมูลข่าวสาร
                      </Card.Text>
                    )}
                    {item.feature.standardFeature && (
                      <Card.Text>
                        <FiArrowRightCircle color="#007bff" />{" "}
                        คุณสมบัติทั้งหมดของการแผนมาตรฐาน
                      </Card.Text>
                    )}
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>
                      <FiArrowRightCircle color="#007bff" />
                      {" ข้อมูลเพิ่มเติม"}
                    </Card.Text>
                    <Card.Text>
                      <FiArrowRightCircle color="#007bff" />
                      {" ส่วนลดจำนวนมาก"}
                    </Card.Text>
                    <Button
                      style={{
                        position: "absolute",
                        bottom: "1rem",
                        alignSelf: "center",
                      }}
                    >
                      <span style={{ paddingLeft: 10, paddingRight: 10 }}>
                        เลือก
                      </span>
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Package);