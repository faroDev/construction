import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entity/projects.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
})
export class ProjectsModule {}
