import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { Trim } from "class-sanitizer";

export class SignUpUserDto {
    @Trim()
    @IsNotEmpty()
    public username?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: "Password should be minimum of 6 characters" })
  public password?: string;

}