'use client';

import { FC, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Button } from './ui/button';
// import emailjs from 'emailjs-com';

interface OfficeInfo {
  title: string;
  address: string;
  phone: string;
}

const offices: OfficeInfo[] = [
  {
    title: 'Juba, South Sudan',
    address: 'Thongping, Scenius Hub Next to Winners Chapel',
    phone: '+211 929 975 708',
  },
  {
    title: 'Nairobi, Kenya',
    address: 'Shalom House, St.Daniel Comboni Road Off Ngong Road',
    phone: '+254 702 676 918',
  },
  {
    title: 'Kampala, Uganda',
    address: '',
    phone: '+256 766 959 352',
  },
  {
    title: 'Lesotho Office',
    address: '',
    phone: '+266 5680 8083',
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
    controls.start('visible');
  }

  return (
    <section className="section_container bg-gray-100" ref={ref}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded shadow-md"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1 } },
              }}
            >
              <i className="lnr lnr-home text-2xl text-primary mb-4"></i>
              <h6 className="text-xl font-bold mb-2">{office.title}</h6>
              <p className="mb-4">{office.address}</p>
              <p>
                <Link href={`tel:${office.phone}`} className="text-blue-600">{office.phone}</Link>
              </p>
              <p className="text-gray-600">Mon to Fri 9am to 6pm</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <motion.form
            ref={formRef}
            variants={listVariant}
            animate={inView ? "animate" : "initial"}
            // onSubmit={sendEmail}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.h2
              className="col-span-1 md:col-span-2 text-2xl md:text-3xl lg:text-4xl font-bold mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >Get In Touch.</motion.h2>
            <motion.div variants={listVariant} className="form-group">
              <input type="text" id="first_name" name="first_name" placeholder="Your full name*" required className="w-full p-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
            </motion.div>
            <motion.div variants={listVariant} className="form-group">
              <input type="email" id="email" name="email" placeholder="Your e-mail*" required className="w-full p-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
            </motion.div>
            <motion.div variants={listVariant} className="form-group">
              <input type="text" id="company_name_or_website_address" name="company_name_or_website_address" placeholder="Company name or website address" className="w-full p-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
            </motion.div>
            <motion.div variants={listVariant} className="form-group col-span-1 md:col-span-2">
              <textarea id="message" name="message" placeholder="Message*" required className="w-full p-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
            </motion.div>
            <div className="col-span-1 md:col-span-2 text-right">
              <Button type="submit" className="mt-4 py-4 px-8 bg-primary text-white rounded shadow-md transition-transform transform hover:scale-105">
                SUBMIT
              </Button>
              {/* {success && <span className="text-green-500 ml-4">Your message has been sent!</span>}
              {error && <span className="text-red-500 ml-4">Something went wrong!</span>} */}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
