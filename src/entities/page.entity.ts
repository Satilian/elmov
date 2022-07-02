import { PageType } from 'entities/pageType.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Page {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  path: string;

  @Column()
  name: string;

  @ManyToOne(() => PageType, (type) => type.pages)
  type: PageType;
}
