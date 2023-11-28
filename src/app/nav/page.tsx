import Link from "next/link";
import styles from "./nav.module.css";

function Navbar() {
  return (
    <>
    <nav className={styles.raw}>
      <h1>Nav Bar</h1>
      <ul>
        <li><Link href={'/home'}>Home</Link></li>
        <li><Link href={'/about'}>About</Link></li>
        <li><Link href={'/service'}>Service</Link></li>
        <li><Link href={'/help'}>Help</Link></li>
      </ul>
      </nav>
    </>
  );
}
export default Navbar;
