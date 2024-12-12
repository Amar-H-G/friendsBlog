import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div
      className={`${styles.sidecontain} d-flex flex-column flex-shrink-0 p-3 text-bg-dark`}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4 fw-bold">Friends Blogs</span>
      </a>
      <hr />

      <ul className={`nav nav-pills flex-column mb-auto ${styles.sideList}`}>
        <li>
          <a href="#" className={`btn btn-info fw-bold ${styles.text} `}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={`btn btn-info fw-bold ${styles.text}`}>
            My Blogs
          </a>
        </li>
        <li>
          <a href="#" className={`btn btn-info fw-bold ${styles.text}`}>
            Create New
          </a>
        </li>
      </ul>
      <ul className={`nav nav-pills flex-column ${styles.sideList}`}>
        <li>
          <a href="#" className={`btn btn-danger fw-bold ${styles.text}`}>
            Log Out
          </a>
        </li>
      </ul>
      <hr />
      <div className={styles.dropdown}>
        <a
          className="text-decoration-none"
          href="#"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2 mx-2 my-2"
          />
          <strong className="text-white fs-5">Profile</strong>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
