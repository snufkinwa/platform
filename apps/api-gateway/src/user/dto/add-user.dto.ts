import { trim } from '@credebl/common/cast.helper';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AddUserDetails {

    @ApiProperty({ example: 'awqx@getnada.com' })
    @IsEmail()
    @IsNotEmpty({ message: 'Please provide valid email' })
    @IsString({ message: 'email should be string' })
    @IsOptional()
    email?: string;

    @ApiProperty({ example: 'Alen' })
    @IsString({ message: 'firstName should be string' })
    @IsOptional()
    firstName?: string;

    @ApiProperty({ example: 'Harvey' })
    @IsString({ message: 'lastName should be string' })
    @IsOptional()
    lastName?: string;

    @ApiProperty()
    @Transform(({ value }) => trim(value))
    @IsNotEmpty({ message: 'Password is required.' })
    @IsOptional()
    password?: string;

    @ApiProperty({ example: 'false' })
    @IsOptional()
    @IsBoolean({ message: 'isPasskey should be boolean' })
    isPasskey?: boolean;
}

export class AddPasskeyDetails {
    @ApiProperty()
    @Transform(({ value }) => trim(value))
    @IsNotEmpty({ message: 'Password is required.' })
    password: string;

}
