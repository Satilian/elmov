import { ImageSrc } from 'images/image.entity';
import { Page } from 'pages/page.entity';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Catalog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Page, (page) => page.id)
  @JoinColumn()
  pageId: string;

  @OneToOne(() => ImageSrc, (img) => img.id)
  @JoinColumn()
  imageSrcId: string;
}
