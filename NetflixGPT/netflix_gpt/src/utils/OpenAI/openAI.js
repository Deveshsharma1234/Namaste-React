import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: "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", // No 'process.env'
  dangerouslyAllowBrowser: true, // Required for frontend usage
});

export default client;
