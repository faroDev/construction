import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'tls';
import { ConfigurationKey } from './../config/configuration.keys';
import { ConfigurationModule } from './../config/configuration.module';
import { ConfigurationService } from './../config/configuration.service';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigurationModule],
    inject: [ConfigurationService],
    async useFactory(config: ConfigurationService){
      return {
        ssl: false,
        type: 'postgres' as 'postgres',
        host: config.get(ConfigurationKey.HOST),
        username: config.get(ConfigurationKey.USERNAME),
        password: config.get(ConfigurationKey.PASSWORD),
        database: config.get(ConfigurationKey.DATA_BASE),
        port: 5444,
        entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
        migrations: [`${__dirname}/migrations/*{.ts,.js}`],
      } as ConnectionOptions
    }
  })
]