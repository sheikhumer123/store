import "../components/navbar.css";

const DropdownNav = (props) => {
  return (
    <>
      <li class=" dropdown">
        <a
          style={{ color: "black" }}
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          {props.name}
        </a>
        <ul class="dropdown-menu">{props.menu}</ul>
      </li>
    </>
  );
};
export default DropdownNav;
