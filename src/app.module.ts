import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://juanjerrah:Ju%40nebel15@cluster0.wdfwl.mongodb.net/Users'),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
