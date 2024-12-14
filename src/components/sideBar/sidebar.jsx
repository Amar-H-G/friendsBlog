import styles from "./sidebar.module.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div
      className={`${styles.sidecontain} d-flex flex-column flex-shrink-0 p-3 text-bg-dark`}
    >
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4 fw-bold">Friends Blogs</span>
      </Link>
      <hr />

      <ul className={`nav nav-pills flex-column mb-auto ${styles.sideList}`}>
        <li>
          <Link to="/" className={`btn btn-info fw-bold ${styles.text} `}>
            Home
          </Link>
        </li>
        <li>
          <Link to="#" className={`btn btn-info fw-bold ${styles.text}`}>
            My Blogs
          </Link>
        </li>
        <li>
          <Link to="/add" className={`btn btn-info fw-bold ${styles.text}`}>
            Create New
          </Link>
        </li>
      </ul>
      <ul className={`nav nav-pills flex-column ${styles.sideList}`}>
        <li>
          <Link to="#" className={`btn btn-danger fw-bold ${styles.text}`}>
            Log Out
          </Link>
        </li>
      </ul>
      <hr />
      <div className={styles.dropdown}>
        <Link className="text-decoration-none" to="#">
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2 mx-2 my-2"
          />
          <strong className="text-white fs-5">Profile</strong>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
