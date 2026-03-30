import styles from "./ImageGallery.module.css";

const ImageGallery = ({ camper }) => {
  const gallery = camper.gallery;

  return (
    <ul className={styles.galleryList}>
      {gallery.map((image, index) => (
        <li key={index} className={styles.galleryItem}>
          <div className={styles.imageWrapper}>
            <img
              src={image.thumb}
              alt={camper.name}
              className={styles.cardImg}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
