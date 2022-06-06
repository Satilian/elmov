import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ImageSrc {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  category: string;
}
