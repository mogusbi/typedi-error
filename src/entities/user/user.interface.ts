import {IBaseEntity} from '../../../shared/base-entity';

export interface IUser extends IBaseEntity {
  answer: string;
  dob: Date;
  emailAddress: string;
  encrypt (): Promise<string>;
  firstName: string;
  generateSalt (): Promise<string>;
  hashAnswer (): Promise<string>;
  hashPassword (): Promise<string>;
  password: string;
  salt: string;
  surname: string;
  username: string;
}
