import { FloatingDock } from '@/components/ui/floating-dock';
import {
  IconBrandGithub,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconPointerQuestion,
} from '@tabler/icons-react';

const links = [
  {
    title: 'Home',
    icon: (
      <IconHome className='h-full w-full text-neutral-500 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Work Experience',
    icon: (
      <IconNewSection className='h-full w-full text-neutral-500 dark:text-neutral-300' />
    ),
    href: '#experience',
  },
  {
    title: 'Projects',
    icon: (
      <IconTerminal2 className='h-full w-full text-neutral-500 dark:text-neutral-300' />
    ),
    href: '#projects',
  },

  {
    title: 'About',
    icon: (
      <IconPointerQuestion className='h-full w-full text-neutral-500 dark:text-neutral-300' />
    ),
    href: '#about',
  },
  {
    title: 'Skills',
    icon: (
      <IconExchange className='h-full w-full text-neutral-500 dark:text-neutral-300' />
    ),
    href: '#skills',
  },

  {
    title: 'GitHub',
    icon: (
      <IconBrandGithub className='h-full w-full text-neutral-500 dark:text-neutral-300' />
    ),
    href: 'https://github.com/incmak',
  },
];
export default function BottomDock() {
  return (
    <div className='fixed bottom-2 right-1/2 translate-x-1/2 z-50'>
      <FloatingDock
        items={links}
        desktopClassName='flex'
        mobileClassName='hidden'
      />
    </div>
  );
}
