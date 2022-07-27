import React, { createElement } from 'react'
import { AiOutlineWechat } from 'react-icons/ai'
import { FcWorkflow } from 'react-icons/fc'
import { SiBetfair } from 'react-icons/si'
import { useTranslation } from 'react-i18next'

const navigationOptions = [
  { name: 'menu-nav-chat', icon: AiOutlineWechat },
  { name: 'menu-nav-work', icon: FcWorkflow },
  { name: 'menu-nav-bet', icon: SiBetfair },
]

const MenuNav = () => {
  const { t } = useTranslation()

  return (
    <div className='h-[48px] bg-all-employees shadow-lg flex justify-center items-center absolute px-[15px]'>
      {navigationOptions.map((o, index, arr) => (
        <div
          key={o.name}
          className={
            index === arr.length - 1
              ? 'rounded border-[1px] border-solid border-slate-200 p-[5px] bg-white hover:bg-[#2F167D] hover:text-white cursor-pointer'
              : 'rounded border-[1px] border-solid border-slate-200 mr-[15px] p-[5px] bg-white hover:bg-[#2F167D] hover:text-white cursor-pointer'
          }
        >
          <div className='flex justify-between items-center'>
            <span className='mr-[5px]'>{t(o.name)}</span>
            {createElement(o.icon)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MenuNav
