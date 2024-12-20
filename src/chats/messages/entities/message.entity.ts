import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema } from "@nestjs/mongoose";
import { AbstracEntity } from "src/common/database/abstract.entity";

@ObjectType()
@Schema()
export class Message extends AbstracEntity {
    @Field()
    @Prop()
    content: string;

    @Field()
    @Prop()
    createdAt: Date;

    @Field()
    @Prop()
    userId: string;
}