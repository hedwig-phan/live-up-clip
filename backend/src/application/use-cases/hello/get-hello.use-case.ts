export interface HelloResponse {
  message: string;
}

export class GetHelloUseCase {
  execute(): HelloResponse {
    return {
      message: "Hello World!"
    };
  }
} 