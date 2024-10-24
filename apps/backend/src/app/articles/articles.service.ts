import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticlesService {
  findAll() {
    return ['Article 1', 'Article 2'];
  }
}
