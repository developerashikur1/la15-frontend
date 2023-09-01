// const links = [
//   { name: "Open roles", href: "#" },
//   { name: "Internship program", href: "#" },
//   { name: "Our values", href: "#" },
//   { name: "Meet our leadership", href: "#" },
// ];
// const stats = [
//   { name: "Offices worldwide", value: "12" },
//   { name: "Full-time colleagues", value: "300+" },
//   { name: "Hours per week", value: "40" },
//   { name: "Paid time off", value: "Unlimited" },
// ];

// import footerBgImg from "../assets/images/footer/blog12.jpg";

// export default function Footer() {
//   return (
//     <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
//       <div
//         className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
//         aria-hidden="true"
//       >
//         <div
//           className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//           style={{
//             clipPath:
//               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//           }}
//         />
//       </div>
//       <div
//         className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
//         aria-hidden="true"
//       >
//         <div
//           className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//           style={{
//             clipPath:
//               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//           }}
//         />
//       </div>
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:mx-0">
//           <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
//             Work with us
//           </h2>
//           <p className="mt-6 text-lg leading-8 text-gray-300">
//             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
//             lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
//             fugiat aliqua.
//           </p>
//         </div>
//         <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
//           <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
//             {links.map((link) => (
//               <a key={link.name} href={link.href}>
//                 {link.name} <span aria-hidden="true">&rarr;</span>
//               </a>
//             ))}
//           </div>
//           <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
//             {stats.map((stat) => (
//               <div key={stat.name} className="flex flex-col-reverse">
//                 <dt className="text-base leading-7 text-gray-300">
//                   {stat.name}
//                 </dt>
//                 <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
//                   {stat.value}
//                 </dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
