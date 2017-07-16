import {Body, HttpCode, JsonController, Post} from 'routing-controllers';
import {IUser, User, UserService} from '../../entities/user';

@JsonController('/user')
export class UserController {
  constructor (
    private userService: UserService
  ) {}

  @Post()
  @HttpCode(201)
  public httpPost (
    @Body({
      required: true
    }) props: IUser
  ): Promise<User> {
    return this.userService.create(props);
  }
}
