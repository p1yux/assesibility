"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/landing/CTA";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-[80%] top-14 left-[10%] h-[350px]">
        <Image
          className="rounded-3xl"
          src="/images/contact-herosection-image.png"
          alt="Map with location pins"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 top-16 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Let's Make Digital Spaces</h1>
            <h2 className="text-5xl font-bold mb-6">More Inclusive</h2>
            <div className="inline-block rounded-2xl bg-red-800 px-8 py-2">
              <button  className="text-2xl font-bold">Together</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Send Us a Message Section */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-gray-700 mb-6 text-sm">
                Book a time with Amandipp Singh, founder of Enable Canada, to discuss your accessibility needs.
              </p>

              {/* 15 Min Meeting Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">15 Min Meeting</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Let's connect for a quick 15-minute catch-up or introduction to get aligned.
                </p>
                <button
                  className="bg-red-800 text-white px-5 py-2 rounded font-medium hover:bg-red-900 transition-colors text-sm"
                  onClick={() => window.open('https://cal.com/enabledtalent/15min', '_blank')}
                >
                  Book Now
                </button>
              </div>

              {/* 30 Min Meeting Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">30 Min Meeting</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Let's connect for a relaxed 30-minute conversation and exchange ideas.
                </p>
                <button
                  className="bg-red-800 text-white px-5 py-2 rounded font-medium hover:bg-red-900 transition-colors text-sm"
                  onClick={() => window.open('https://cal.com/enabledtalent/30min', '_blank')}
                >
                  Book Now
                </button>
              </div>

              {/* Availability Section */}
              <div className="text-center mt-8">
                <h3 className="text-base font-bold text-gray-900 mb-2">Want to See All Available Times?</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Browse our full schedule and pick a time that fits.
                </p>
                <button
                  className="bg-red-800 text-white px-5 py-2 rounded font-medium hover:bg-red-900 transition-colors text-sm"
                  onClick={() => window.open('https://cal.com/enabledtalent', '_blank')}
                >
                  Check Availability
                </button>
                <p className="text-gray-500 mt-4 text-xs">
                  Can't find a suitable time? Email us for alternatives.
                </p>
              </div>
            </div>

            {/* Get in Touch Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-700 mb-6 text-sm">
                Have questions about our accessibility services or want to discuss your specific needs? Contact us directly using one of the methods below.
              </p>

              <div className="space-y-6">
                {/* Office */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-13 h-13 bg-red-50 rounded-full flex items-center justify-center">

                    <img src="/images/location.svg" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">Office</p>
                    <p className="text-gray-600 text-sm">
                      11 Peter Street,
                      9th Floor, Suite 902 <br/>
                      Toronto, ON M5V 2H
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-13 h-13 bg-red-50 rounded-full flex items-center justify-center">
                    <img src="/images/email.svg" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:contact@enablecanada.ca" className="text-gray-600 text-sm hover:underline">
                    Aman@enabledtalent.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-13 h-13 bg-red-50 rounded-full flex items-center justify-center">
                    <img src="/images/phone.svg" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:+16473351369" className="text-gray-600 text-sm hover:underline">
                      (647) 335-1369
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-13 h-13 bg-red-50 rounded-full flex items-center justify-center">
                    <img className="h-8 w-8" src="/images/whatsapp.svg" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">WhatsApp</p>
                    <a href="https://wa.me/16473351369" className="text-gray-600 text-sm hover:underline">
                      (647) 335-1369
                    </a>
                  </div>
                </div>
              </div>

              {/* Follow Us */}
              {/* <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://twitter.com"
                    className="text-gray-800 hover:text-gray-600"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="text-gray-800 hover:text-gray-600"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://wa.me/16473351369"
                    className="text-gray-800 hover:text-gray-600"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Accessibility Commitment</h2>
          <p className="text-gray-600 mb-4 max-w-3xl mx-auto">
            We're committed to providing accessible services to all our clients. If you require any accommodations when communicating with us, please let us know.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our team is trained to assist with various communication needs and preferences.
          </p>
        </div>

      </section>
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <blockquote className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <Image
              src="/images/comma.svg"
              alt="Quote"
              width={40}
              height={40}
              className="flex-shrink-0"
            />
            <p className="text-2xl sm:text-4xl font-semibold text-gray-900 leading-snug max-w-4xl">
              Accessibility is not a feature. It's a foundation.
              <br />
              When we design for inclusion, we all benefit.
            </p>
          </blockquote>
        </div>
      </section>
    </div>
  );
} 