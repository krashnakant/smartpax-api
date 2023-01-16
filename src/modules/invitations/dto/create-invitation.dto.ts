export class CreateInvitationDto {
    readonly sender_id: number;
    readonly invitation_email: string;
    readonly permission_type: string;
}
