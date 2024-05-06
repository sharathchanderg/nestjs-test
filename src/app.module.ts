import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/controller/users/users.controller';
import { UsersService } from './users/service/users/users.service';
import { UsersModule } from './users/users.module';
import { PostsController } from './posts/controller/posts/posts.controller';
import { PostsService } from './posts/service/posts/posts.service';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule, PostsModule],
  controllers: [AppController, UsersController, PostsController],
  providers: [AppService, UsersService, PostsService],
})
export class AppModule {}
