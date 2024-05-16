import React from "react";
import Footer from "../components/Footer";
import "../styles/main.css";
import Header from "../components/Header";
function Main() {
    return (
        <div>
            <Header />
            <section id="main-section">
                <div className="text-container">
                    <img src={require("../assets/main.png")} className="main-img" />
                    <div>
                        <div className="main-text">We are babycare</div>
                        <div className="main-text">
                            Professionals <span className="small-text">for family</span>
                        </div>
                        <div className="main-sub">우리는 육아의 모든 단계에서 도움을 드리고, 편리함을 제공합니다.</div>
                    </div>
                </div>
                <div id="connect-text">
                    <div className="connect-text">AngelGuard Product</div>
                    <div>
                        <img src={require("../assets/next.png")} alt="next" />
                    </div>
                </div>
            </section>

            <section id="product-section">
                <div className="sub-text">우리의 모든 서비스는 하나의 어플과 장난감 모빌 안에서 누릴 수 있습니다.</div>
                <div className="product-container">
                    <div className="product-item">
                        <img src={require("../assets/product1.png")} alt="" />
                        <div className="product-description">
                            <div className="product-title">Baby mobile</div>
                            <div className="product-dep">
                                간편하게 멀리 있어도, <br />
                                아이의 모빌을 작동시킬 수 있어요.
                            </div>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={require("../assets/product2.png")} alt="" />
                        <div className="product-description">
                            <div className="product-title">Crying detection</div>
                            <div className="product-dep">
                                아이의 울음을 감지하여,
                                <br />
                                알림이 울려 먼곳에서도 알 수 있어요.
                            </div>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={require("../assets/product3.png")} alt="" />
                        <div className="product-description">
                            <div className="product-title">Temperature detect</div>
                            <div className="product-dep">
                                아이의 주변 온도를 실시간으로
                                <br />
                                받을 수 있습니다.
                            </div>
                        </div>
                    </div>
                </div>

                <div id="product-container">
                    <img src={require("../assets/product4.png")} alt="" />
                    <img src={require("../assets/product5.png")} alt="" />
                    <div className="product2-dep">
                        <div className="product-txt">Working Hours</div>
                        <div className="product-txt2">
                            출산 후 아이를 효율적으로 돌볼 수 있고,
                            <br />
                            다른 곳에 떨어져있어도 아이의 상태를 파악할 수 있는 <br />
                            Angel Guard(엔젤가드)는 가정의 평화를 위해 <br />
                            아이를 효율적으로 관리하고 케어합니다.
                        </div>
                    </div>
                </div>
            </section>

            <section id="main3-section">
                <div className="body-input-container">
                    <div className="body-img">
                        <img src={require("../assets/height.png")} alt="" />
                        <img src={require("../assets/kg.png")} alt="" />
                    </div>
                    <div id="body-input-container">
                        <div className="body-input">
                            <input type="text" />
                            cm
                        </div>
                        <div>
                            <input type="text" />
                            kg
                        </div>
                    </div>
                    <div className="body-btn">
                        <button>입력하기</button>
                    </div>
                </div>
                <div className="body-dep-container">
                    <div className="dep-title">
                        <div className="dep-sub1">MY BABY BODY ANALYSIS</div>
                        <div className="dep-sub2">kids care service</div>
                    </div>
                    <div className="dep-container">
                        보건복지부와 대한소아과학회가 공동으로 약 10년마다 제정·발표하는 <br />
                        「2017 소아청소년 성장도표」기준 아기성장 발달 계산기입니다.
                    </div>
                    <div className="dep-container">
                        자녀들의 성장 정도를 같은 또래의 다른 아이들과 비교해 볼 수 있고, <br />
                        저신장, 저체중, 비만 등 소아청소년의 성장상태를 확인하실 수 있습니다. <br />
                        <div>질병관리청 2017 소아청소년성장도표를 기준으로 계산됩니다.</div>
                    </div>
                </div>
            </section>

            <section id="main4-section">
                <img src={require("../assets/main4.png")} />
                <div>
                    <div className="main4-title">ANGEL GUARD</div>
                    <div className="main4-sub">‘한 아이를 돌보기 위해서는 온 마음이 필요하다.’</div>
                    <div className="main4-sub2">
                        아이 하나가 온전하게 성장하기 위해서는 여러 노력이 필요합니다. <br />
                        아이 한명. 한명에게 관심을 가지고 마음이 되어줄 누군가, <br />
                        엔젤가드가 아이들의 행복한 내일을 위해 마음이 되겠습니다.
                        <br />
                        세상 모든 아이가 차별 없이 관심 받을 수 있도록 엔젤가드가 함께하겠습니다.
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Main;
