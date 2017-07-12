import {Body, Delete, Get, HttpCode, JsonController, Param, Post, Put} from 'routing-controllers';
import {Inject} from 'typedi';
import {IQuestion, Question, QuestionService} from '../../entities/question';

@JsonController('/question')
export class QuestionController {
  @Inject() private questionService: QuestionService;

  @Get()
  public httpGetAll (): Promise<[Question[], number]> {
    return this.questionService.readAll();
  }

  @Get('/:id')
  public httpGetOne (
    @Param('id') id: string
  ): Promise<Question> {
    return this.questionService.readOne(id);
  }

  @Post()
  @HttpCode(201)
  public httpPost (
    @Body({
      required: true
    }) props: IQuestion
  ): Promise<Question> {
    return this.questionService.create(props);
  }

  @Put('/:id')
  public httpPut (
    @Param('id') id: string,
    @Body({
      required: true
    }) props: IQuestion
  ): Promise<void> {
    return this.questionService.update(id, props);
  }

  @Delete('/:id')
  public httpDelete (
    @Param('id') id: string
  ): Promise<void> {
    return this.questionService.drop(id);
  }
}
