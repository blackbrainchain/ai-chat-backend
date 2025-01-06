import { Prop, Schema } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { AbstracEntity } from "src/common/database/abstract.entity";

@Schema()
export class MessageDocument extends AbstracEntity {
    @Prop()
    content: string;

    @Prop()
    createdAt: Date;

    @Prop()
    userId: Types.ObjectId;
}