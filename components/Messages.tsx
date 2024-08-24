import Message from '@/components/Message';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, RefreshCcwIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

type Message = {
  image?: string;
  prompt?: string;
};

type Props = {
  messages: Message[];
  isGenerating: boolean;
};

export default function Messages({ messages, isGenerating }: Props) {
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 1) {
      messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages.length]);

  return (
    <section className='w-max m-8 flex flex-col gap-4'>
      {messages.map((message, index) => {
        if (message.image) {
          return (
            <div key={`image-${index}`} className='flex justify-center'>
              <div className='relative'>
                <Image
                  className='rounded-lg max-h-[450px] h-full object-cover dark:shadow-lg shadow-md'
                  src={message.image}
                  alt={`Image ${index + 1}`}
                  width={512}
                  height={512}
                />
                {message.image.startsWith('https') && (
                  <div className='absolute bottom-2 right-2'>
                    <a
                      href={message.image}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button
                        size='icon'
                        className='rounded-full shadow-md dark:shadow-lg'
                      >
                        <ExternalLinkIcon />
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        }

        if (message.prompt) {
          return (
            <Message key={`prompt-${index}`} isUser>
              {message.prompt}
            </Message>
          );
        }

        return null; // Ensure a return for all conditions
      })}

      {isGenerating && (
        <Message>
          <RefreshCcwIcon className='animate-spin' />
        </Message>
      )}
      <div ref={messageEndRef} />
    </section>
  );
}
