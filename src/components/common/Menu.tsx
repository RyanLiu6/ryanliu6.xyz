// Base code from: https://tailwindui.com/components/marketing/elements/flyout-menus

import { Fragment, type ReactNode } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface MenuProps {
  children: ReactNode
}

const Menu = ({ children }: MenuProps) => {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6">
        <span>Menu</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className={ "w-screen max-w-md flex-auto overflow-hidden rounded-3xl text-sm leading-6 shadow-lg ring-1 bg-violet-50 dark:bg-slate-900"}>
            <div className="p-4">
              {children}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Menu;
