import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { RiLoader4Fill } from 'react-icons/ri'
import { ButtonHTMLAttributes, FC } from 'react'

const buttonVariants = cva(
    'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-md transition-color focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
    {
        variants: {
            variant:{
                default: 'bg-rose-700 text-white hover:bg-rose-800 ',
                ghost: 'bg-transparent hover:text-rose-900 hover:bg-rose-200',
                outline: 'bg-transparent  text-white border-2 border-rose-600 rounded-full '

            },
            size:{
                default: 'h-10 py-2 px-4 ',
                sm: 'h-9 px-2',
                lg: 'h-11, px-8'
            },
        },
        defaultVariants:{
            variant: 'default',
            size: 'default'
        }
    },

)


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{
    isLoading?: boolean,
}


const Button: FC<ButtonProps> = ({ className, children, variant, isLoading, size, ...props }) => {
  return <button className={cn(buttonVariants({variant, size, className}))} disabled={isLoading} {...props}> 
      {isLoading ? <RiLoader4Fill className='mr-2 h-4 w-4 animate-spin' /> : null}
      {children}
   </button>
}

export default Button