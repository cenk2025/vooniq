import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';

// Create an OpenAI API client (edge-compatible)
const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// Set the runtime to edge for best performance
export const runtime = 'edge';

const systemPrompt = `You are Sofia, a friendly and professional customer service representative for VoonIQ, a Finnish company specializing in AI-powered business solutions and digital transformation.

About VoonIQ:
- We provide AI consulting and implementation services
- We specialize in custom AI solutions, automation, and digital transformation
- We help businesses integrate AI into their workflows to increase efficiency and reduce costs
- Our services include: AI strategy consulting, custom AI development, process automation, data analytics, and AI training
- We work with businesses of all sizes, from startups to enterprises
- We are based in Finland but serve clients globally

Your role:
- Answer questions about VoonIQ's services professionally and enthusiastically
- Help potential clients understand how AI can benefit their business
- Guide users to the contact form if they want to discuss specific projects
- Be warm, helpful, and knowledgeable about AI and business solutions
- Respond in the same language the user writes in (support Finnish and English)
- Keep responses concise but informative
- If you don't know something specific about VoonIQ, be honest and suggest contacting the team directly

Tone: Professional yet friendly, enthusiastic about AI and helping businesses succeed.`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        // Ask OpenAI for a streaming chat completion given the prompt
        const response = await openai.createChatCompletion({
            model: 'gpt-4o-mini',
            stream: true,
            messages: [
                {
                    role: 'system',
                    content: systemPrompt,
                },
                ...messages,
            ],
            temperature: 0.7,
            max_tokens: 500,
        });

        // Convert the response into a friendly text-stream
        const stream = OpenAIStream(response);

        // Respond with the stream
        return new StreamingTextResponse(stream);
    } catch (error) {
        console.error('Chat API error:', error);
        return new Response('Error processing chat request', { status: 500 });
    }
}
