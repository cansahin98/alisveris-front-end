import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  CheckIcon,
  BellIcon,
  MenuIcon,
  ShoppingBagIcon,
  XIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XIcon as XIconSolid,
  CheckCircleIcon,
} from "@heroicons/react/outline";

import shoppingChartItems from "./data/chartItems";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const Notification = ({ show, setShow }) => {
  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon
                      className="h-6 w-6 text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">
                      Successfully saved!
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Anyone with a link can now view this file.
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};

const ShoppingChartModal = ({
  chartOpen,
  setChartOpen,
  chartItems,
  setChartItems,
}) => {
  const removeChartItem = (productId) => {
    const _chartItems = chartItems.filter(
      (product) => product.id !== productId
    );
    setChartItems(_chartItems);
  };

  return (
    <Transition.Root show={chartOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={(chartOpen) => setChartOpen(chartOpen)}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-max sm:w-full sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <main className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      Shopping Cart
                    </h1>

                    <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                      <section
                        aria-labelledby="cart-heading"
                        className="lg:col-span-7"
                      >
                        <h2 id="cart-heading" className="sr-only">
                          Items in your shopping cart
                        </h2>

                        <ul
                          role="list"
                          className="border-t border-b border-gray-200 divide-y divide-gray-200"
                        >
                          {chartItems.map((product, productIdx) => (
                            <li key={product.id} className="flex py-6 sm:py-10">
                              <div className="flex-shrink-0">
                                <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}
                                  className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                                />
                              </div>

                              <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                  <div>
                                    <div className="flex justify-between">
                                      <h3 className="text-sm">
                                        <a
                                          href={product.href}
                                          className="font-medium text-gray-700 hover:text-gray-800"
                                        >
                                          {product.name}
                                        </a>
                                      </h3>
                                    </div>
                                    <div className="mt-1 flex text-sm">
                                      <p className="text-gray-500">
                                        {product.color}
                                      </p>
                                      {product.size ? (
                                        <p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">
                                          {product.size}
                                        </p>
                                      ) : null}
                                    </div>
                                    <p className="mt-1 text-sm font-medium text-gray-900">
                                      {product.price}
                                    </p>
                                  </div>

                                  <div className="mt-4 sm:mt-0 sm:pr-9">
                                    <label
                                      htmlFor={`quantity-${productIdx}`}
                                      className="sr-only"
                                    >
                                      Quantity, {product.name}
                                    </label>
                                    <select
                                      id={`quantity-${productIdx}`}
                                      name={`quantity-${productIdx}`}
                                      className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                      <option value={1}>1</option>
                                      <option value={2}>2</option>
                                      <option value={3}>3</option>
                                      <option value={4}>4</option>
                                      <option value={5}>5</option>
                                      <option value={6}>6</option>
                                      <option value={7}>7</option>
                                      <option value={8}>8</option>
                                    </select>

                                    <div className="absolute top-0 right-0">
                                      <button
                                        type="button"
                                        className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
                                        onClick={() =>
                                          removeChartItem(product.id)
                                        }
                                      >
                                        <span className="sr-only">Remove</span>
                                        <XIconSolid
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                                  {product.inStock ? (
                                    <CheckIcon
                                      className="flex-shrink-0 h-5 w-5 text-green-500"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <ClockIcon
                                      className="flex-shrink-0 h-5 w-5 text-gray-300"
                                      aria-hidden="true"
                                    />
                                  )}

                                  <span>
                                    {product.inStock
                                      ? "In stock"
                                      : `Ships in ${product.leadTime}`}
                                  </span>
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </section>

                      {/* Order summary */}
                      <section
                        aria-labelledby="summary-heading"
                        className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
                      >
                        <h2
                          id="summary-heading"
                          className="text-lg font-medium text-gray-900"
                        >
                          Order summary
                        </h2>

                        <dl className="mt-6 space-y-4">
                          <div className="flex items-center justify-between">
                            <dt className="text-sm text-gray-600">Subtotal</dt>
                            <dd className="text-sm font-medium text-gray-900">
                              $99.00
                            </dd>
                          </div>
                          <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="flex items-center text-sm text-gray-600">
                              <span>Shipping estimate</span>
                              <a
                                href="#"
                                className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">
                                  Learn more about how shipping is calculated
                                </span>
                                <QuestionMarkCircleIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </a>
                            </dt>
                            <dd className="text-sm font-medium text-gray-900">
                              $5.00
                            </dd>
                          </div>
                          <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="flex text-sm text-gray-600">
                              <span>Tax estimate</span>
                              <a
                                href="#"
                                className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">
                                  Learn more about how tax is calculated
                                </span>
                                <QuestionMarkCircleIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </a>
                            </dt>
                            <dd className="text-sm font-medium text-gray-900">
                              $8.32
                            </dd>
                          </div>
                          <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="text-base font-medium text-gray-900">
                              Order total
                            </dt>
                            <dd className="text-base font-medium text-gray-900">
                              $112.32
                            </dd>
                          </div>
                        </dl>

                        <div className="mt-6">
                          <button
                            type="submit"
                            className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                          >
                            Checkout
                          </button>
                        </div>
                      </section>
                    </form>
                  </main>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  //   onClick={() => setOpen(false)}
                >
                  Go back to dashboard
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default function Layout() {
  const [chartItems, setChartItems] = useState(shoppingChartItems);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [chartOpen, setChartOpen] = useState(false);

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white border-b border-gray-200">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center">
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                      />
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "border-indigo-500 text-gray-900"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                            "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button
                      type="button"
                      className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => setChartOpen(true)}
                    >
                      <span className="sr-only">View notifications</span>
                      <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                          : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                        "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="px-4 py-8 sm:px-0">
                <Outlet context={[chartItems, setChartItems, setShow]} />
              </div>
            </div>
          </main>
        </div>
      </div>

      <ShoppingChartModal
        chartOpen={chartOpen}
        setChartOpen={(chartOpen) => setChartOpen(chartOpen)}
        chartItems={chartItems}
        setChartItems={setChartItems}
      ></ShoppingChartModal>

      <Notification
        show={show}
        setShow={(show) => setShow(show)}
      ></Notification>
    </>
  );
}
