import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  isUser?: boolean;
};

export default function Message({ children, isUser = false }: Props) {
  return (
    <div className={cn(isUser && 'text-right')}>
      <div
        className={cn(
          'relative p-3 rounded-lg inline-blo ck',
          isUser
            ? 'text-right bg-blue-600 text-white ml-16'
            : 'bg-gray-200 text-black'
        )}
      >
        {children}
      </div>
    </div>
  );
}
