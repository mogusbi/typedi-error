import {Service} from 'typedi';
import {Repository} from 'typeorm';
import {OrmRepository} from 'typeorm-typedi-extensions';
import {IQuestion} from './question.interface';
import {Question} from './question.model';

@Service()
export class QuestionService {
  @OrmRepository(Question) private repository: Repository<Question>;

  public create (props: IQuestion): Promise<Question> {
    return this.repository.persist(props);
  }

  public readAll (size: number = 10, page: number = 1): Promise<[Question[], number]> {
    const skip: number = size * (page - 1);

    return this.repository.findAndCount({
      skip,
      take: page
    });
  }

  public readOne (id: string): Promise<Question> {
    return this.repository.findOneById(id);
  }

  public update (id: string, props: IQuestion): Promise<void> {
    return this.repository.updateById(id, props);
  }

  public drop (id: string): Promise<void> {
    return this.repository.removeById(id);
  }
}
