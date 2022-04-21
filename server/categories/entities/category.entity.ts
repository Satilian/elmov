import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categorytName: string;

  @OneToOne(() => Category, (category) => category.id)
  parentId?: Category;
}
