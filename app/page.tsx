'use client';

import Banner from '@/components/Banner';
import BannerText from '@/components/BannerText';
import ImageUpload from '@/components/ImageUpload';
import Messages from '@/components/Messages';
import PromptForm from '@/components/PromptForm';
import { ThemeToggle } from '@/components/ThemeToggle';
import prepareImageFileForUpload from '@/lib/prepareImageFileForUpload';

import React, { useState } from 'react';

export type InitialMessage = {
  image: string;
  prompt: string;
};

export type Messages = {
  prompt?: string;
  image?: string;
}[];

export default function ChatPage() {
  const [messages, setMessages] = useState<Messages>([]);

  const [isGenerating, setIsGenerating] = useState(false);

  const [initialPrompt, setInitialPrompt] = useState('');

  const [error, setError] = useState('');

  function setInitialMessage(message: InitialMessage) {
    setMessages([message]);
    setInitialPrompt(message.prompt);
  }

  async function handleImageDropped(droppedImage: any) {
    const image = await prepareImageFileForUpload(droppedImage);
    setMessages((prev) => [...prev, { image }]);
  }

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    event.persist;
    const form = event.target as HTMLFormElement;
    const prompt = form.prompt.value;
    setMessages((prev) => [
      ...prev,
      {
        prompt,
      },
    ]);
    setInitialPrompt('');
    setIsGenerating(true);
    setError('');

    //api call to model
  }

  return (
    <main>
      <ThemeToggle />
      <div className='pt-12 pb-36'>
        <Banner />

        <BannerText setInitialMessage={setInitialMessage} />

        {messages.length > 0 ? null : (
          <ImageUpload handleImageDropped={handleImageDropped} />
        )}

        <Messages messages={messages} isGenerating={isGenerating} />

        <PromptForm handleSubmit={handleSubmit} initialPrompt={initialPrompt} />
        {error && (
          <p className='py-4 text-center text-red-500 font-semibold'>{error}</p>
        )}
      </div>
    </main>
  );
}
