import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-recipient-id1',
    });

    expect(count).toEqual(2);
  });
});
