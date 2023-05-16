import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { Trim } from "class-sanitizer";

export class SignUpUserDto {
    @IsEmail({}, { message: "Provided Email is not valid" })
    @Trim()
    @IsNotEmpty()
    public email?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: "Password should be minimum of 6 characters" })
  public password?: string;

}