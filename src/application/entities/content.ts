export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validadeContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLength = this.validadeContentLength(content);

    if (!isContentLength)
      throw new Error(
        'Content length error, must be more than 5 characters and less than 240 caracters',
      );

    this.content = content;
  }
}
