import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma nova notificação');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Você')).toThrow();
  });

  it('should not be able to create a notification content with mpre than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
