import { IsNotEmpty, IsArray, IsNumber, IsString } from "class-validator";
import { Trim } from "class-sanitizer";
import { ObjectId } from "mongoose";

export class stateDto {
  @Trim()
  @IsNotEmpty({ message: "state must have a name " })
  public name?: string;

  @Trim()
  @IsNotEmpty({ message: "state must have a capital" })
  public capital?: string;

  @IsArray()
  public LGA;

  @IsNumber()
  @IsNotEmpty({ message: "state must have a latitude" })
  public latitude?: number;

  @IsNumber()
  @IsNotEmpty({ message: "state must have a longitude" })
  public longitude?: number;

  @IsString()
  public region?: ObjectId;

  @IsNumber()
  @IsNotEmpty({ message: "state must have a longitude" })
  public number_of_LGA?: number;
}
