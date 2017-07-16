import {Service} from 'typedi';
import {Repository} from 'typeorm';
import {OrmRepository} from 'typeorm-typedi-extensions';
import {IUser} from './user.interface';
import {User} from './user.model';

@Service()
export class UserService {
  constructor (
    @OrmRepository(User) private repository: Repository<User>
  ) {}

  public create (props: IUser): Promise<User> {
    return this.repository.persist(props);
  }

  public readOne (id: string): Promise<User> {
    return this.repository.findOneById(id);
  }

  public update (id: string, props: IUser): Promise<void> {
    return this.repository.updateById(id, props);
  }

  public drop (id: string): Promise<void> {
    return this.repository.removeById(id);
  }
}
