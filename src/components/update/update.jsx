import style from "./update.module.css";

const Update = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.heading}>
          <h1 className="fw-bold">Update Your Blog</h1>
        </div>
        <form>
          <div className={style.title}>
            <h5>Title:</h5>
            <input type="text" />
          </div>
          <div className={style.title}>
            <h5>Content:</h5>
            <input type="" />
          </div>
          <div className={style.title}>
            <h5>Author Name:</h5>
            <input type="text" />
          </div>
          <div className={style.title}>
            <h5>Tags:</h5>
            <input type="text" />
          </div>
          <div className={style.button}>
            <button>Add</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;
