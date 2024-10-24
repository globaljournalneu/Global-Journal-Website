import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ArticlesService } from './articles.service';

@ApiTags('articles') // Add this decorator to show up in Swagger
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all articles' }) // Describes this endpoint in Swagger
  findAll() {
    return this.articlesService.findAll();
  }
}
