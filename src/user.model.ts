import { ApiProperty } from "@nestjs/swagger";

export class User {
    @ApiProperty({default: 'name'})
    userName: string;
    @ApiProperty({default: 'name@mail.com'})
    email: string;
    @ApiProperty({default: 'pass'})
    password: string;
}
