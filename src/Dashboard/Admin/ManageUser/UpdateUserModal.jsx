// import PropTypes from "prop-types";
// import { Fragment, useState } from "react";
// import {
//   Dialog,
//   Listbox,
//   Transition,
//   TransitionChild,
//   DialogTitle,
//   DialogPanel,
//   ListboxOptions,
//   Checkbox,
// } from "@headlessui/react";
// import { BsCheckLg } from "react-icons/bs";
// import { AiOutlineDown } from "react-icons/ai";
// const role = ["guest", "host", "admin"];

// const UpdateUserModal = ({ setIsOpen, isOpen, modalHandler, hero }) => {
//   console.log(hero.role, "20 number line update");
//   const [selected, setSelected] = useState(hero.role);
//   return (
//     <Transition appear show={isOpen} as={Fragment}>
//       <Dialog
//         as="div"
//         className="relative z-10"
//         onClose={() => setIsOpen(false)}
//       >
//         <TransitionChild
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-black bg-opacity-25" />
//         </TransitionChild>

//         <div className="fixed inset-0 overflow-y-auto">
//           <div className="flex min-h-full items-center justify-center p-4 text-center">
//             <TransitionChild
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <DialogPanel className="w-full h-56 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                 <DialogTitle
//                   as="h3"
//                   className="text-lg font-medium text-center leading-6 text-gray-900"
//                 >
//                   Update User Role
//                 </DialogTitle>
//                 <div className="mt-4 w-full">
//                   <Listbox value={selected} onChange={setSelected}>
//                     <div className="relative mt-1">
//                       <div className="form-control">
//                         <label className="label cursor-pointer">
//                           <span className="label-text">Make an Admin</span>
//                           <input
//                             type="checkbox"
//                             defaultValue={Checkbox}
//                             className="checkbox "
//                           />
//                         </label>
//                       </div>
//                       <Transition
//                         as={Fragment}
//                         leave="transition ease-in duration-100"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                       >
//                         <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"></ListboxOptions>
//                       </Transition>
//                     </div>
//                   </Listbox>
//                 </div>
//                 <hr className="mt-16 " />

//                 <div className="flex mt-2 justify-center gap-5">
//                   <button
//                     type="button"
//                     className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
//                     onClick={() => modalHandler(selected)}
//                   >
//                     Update
//                   </button>
//                   <button
//                     type="button"
//                     className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </DialogPanel>
//             </TransitionChild>
//           </div>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// };

// UpdateUserModal.propTypes = {
//   user: PropTypes.object,
//   modalHandler: PropTypes.func,
//   setIsOpen: PropTypes.func,
//   isOpen: PropTypes.bool,
// };

// export default UpdateUserModal;
