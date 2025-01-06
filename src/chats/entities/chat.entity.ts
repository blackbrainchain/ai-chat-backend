import { ObjectType, Field } from '@nestjs/graphql';
import { AbstracEntity } from 'src/common/database/abstract.entity';
import { Message } from '../messages/entities/message.entity';

@ObjectType()
export class Chat extends AbstracEntity { 
  @Field()
  name: string;

  @Field(() => Message, {nullable: true})
  latestMessage?: Message;  
}

