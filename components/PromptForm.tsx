import { Button } from '@/components/ui/button';
import { SendHorizonalIcon } from 'lucide-react';
import React from 'react';

type Props = {
  initialPrompt: string;
  handleSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => Promise<void>;
};

export default function PromptForm({ initialPrompt, handleSubmit }: Props) {
  return (
    <form
      onSubmit={handleSubmit}
      className='fixed inset-x-0 bottom-0 w-full shadow-lg'
    >
      <div className='flex max-w-md mx-auto pb-12 px-4'>
        <input
          defaultValue={initialPrompt}
          type='text'
          name='prompt'
          placeholder='Type your message...'
          className='border border-gray-300 text-lg px-4 py-2 w-full flex-grow rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none'
        />
        <Button
          type='submit'
          size='icon'
          className='ml-2 shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-300'
        >
          <SendHorizonalIcon />
        </Button>
      </div>
    </form>
  );
}
