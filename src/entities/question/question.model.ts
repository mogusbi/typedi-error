import {Column, Entity} from 'typeorm';
import {BaseEntity} from '../base-entity';

@Entity()
export class Question extends BaseEntity {
  @Column({
    unique: true
  }) public question: string;
}
