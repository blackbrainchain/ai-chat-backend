import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateMessageInput {
    @Field()
    @IsNotEmpty()
    content: string;

    @Field()
    @IsNotEmpty()
    chatId: string;
}