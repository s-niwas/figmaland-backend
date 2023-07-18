import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();
const cors=require("cors")

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(cors({
    origin:"https://localhost:3004",
    methods:["GET","POST","PUT","DELETE"]
  }))
  const config = new DocumentBuilder()
    .setTitle('Form Example')
    .setDescription('The Forms API description')
    .setVersion('1.0')
    .addTag('Form')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3004);
}
bootstrap();
