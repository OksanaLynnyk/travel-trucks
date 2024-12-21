import styles from "./ImageGallery.module.css";

const ImageGallery = ({ camper }) => {
  const gallery = camper.gallery;

  return (
    <ul className={styles.galleryList}>
      {gallery.map((image, index) => (
        <li key={index} className={styles.catalogCard}>
          <img src={image.thumb} alt={camper.name} className={styles.cardImg} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
