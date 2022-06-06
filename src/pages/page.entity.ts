import { PageType } from 'pages/pageType.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';

@Entity()
@Tree('nested-set')
export class Page {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  path: string;

  @Column()
  name: string;

  @TreeChildren()
  children: Page[];

  @TreeParent()
  parent: Page;

  @ManyToOne(() => PageType, (type) => type.id)
  typeId: string;
}
