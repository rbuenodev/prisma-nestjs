import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'User email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @ApiProperty({ description: 'User name' })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ description: 'Define if the user is an administrator, default value: false' })
  @IsBoolean()
  admin: boolean;
}
