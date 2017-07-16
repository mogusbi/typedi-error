import {BeforeInsert, Column, Entity} from 'typeorm';
import {encryptionService} from '../../services/encryption';
import {BaseEntity} from '../base-entity';

@Entity()
export class User extends BaseEntity {
  @Column() public answer: string;
  @Column() public dob: Date;
  @Column({
    unique: true
  }) public emailAddress: string;
  @Column() public firstName: string;
  @Column() public password: string;
  @Column() public salt: string;
  @Column() public surname: string;
  @Column({
    unique: true
  }) public username: string;

  @BeforeInsert()
  public encrypt (): Promise<string> {
    return this.generateSalt()
      .then(
        () => this.hashAnswer()
      )
      .then(
        () => this.hashPassword()
      );
  }

  public generateSalt (): Promise<string> {
    return encryptionService
      .genSalt()
      .then(
        (salt: string) => this.salt = salt
      )
  }

  public hashAnswer (): Promise<string> {
    return encryptionService
      .hash(this.answer, this.salt)
      .then(
        (hash: string) => this.answer = hash
      );
  }

  public hashPassword (): Promise<string> {
    return encryptionService
      .hash(this.password, this.salt)
      .then(
        (hash: string) => this.password = hash
      );
  }
}
