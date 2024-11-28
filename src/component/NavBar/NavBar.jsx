import React from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react"; // Import Disclosure from @headlessui/react

// Navigation items
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Posts", href: "/post", current: false },
  { name: "Contact", href: "/contact", current: false },
  { name: "FrontPage", href: "/front", current: false },
];

// Utility function for conditional class names
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  return (
    <Disclosure as="nav" className="bg-blue-600">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* ... */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* ... */}
        </div>
      </div>
    </Disclosure>
  );
}

export default NavBar;
