import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AtGuard } from './common/guards';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // For global injection
  // const reflector = new Reflector();
  // app.useGlobalGuards(new AtGuard());
  await app.listen(3000);
}
bootstrap();
