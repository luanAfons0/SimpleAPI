import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MikroORM } from '@mikro-orm/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('SimpleDash')
    .setDescription('A simple dashboard API')
    .setVersion('1.0')
    .addTag('dashboard', 'api')
    .build();

  const mikroOrm = app.get(MikroORM);
  await mikroOrm.getMigrator().up();

  const documentFactory = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((error) => {
  console.log('Error in application start: ' + error);
});
