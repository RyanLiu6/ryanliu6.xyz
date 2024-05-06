// Base code from: https://tailwindui.com/components/marketing/elements/flyout-menus

import { Fragment, type ReactNode } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { buttonClass } from "@/components/common/utils";

interface PopoverProps {
  text?: string,
  icon?: string,
  children: ReactNode,
}

const IconedPopover = ({ text, icon, children }: PopoverProps) => {
  const Display = () => {
    // Assumes that one of text or icon has to be defined
    if (typeof text !== "undefined") {
      return (
        <span>{text}</span>
      )
    } else  {
      return (
        <div className={buttonClass}>
          <img height="24" width="24" alt="Icon" src={`https://cdn.simpleicons.org/${icon}`} />
        </div>
      )
    }
  }

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6">
        <Display />
        { typeof text !== "undefined" &&
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        }
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
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-48 max-w-max -translate-x-1/2 px-4">
          <div className={ "w-48 max-w-md flex-auto overflow-hidden rounded-3xl text-sm leading-6 shadow-lg ring-1 bg-violet-50 dark:bg-slate-900"}>
            <div className="p-4">
              {children}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default IconedPopover;
