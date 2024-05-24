import Footer from "../components/Footer";
import Header from "../components/Header";
import style from "../styles/Community.module.css";

function Community() {
  return (
    <div>
      <Header />
      <div>
        <div className={style.titleBox}>
          <div className={style.title}>COMMUNITY</div>
          <div className={style.smallTitle}>부모님들의 소통 커뮤니티</div>
          <div className={style.line}></div>
        </div>
        <div className={style.boardCnt}>총 게시물 1004개</div>
        <div className={style.community}>
          <div className={style.listHeader}>
            <div className={style.no}>번호</div>
            <div className={style.t}>제목</div>
            <div className={style.date}>날짜</div>
            <div className={style.w}>작성자</div>
          </div>
          <div className={style.contents}>
            {data.map(item => (
              <div className={style.listContents}>
                <div className={style.no}>{item.no}</div>
                <div className={style.t}>{item.title}</div>
                <div className={style.date}>{item.date}</div>
                <div className={style.w}>{item.writer}</div>
              </div>
            ))}
          </div>
          <button className={style.writeBtn}>작성하기</button>
          <div className={style.pagenation}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Community;

const data = [
  {
    no: "1",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
  {
    no: "2",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
  {
    no: "3",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
  {
    no: "4",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
  {
    no: "5",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
  {
    no: "6",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
  {
    no: "7",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
  {
    no: "8",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
  {
    no: "9",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
  {
    no: "10",
    title: "아이 장난감 추천",
    date: "2024.04.01",
    writer: "마미",
  },
];
