import { Button } from '@/components/ui/button';
import { CameraIcon, MagicWandIcon } from '@radix-ui/react-icons';

export default function Header() {
  return (
    <header className='mx-auto max-w-2xl px-6 sm:px-8 py-8 sm:py-10 rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors'>
      <div className='flex items-center space-x-4 mb-6 sm:mb-0'>
        <CameraIcon className='h-8 w-8 text-indigo-500 dark:text-indigo-300' />
        <div>
          <h1 className='text-2xl sm:text-3xl font-extrabold tracking-tight'>
            Prompt Art
          </h1>
          <p className='text-sm sm:text-lg mt-1'>
            Turn your visions into reality with powerful tools.
          </p>
          <p className='text-sm sm:text-lg mt-1'>
            Transform your thoughts into stunning visuals.
          </p>
        </div>
      </div>
      <div className='flex space-x-4 items-center'>
        <MagicWandIcon className='h-8 w-8 text-indigo-500 dark:text-indigo-300' />
        <Button
          variant='default'
          size='sm'
          className='bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-700 dark:to-purple-700 text-white hover:from-indigo-600 hover:to-purple-600 dark:hover:from-indigo-800 dark:hover:to-purple-800 transition-colors'
        >
          Get Started
        </Button>
      </div>
    </header>
  );
}
