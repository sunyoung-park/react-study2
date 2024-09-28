import styles from '../css/TopBar.module.css';

function TopBar() {
    return (        
    <div className={styles.topbar}>
        <div className={styles.topbar__container}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
        <button className={styles.button}><a href='https://iced-phone-d56.notion.site/104e5900b3108084afbedc7ad8e70a81' target='_blank'>Plz Call me💓</a></button>
      </div>
    </div>
    );
}

export default TopBar;