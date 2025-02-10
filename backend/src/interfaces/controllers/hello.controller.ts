import { Request, Response } from 'express';
import { GetHelloUseCase } from '../../application/use-cases/hello/get-hello.use-case';

export class HelloController {
  private getHelloUseCase: GetHelloUseCase;

  constructor() {
    this.getHelloUseCase = new GetHelloUseCase();
  }

  async getHello(_req: Request, res: Response): Promise<void> {
    const result = this.getHelloUseCase.execute();
    res.json(result);
  }
} 