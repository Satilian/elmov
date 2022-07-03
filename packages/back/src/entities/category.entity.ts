import { Image } from 'entities/image.entity';
import { Page } from 'entities/page.entity';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';

@Entity()
@Tree('nested-set')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Page)
  @JoinColumn()
  page: Page;

  @ManyToOne(() => Image)
  @JoinColumn()
  image: Image;

  @TreeChildren()
  childrens: Page[];

  @TreeParent()
  parent: Page;
}
