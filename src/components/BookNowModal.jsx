import { useState } from 'react';

const BookNowModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    help: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setForm({ name: '', email: '', phone: '', website: '', help: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl mx-4 relative">
        <button
          className="absolute top-4 right-3 text-gray-400 hover:text-gray-600 text-2xl font-bold focus:outline-none"
          onClick={handleClose}
          aria-label="Close modal"
        >
          ×
        </button>
        {!isSubmitted ? (
          <div className="flex flex-col md:flex-row">
            <div className="bg-[#ECD0D1] rounded-l-2xl p-8 flex flex-col justify-center md:w-1/2 w-full">
              <h2 className="text-2xl font-bold text-[#1E1E1E] mb-2">Let's Make Your Website Inclusive & Accessible</h2>
              <p className="text-[#1E1E1E] text-base">Get personalized advice from our accessibility experts</p>
            </div>
            <form className="flex-1 p-8 space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-1/2 px-3 py-2 border border-gray-400 rounded-md text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-800"
                  placeholder="Enter your full name"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-1/2 px-3 py-2 border border-gray-400 rounded-md text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-800"
                  placeholder="Enter your email id"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-1/2 px-3 py-2 border border-gray-400 rounded-md text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-800"
                  placeholder="Enter your phone number"
                />
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  className="w-1/2 px-3 py-2 border border-gray-400 rounded-md text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-800"
                  placeholder="Enter your website url (Optional)"
                />
              </div>
              <textarea
                name="help"
                value={form.help}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-400 rounded-md text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-800"
                placeholder="What do you need help with?"
                rows={4}
              />
              <div className="flex gap-4 mt-4">
                <button
                  type="button"
                  className="flex-1 border border-red-800 text-red-800 py-2 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-800"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-red-800 text-white py-2 rounded-md hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-800"
                >
                  Schedule Call
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-12 min-h-[350px]">
            <div className="mb-6">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="#22C55E"/>
                <path d="M39 22L25.75 35L17 26.8182" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-center text-black mb-2">You're All Set!</h2>
            <p className="text-center text-gray-700 mb-1">Thanks for reaching out. we've received your request.</p>
            <p className="text-center text-gray-700">An accessibility expert will contact you within 1 business day to schedule your free consultation.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookNowModal; 