import { Controller, Get, Post, Body } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateNofiticationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
	constructor(private readonly prisma: PrismaService) { }

	@Get()
	list() {
		return this.prisma.notification.findMany();
	}

	@Post()
	async create(@Body() body: CreateNofiticationBody) {
		const { content, category, recipientId } = body;
		await this.prisma.notification.create({
			data: {
				id: randomUUID(),
				content,
				category,
				recipientId,
			},
		});
	}
}
