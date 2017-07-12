import {AbstractEntity, CreateDateColumn, PrimaryColumn, UpdateDateColumn, VersionColumn} from 'typeorm';

@AbstractEntity()
export abstract class BaseEntity {
  @PrimaryColumn('uuid', {
    type: 'uuid',
    generated: true
  }) public id?: string;
  @CreateDateColumn() public createdAt?: Date;
  @UpdateDateColumn() public updatedAt?: Date;
  @VersionColumn() public version?: number;
}
