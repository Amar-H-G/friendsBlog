import style from "./header.module.css";

const Header = () => {
  return (
    <>
      <div className={`container bg-dark ${style.heading}`}>
        <h1 className={`text-light ${style.title}`}>Welcome to Friends Blog</h1>
      </div>
    </>
  );
};

export default Header;
