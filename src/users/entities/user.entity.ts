import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstracEntity } from "src/common/database/abstract.entity";

@Schema( { versionKey: false } )
@ObjectType()
export class User extends AbstracEntity { 
    @Prop()
    @Field()
    email: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass( User );