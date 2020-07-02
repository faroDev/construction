import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entity/projects.entity';
import { ProjectsService } from './services/projects.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  providers: [ProjectsService],
})
export class ProjectsModule {}
