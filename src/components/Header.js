
import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>LMS</h1>
            </div>
        </header>
    );
}

export default Header;
