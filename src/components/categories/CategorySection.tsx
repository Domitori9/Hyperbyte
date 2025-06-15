import styles from './CategorySection.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  image: string;
  path: string;
  description: string;
  color: string;
}

const categories: Category[] = [
  {
    id: "pc",
    name: "Системники",
    image: "/category/pc.jpg",
    path: "/products/pc",
    description: "Потужні ігрові та робочі комп'ютери для будь-яких задач",
    color: "#3B82F6"
  },
  {
    id: "mouse",
    name: "Миші",
    image: "/category/mouse.png",
    path: "/products/mouse",
    description: "Точні та чутливі миші для геймерів і професіоналів",
    color: "#10B981"
  },
  {
    id: "keyboards",
    name: "Клавіатури",
    image: "/category/keyboard.jpg",
    path: "/products/keyboard",
    description: "Механічні та мембранні клавіатури для кожного",
    color: "#8B5CF6"
  },
  {
    id: "monitors",
    name: "Монітори",
    image: "/category/monitor.jpg",
    path: "/products/monitor",
    description: "Монітори з ідеальною кольоропередачею та високою частотою",
    color: "#EC4899"
  },
  {
    id: "headphones",
    name: "Навушники",
    image: "/category/headphones.jpg",
    path: "/products/headphones",
    description: "Ігрові та музичні навушники з преміальною якістю звуку",
    color: "#F59E0B"
  },
  {
    id: "pad",
    name: "Килимки",
    image: "/category/pad.jpg",
    path: "/products/pad",
    description: "Килимки для миші з ідеальним ковзанням",
    color: "#EF4444"
  },
  {
    id: "laptop",
    name: "Ноутбуки",
    image: "/category/laptop.jpg",
    path: "/products/laptop",
    description: "Потужні ігрові та робочі ноутбуки",
    color: "#14B8A6"
  }
];

const CategorySection = () => {
  return (
    <div className={styles.categoriesGrid}>
      {categories.map((category) => (
        <Link href={category.path} key={category.id}>
          <div 
            className={styles.categoryCard}
            style={{ backgroundColor: category.color }}
          >
            <Image
              src={category.image}
              alt={category.name}
              className={styles.categoryImage}
              width={400}
              height={200}
            />
            <div className={styles.categoryOverlay}>
              <h3 className={styles.categoryName}>{category.name}</h3>
              <p className={styles.categoryDescription}>{category.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategorySection;

