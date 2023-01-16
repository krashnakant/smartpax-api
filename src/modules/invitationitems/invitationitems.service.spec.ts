import { Test, TestingModule } from '@nestjs/testing';
import { InvitationitemsService } from './invitationitems.service';

describe('InvitationitemsService', () => {
  let service: InvitationitemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvitationitemsService],
    }).compile();

    service = module.get<InvitationitemsService>(InvitationitemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
