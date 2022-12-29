import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex flex-row bg-green-300 text-white">
      <Link href="/">
        <a className="navbar-item">Home</a>
      </Link>
      <Link href="/products">
        <a className="navbar-item">Products</a>
      </Link>
      <Link href="/shopping-cart">
        <a className="navbar-item">Shopping-list</a>
      </Link>
    </nav>
  );
};

export default NavBar;
