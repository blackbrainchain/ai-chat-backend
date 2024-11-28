import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create( AppModule, { bufferLogs: true } );
  const configService = app.get(ConfigService);
  app.useGlobalPipes( new ValidationPipe( {
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  } ) ),
  app.use(cookieParser());
  app.useLogger(app.get(Logger)),
  await app.listen(configService.getOrThrow('PORT'));
}
bootstrap();
