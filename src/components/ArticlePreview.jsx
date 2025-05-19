import styles from './ArticlePreview.module.css';
import drawersImg from '../../images/drawers.jpg';
import avatarImg from '../../images/avatar-michelle.jpg';
import shareIcon from '../../images/icon-share.svg';

const ArticlePreview = () => {
  return (
    <article className={styles.card}>
      <div className={styles.imageSection}>
        <img src={drawersImg} alt="Green drawers with decor" className={styles.image} />
      </div>
      <div className={styles.contentSection}>
        <h2 className={styles.title}>
          Shift the overall look and feel by adding these wonderful touches to furniture in your home
        </h2>
        <p className={styles.description}>
          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.
        </p>
        <footer className={styles.footer}>
          <div className={styles.authorInfo}>
            <img src={avatarImg} alt="Michelle Appleton" className={styles.avatar} />
            <div>
              <span className={styles.authorName}>Michelle Appleton</span>
              <span className={styles.date}>28 Jun 2020</span>
            </div>
          </div>
          <button className={styles.shareButton} aria-label="Share article">
            <img src={shareIcon} alt="Share icon" />
          </button>
        </footer>
      </div>
    </article>
  );
};

export default ArticlePreview; 