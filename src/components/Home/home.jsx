import style from "./home.module.css";
import data from "../../store/data/data.json";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { LiaCommentsSolid } from "react-icons/lia";
const Home = () => {
  return (
    <>
      <div className={style.cards}>
        {data.map((datas) => (
          <div className={`card ${style.card}`} key={datas.id}>
            <div className="card-body">
              <div className={style.head}>
                <h5 className="card-title fw-bold fs-9">{datas.title}</h5>
                <div className={style.public}>
                  <div className={style.count}>
                    <AiOutlineLike />
                    <p>0</p>
                  </div>
                  <div className={style.count}>
                    <AiOutlineDislike />
                    <p>0</p>
                  </div>
                  <div className={style.count}>
                    <LiaCommentsSolid />
                    <p>0</p>
                  </div>
                </div>
              </div>
              <p className="card-text">{datas.content}</p>
              <div className={style.button}>
                <a href="#" className="btn btn-primary">
                  Edit
                </a>
                <a href="#" className="btn btn-warning">
                  Remove
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
