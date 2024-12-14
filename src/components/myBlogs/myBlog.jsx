import style from "./myBlog.module.css";
import data from "../../store/myData/data.json";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { LiaCommentsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
const MyBlogs = () => {
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
                <Link to="/update" className="btn btn-primary">
                  Edit
                </Link>
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

export default MyBlogs;
