import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Demo {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

}
