'use strict';

module.exports = app => {
  const { mongoose } = app;
  const { Schema } = mongoose;

  const LocationSchema = new Schema({
    createtime: { type: Date, default: Date.now, require: true },
  });

  return mongoose.model('Location', LocationSchema);
};
