import { useState } from 'react';
import { toast } from 'react-toastify';

function NotificationForm() {
  const [email, setEmail] = useState('');
  const [frequency, setFrequency] = useState('Daily');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    toast.success(`Notification set: ${frequency} reports to ${email}`, {
      className: 'bg-green-500 text-white',
    });
    setEmail('');
    setFrequency('Daily');
  };

  return (
    <div className="glassmorphism p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
        Notification Preferences
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="frequency"
            className="block text-sm font-medium text-gray-700"
          >
            Notification Frequency
          </label>
          <select
            id="frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="mt-1 block w-full sm:w-3/4 bg-white border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mt-1 block w-full sm:w-3/4 bg-white border ${
              emailError ? 'border-red-500' : 'border-gray-300'
            } rounded-md p-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400`}
            placeholder="Enter your email"
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-transform hover:scale-105"
        >
          Save Preferences
        </button>
      </form>
    </div>
  );
}

export default NotificationForm;