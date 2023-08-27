import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Track } from './track.schema';
import { ObjectId } from 'mongodb';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop()
  userName: string;

  @Prop()
  text: string;

  @Prop({ type: ObjectId, ref: 'track' })
  track: Track;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
