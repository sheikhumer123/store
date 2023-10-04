import "../navbar/navbar.css";

const DropdownNav = (props) => {
  return (
    <>
      <li className="dropdown">
        {props.name}

        <ul style={{ marginLeft: -10 }} class="dropdown-menu">
          {props.menu}
        </ul>
      </li>
    </>
  );
};
export default DropdownNav;
