import { Field, ObjectType } from "@nestjs/graphql";
import { AbstracEntity } from "src/common/database/abstract.entity";
import { User } from "src/users/entities/user.entity";

@ObjectType()
export class Message extends AbstracEntity {
    @Field()
    content: string;

    @Field()
    createdAt: Date;

    @Field(() => User)
    user: User;

    @Field()
    chatId: string;
}