import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

const getItems = (count: number) =>
  new Array(count).fill(null).map((_: any, i: number) => ({
    id: `id-${i}`,
    name: `item ${i} name`,
    price: i * 100,
    image: `${i}.png`,
  }));

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  findAll() {
    return getItems(4);
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
