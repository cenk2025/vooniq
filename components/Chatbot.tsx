'use client';

import { useChat } from 'ai/react';
import { useState, useRef, useEffect } from 'react';
import type { Message } from 'ai';

type Language = 'en' | 'fi';

const translations = {
    en: {
        title: 'Chat with Sofia',
        subtitle: 'Your AI Assistant',
        placeholder: 'Ask me anything about our services...',
        send: 'Send',
        typing: 'Sofia is typing...',
        greeting: 'Hi! I\'m Sofia, your VoonIQ assistant. How can I help you today?',
        close: 'Close',
        open: 'Need help?',
    },
    fi: {
        title: 'Keskustele Sofian kanssa',
        subtitle: 'Tekoälyavustajasi',
        placeholder: 'Kysy mitä tahansa palveluistamme...',
        send: 'Lähetä',
        typing: 'Sofia kirjoittaa...',
        greeting: 'Hei! Olen Sofia, VoonIQ-avustajasi. Miten voin auttaa sinua tänään?',
        close: 'Sulje',
        open: 'Tarvitsetko apua?',
    },
};

export default function Chatbot() {
    const [language, setLanguage] = useState<Language>('fi');
    const t = translations[language];
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: '/api/chat',
        initialMessages: [
            {
                id: 'greeting',
                role: 'assistant',
                content: t.greeting,
            },
        ],
    });

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Detect language from document
    useEffect(() => {
        const htmlLang = document.documentElement.lang;
        if (htmlLang === 'en' || htmlLang === 'fi') {
            setLanguage(htmlLang);
        }
    }, []);

    return (
        <>
            {/* Floating Chat Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="chatbot-button"
                    aria-label={t.open}
                >
                    <div className="chatbot-button-content">
                        <svg
                            className="chatbot-icon"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            />
                        </svg>
                        <span className="chatbot-button-text">{t.open}</span>
                    </div>
                    <div className="chatbot-pulse"></div>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="chatbot-window">
                    {/* Header */}
                    <div className="chatbot-header">
                        <div className="chatbot-header-content">
                            <div className="chatbot-avatar">
                                <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <div className="chatbot-header-text">
                                <h3>{t.title}</h3>
                                <p>{t.subtitle}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="chatbot-close"
                            aria-label={t.close}
                        >
                            <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="chatbot-messages">
                        {messages.map((message: Message) => (
                            <div
                                key={message.id}
                                className={`chatbot-message ${message.role === 'user'
                                    ? 'chatbot-message-user'
                                    : 'chatbot-message-assistant'
                                    }`}
                            >
                                <div className="chatbot-message-content">
                                    {message.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="chatbot-message chatbot-message-assistant">
                                <div className="chatbot-message-content">
                                    <div className="chatbot-typing">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSubmit} className="chatbot-input-form">
                        <input
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            placeholder={t.placeholder}
                            className="chatbot-input"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="chatbot-send"
                            aria-label={t.send}
                        >
                            <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
