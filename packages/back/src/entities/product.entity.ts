import { ProductImage } from 'entities/productImage.entity';
import { Page } from 'entities/page.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  price: number;

  @OneToOne(() => Page)
  @JoinColumn()
  page: Page;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn()
  category: Category;

  @OneToMany(() => ProductImage, (image) => image.product)
  images: ProductImage[];
}
