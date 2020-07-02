import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  address: string;

  @Column({ type: 'timestamp', name: 'create_at' })
  createAt: Date;

  @Column({ type: 'timestamp', name: 'update_at' })
  updateAt: Date;
}
