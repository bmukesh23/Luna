import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { links } from '@/utils/links';

function LinksDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' className='flex gap-4 max-w-[100px]'>
                    <LuAlignLeft className='w-6 h-6' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-40 bg-slate-900' align='start' sideOffset={10}>
                {links.map((link) => {
                    return (
                        <DropdownMenuItem
                            key={link.href}
                            className="hover:bg-slate-800 hover:text-white"
                        >
                            <Link href={link.href} className='capitalize w-full text-white hover:text-blue-400'>
                                {link.label}
                            </Link>
                        </DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
export default LinksDropdown;