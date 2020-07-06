import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigurationModule } from 'config/configuration.module';
import { DatabaseModule } from 'database/database.module';
import { ConfigurationService } from 'config/configuration.service';
import { ConfigurationKey } from 'config/configuration.keys';
import { ProjectsModule } from './modules/projects/projects.module';
import { CompanyModule } from './modules/companies/company.module';

@Module({
  imports: [
    CompanyModule,
    ProjectsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    ConfigurationModule, 
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string

  constructor(private readonly _configurationService: ConfigurationService) {
    AppModule.port = this._configurationService.get(ConfigurationKey.PORT);
  }
}
