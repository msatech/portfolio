import { FC } from 'react'
import { Paragraph } from "@/components";


interface MenusProps {
  menus?: Menu[]
}

const Menus: FC<MenusProps> = ({menus}) => {
  return <div className='flex gap-6 text-white'>
    {
        menus?.map(menu => <Paragraph key={menu.name} size="sm" className='text-current cursor-pointer hover:opacity-70' >{menu.name}</Paragraph>)
    }
  </div>
}

export default Menus