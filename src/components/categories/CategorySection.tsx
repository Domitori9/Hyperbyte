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
    image: "/pc.png",
    path: "/products/pc",
    description: "Мощные игровые и рабочие компьютеры для любых задач",
    color: "#3B82F6"
  },
  {
    id: "mouse",
    name: "Мышки",
    image: "/category/mouse.png",
    path: "/products/mouse",
    description: "Точные и отзывчивые мыши для геймеров и профессионалов",
    color: "#10B981"
  },
  {
    id: "keyboards",
    name: "Клавиатуры",
    image: "/keyboard.png",
    path: "/products/keyboards",
    description: "Механические и мембранные клавиатуры для каждого",
    color: "#8B5CF6"
  },
  {
    id: "monitors",
    name: "Мониторы",
    image: "/monitor.png",
    path: "/products/monitors",
    description: "Мониторы с идеальной цветопередачей и высокой частотой",
    color: "#EC4899"
  },
  {
    id: "headphones",
    name: "Наушники",
    image: "/headphones.png",
    path: "/products/headphones",
    description: "Игровые и музыкальные наушники с премиальным звуком",
    color: "#F59E0B"
  },
  {
    id: "pad",
    name: "Коврики",
    image: "/pad.png",
    path: "/products/pad",
    description: "Коврики для мыши с идеальным скольжением",
    color: "#EF4444"
  },
  {
    id: "laptop",
    name: "Ноутбуки",
    image: "/laptop.png",
    path: "/products/laptop",
    description: "Мощные игровые и рабочие ноутбуки",
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

