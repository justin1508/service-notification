import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['modern-bengal-10753-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'bW9kZXJuLWJlbmdhbC0xMDc1MyRmrM4p05S5k7VKgNOEwcCGKyrJhrLb-E5fRDc',
          password:
            'NVgHPnrJ5gnMvwtJ3JK4vKVQ_jgOa_OEV_CRXBj2pBYf0UfqF5aTfsLWN3ox7mwsTTeMgw==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
