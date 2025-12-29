import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variable (secure!)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const body = await request.json();
        const { company, name, email, need, message } = body;

        // Validate required fields
        if (!company || !name || !email || !need) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Voon IQ <onboarding@resend.dev>', // You can customize this later with your domain
            to: 'info@voon.fi',
            replyTo: email, // User's email for easy reply
            subject: `New Contact Form Submission from ${company}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
                        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                        .field { margin-bottom: 20px; }
                        .label { font-weight: bold; color: #6366f1; margin-bottom: 5px; }
                        .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #6366f1; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1 style="margin: 0;">🚀 New Contact Form Submission</h1>
                            <p style="margin: 10px 0 0 0; opacity: 0.9;">Voon IQ Landing Page</p>
                        </div>
                        <div class="content">
                            <div class="field">
                                <div class="label">🏢 Company</div>
                                <div class="value">${company}</div>
                            </div>
                            <div class="field">
                                <div class="label">👤 Name</div>
                                <div class="value">${name}</div>
                            </div>
                            <div class="field">
                                <div class="label">📧 Email</div>
                                <div class="value"><a href="mailto:${email}">${email}</a></div>
                            </div>
                            <div class="field">
                                <div class="label">🎯 Need</div>
                                <div class="value">${need}</div>
                            </div>
                            ${message ? `
                            <div class="field">
                                <div class="label">💬 Message</div>
                                <div class="value">${message}</div>
                            </div>
                            ` : ''}
                            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #6b7280; font-size: 14px;">
                                <p>📅 Submitted: ${new Date().toLocaleString('fi-FI', { timeZone: 'Europe/Helsinki' })}</p>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        // Send auto-reply to customer
        await resend.emails.send({
            from: 'Voon IQ <onboarding@resend.dev>',
            to: email,
            subject: 'Kiitos yhteydenotostasi — Voon IQ',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
                        .container { max-width: 600px; margin: 0 auto; }
                        .header { background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; padding: 40px 30px; text-align: center; }
                        .logo { font-size: 32px; font-weight: bold; margin-bottom: 10px; }
                        .content { background: #ffffff; padding: 40px 30px; }
                        .greeting { font-size: 20px; color: #1f2937; margin-bottom: 20px; }
                        .message { color: #4b5563; margin-bottom: 20px; line-height: 1.8; }
                        .highlight { background: #f3f4f6; padding: 20px; border-radius: 8px; border-left: 4px solid #6366f1; margin: 30px 0; }
                        .footer { background: #f9fafb; padding: 30px; text-align: center; color: #6b7280; font-size: 14px; }
                        .button { display: inline-block; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <div class="logo">Voon IQ</div>
                            <p style="margin: 0; opacity: 0.9;">AI & Technology for Business</p>
                        </div>
                        <div class="content">
                            <div class="greeting">Hei ${name}! 👋</div>
                            <div class="message">
                                <p>Kiitos yhteydenotostasi! Olemme vastaanottaneet viestisi ja arvostamme suuresti kiinnostustasi Voon IQ:ta kohtaan.</p>
                                <p>Tiimimme käy viestisi läpi huolellisesti ja palaamme sinuun <strong>mahdollisimman pian</strong> — yleensä 1-2 arkipäivän kuluessa.</p>
                            </div>
                            <div class="highlight">
                                <strong>📋 Yhteenvetosi:</strong><br><br>
                                <strong>Yritys:</strong> ${company}<br>
                                <strong>Tarve:</strong> ${need}<br>
                                ${message ? `<strong>Viesti:</strong> ${message}<br>` : ''}
                            </div>
                            <div class="message">
                                <p>Sillä välin voit tutustua tarkemmin palveluihimme verkkosivuillamme tai ottaa yhteyttä suoraan:</p>
                                <p style="margin: 10px 0;">
                                    📧 <a href="mailto:info@voon.fi" style="color: #6366f1;">info@voon.fi</a><br>
                                    🌐 <a href="https://voon.fi" style="color: #6366f1;">voon.fi</a>
                                </p>
                            </div>
                        </div>
                        <div class="footer">
                            <p style="margin: 0 0 10px 0;"><strong>Voon IQ</strong></p>
                            <p style="margin: 0;">AI & Technology for Business</p>
                            <p style="margin: 10px 0 0 0; font-size: 12px; color: #9ca3af;">
                                Tämä on automaattinen vahvistusviesti. Älä vastaa tähän sähköpostiin.
                            </p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        return NextResponse.json(
            { success: true, messageId: data?.id },
            { status: 200 }
        );
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
