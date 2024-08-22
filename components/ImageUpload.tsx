import { UploadIcon } from '@radix-ui/react-icons';

import { useDropzone } from 'react-dropzone';

type Props = {
  handleImageDropped: (droppedImage: any) => Promise<void>;
};

export default function ImageUpload({ handleImageDropped }: Props) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles: any[]) => {
      handleImageDropped(acceptedFiles[0]);
    },
  });

  return (
    <div {...getRootProps()} className='text-center p-6 sm:p-8 rounded-md '>
      <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100'>
        Upload Your Image
      </h2>
      <p className='text-base text-gray-700 dark:text-gray-300 mb-6'>
        Choose an image file to upload and see a preview.
      </p>
      <label className='flex flex-col items-center justify-center border-gray-300 dark:border-gray-600 rounded-md p-4 cursor-pointer hover:border-gray-400 dark:hover:border-gray-500 transition-colors'>
        <UploadIcon className='h-6 w-6 text-indigo-500 dark:text-indigo-300 mb-2' />
        {isDragActive ? (
          <span className='text-gray-700 dark:text-gray-300'>
            Drop the image here..
          </span>
        ) : (
          <>
            <span className='text-gray-700 dark:text-gray-300'>
              Upload Files
            </span>
            <p className='text-gray-700 dark:text-gray-300'>
              or drag and drop{' '}
            </p>
          </>
        )}
        <input
          {...getInputProps}
          type='file'
          id='file-upload'
          name='file-upload'
          accept='image/*'
          className='sr-only'
        />
      </label>
    </div>
  );
}
