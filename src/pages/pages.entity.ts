import { Column, Entity, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent } from 'typeorm';

@Entity()
@Tree('nested-set')
export class Page {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  path: string;

  @Column()
  name: string;

  @TreeChildren()
  children: Page[];

  @TreeParent()
  parent: Page;
}
