import mongoose, { Schema } from 'mongoose';

const SearchHistorySchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "Account", required: true },
  ip: { type: String, required: true },
  searchedAt: { type: String, required: true },
});


export default mongoose.model('history', SearchHistorySchema)


