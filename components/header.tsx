'use client'

import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          Mueen Ahmed
        </a>
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden">
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background text-foreground">
            <nav className="flex flex-col space-y-4 mt-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

