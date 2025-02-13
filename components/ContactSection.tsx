"use client";

import { FC, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
// import emailjs from 'emailjs-com';

interface OfficeInfo {
	title: string;
	address: string;
	phone: string;
}

const offices: OfficeInfo[] = [
	{
		title: "Juba, South Sudan",
		address: "Thongping, Scenius Hub Next to Winners Chapel",
		phone: "+211 929 975 708",
	},
	{
		title: "Nairobi, Kenya",
		address: "Shalom House, St.Daniel Comboni Road Off Ngong Road",
		phone: "+254 702 676 918",
	},
	{
		title: "Kampala, Uganda",
		address: "",
		phone: "+256 766 959 352",
	},
	{
		title: "Lesotho Office",
		address: "",
		phone: "+266 5680 8083",
	},
];

const listVariant = {
	initial: {
		x: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.2,
		},
	},
};

const ContactSection: FC = () => {
	// const [success, setSuccess] = useState(false);
	// const [error, setError] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);
	const controls = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	// const sendEmail = (e: FormEvent<HTMLFormElement>) => {
	//   e.preventDefault();
	//   if (formRef.current) {
	//     emailjs
	//       .sendForm(
	//         import.meta.env.VITE_SERVICE_ID,
	//         import.meta.env.VITE_TEMPLATE_ID,
	//         formRef.current,
	//         import.meta.env.VITE_PUBLIC_KEY
	//       )
	//       .then(
	//         () => {
	//           setSuccess(true);
	//           setError(false);
	//         },
	//         (error) => {
	//           console.log(error);
	//           setError(true);
	//           setSuccess(false);
	//         }
	//       );
	//   }
	// };

	if (inView) {
		controls.start("visible");
	}

	return (
		<main>
			<section className="section_container" ref={ref}>
				<div className="mx-auto">
					<motion.div
						className="w-full h-96 mb-12"
						initial="hidden"
						animate={controls}
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0, transition: { duration: 1 } },
						}}
					>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7905831745843!2d36.751709073959624!3d-1.3005031986871387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a46a8d61f75%3A0xd55717310205d288!2sShalom%20House!5e0!3m2!1sen!2ske!4v1730897024747!5m2!1sen!2ske"
							className="w-full h-full border-0"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Shalom House map"
							aria-label="Shalom House map"
							allowFullScreen
						></iframe>
					</motion.div>
				</div>
			</section>

			<section className="section_container" ref={ref}>
				<h2 className="sub-heading !text-start mb-6">
					Connect With Us Through Our Offices
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{offices.map((office, index) => (
						<motion.div
							key={index}
							className="bg-white border border-[#94c841cc] p-8 rounded-lg shadow-md"
							initial="hidden"
							animate={controls}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0, transition: { duration: 1 } },
							}}
						>
							<Image
								className="hover:scale-110 hover:bg-[#93c74099] rounded-full p-1 transition-all duration-200"
								src="/home.svg"
								alt="home"
								width={30}
								height={30}
							/>
							<h1 className="text-xl font-bold mb-2">{office.title}</h1>
							<p className="customParagraph mb-4">{office.address}</p>
							<p>
								<Link
									href={`tel:${office.phone}`}
									className="customParagraph text-blue-600"
								>
									{office.phone}
								</Link>
							</p>
							<p className="customParagraph text-gray-600">
								Mon to Fri 9am to 6pm
							</p>
						</motion.div>
					))}
				</div>

				<div className="mt-16 max-w-4xl mx-auto px-4">
					<motion.form
						ref={formRef}
						variants={listVariant}
						animate={inView ? "animate" : "initial"}
						className="space-y-6"
					>
						<motion.h2
							className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
							transition={{ duration: 1, ease: "easeOut" }}
						>
							Get in Touch
						</motion.h2>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
							<motion.div
								variants={listVariant}
								className="form-group relative"
							>
								<input
									type="text"
									id="first_name"
									name="first_name"
									required
									placeholder=" "
									aria-label="Full Name"
									className="w-full px-4 pt-6 pb-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 peer bg-white"
								/>
								<label
									htmlFor="first_name"
									className="absolute left-4 text-gray-600 transition-all duration-300 transform -translate-y-3 scale-75 top-4 origin-[0] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
								>
									Full Name*
								</label>
							</motion.div>

							<motion.div
								variants={listVariant}
								className="form-group relative"
							>
								<input
									type="email"
									id="email"
									name="email"
									required
									placeholder=" "
									aria-label="Email Address"
									className="w-full px-4 pt-6 pb-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 peer bg-white"
								/>
								<label
									htmlFor="email"
									className="absolute left-4 text-gray-600 transition-all duration-300 transform -translate-y-3 scale-75 top-4 origin-[0] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
								>
									Email Address*
								</label>
							</motion.div>

							<motion.div
								variants={listVariant}
								className="form-group relative sm:col-span-2"
							>
								<input
									type="text"
									id="company"
									name="company"
									placeholder=" "
									aria-label="Company or Website"
									className="w-full px-4 pt-6 pb-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 peer bg-white"
								/>
								<label
									htmlFor="company"
									className="absolute left-4 text-gray-600 transition-all duration-300 transform -translate-y-3 scale-75 top-4 origin-[0] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
								>
									Company / Website
								</label>
							</motion.div>

							<motion.div
								variants={listVariant}
								className="form-group relative sm:col-span-2"
							>
								<textarea
									id="message"
									name="message"
									required
									rows={4}
									placeholder=" "
									aria-label="Message"
									className="w-full px-4 pt-6 pb-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none peer bg-white"
								></textarea>
								<label
									htmlFor="message"
									className="absolute left-4 text-gray-600 transition-all duration-300 transform -translate-y-3 scale-75 top-4 origin-[0] peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
								>
									Message*
								</label>
							</motion.div>
						</div>

						<motion.div
							variants={listVariant}
							className="flex justify-center sm:justify-end mt-8"
						>
							<Button
								type="submit"
								className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transform transition-all duration-300 hover:scale-[1.02] focus:ring-4 focus:ring-primary/30"
							>
								Send Message
							</Button>
						</motion.div>
					</motion.form>
				</div>
			</section>
		</main>
	);
};

export default ContactSection;
