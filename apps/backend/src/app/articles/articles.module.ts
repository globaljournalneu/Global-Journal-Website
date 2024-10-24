import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';

@Module({
  controllers: [ArticlesController], // Add the controller here
  providers: [ArticlesService],      // Add the service here
})
export class ArticlesModule {}
