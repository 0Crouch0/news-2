import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";

function NewsList({ news }) {
  return (
    <ul className={styles.list}>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default NewsList;
