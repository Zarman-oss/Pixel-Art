import { ImageIcon, UploadIcon } from '@radix-ui/react-icons';
import { testImages } from '@/lib/testImages';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { InitialMessage } from '@/app/page';

type Props = {
  setInitialMessage: (message: InitialMessage) => void;
};

export default function BannerText({ setInitialMessage }: Props) {
  return (
    <div className='text-center p-6 sm:p-8'>
      <h2 className='text-2xl sm:text-3xl font-bold mb-6'>
        Make Your Text Prompts into Images
      </h2>
      <p className='text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6'>
        Unleash your creativity by turning your words into stunning visuals.
      </p>
      <ul className='list-none space-y-4 text-left inline-block max-w-md mx-auto'>
        <li className='flex items-center space-x-3'>
          <ImageIcon className='h-6 w-6 text-indigo-500 dark:text-indigo-300' />
          <span className='text-gray-700 dark:text-gray-300'>
            Create images from text prompts.
          </span>
        </li>
        <li className='flex items-center space-x-3'>
          <UploadIcon className='h-6 w-6 text-indigo-500 dark:text-indigo-300' />
          <span className='text-gray-700 dark:text-gray-300'>
            Upload your own images to enhance your projects.
          </span>
        </li>
      </ul>
      <div className='mt-8'>
        <h3 className='text-xl font-semibold mb-4'>Explore Our Test Images</h3>
        <div className='flex flex-col items-center'>
          {testImages.map((testimage) => (
            <Button
              key={testimage.title}
              variant='link'
              onClick={() =>
                setInitialMessage({
                  image: testimage.image,
                  prompt: testimage.prompt,
                })
              }
            >
              <ArrowRight className='mr-2 w-4 h-4' />
              {testimage.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
