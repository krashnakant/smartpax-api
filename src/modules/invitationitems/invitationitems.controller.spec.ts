import { Test, TestingModule } from '@nestjs/testing';
import { InvitationitemsController } from './invitationitems.controller';
import { InvitationitemsService } from './invitationitems.service';

describe('InvitationitemsController', () => {
  let controller: InvitationitemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvitationitemsController],
      providers: [InvitationitemsService],
    }).compile();

    controller = module.get<InvitationitemsController>(InvitationitemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
