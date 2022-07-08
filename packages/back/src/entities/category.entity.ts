import { Page } from 'entities/page.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
@Tree('nested-set')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  image: string;

  @OneToOne(() => Page)
  @JoinColumn()
  page: Page;

  @OneToMany(() => Product, (product) => product.category)
  @JoinColumn()
  products: Product[];

  @TreeChildren()
  childrens: Page[];

  @TreeParent()
  parent: Page;
}
