import { Schema, model, models } from "mongoose";

// User is a one-to-many relationship, one user can create many prompts

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required'],
    }
});

// Either get the prompt that already exists on the models object or create a new model based on the prompt Schema

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;