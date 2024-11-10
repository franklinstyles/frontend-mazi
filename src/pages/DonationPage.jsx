import { useState } from 'react';
import DonationForm from '../components/DonationForm';

function DonationPage() {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [frequency, setFrequency] = useState('monthly');

  const donationOptions = [
    { amount: 10, description: 'Plants 20 trees in affected areas' },
    { amount: 25, description: 'Protects 1 acre of rainforest' },
    { amount: 50, description: 'Funds water conservation projects' },
    { amount: 100, description: 'Supports wildlife preservation' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Protect Our Planet's Future
        </h1>
        <p className="text-lg text-gray-600">
          Your recurring donation helps us combat environmental degradation and
          preserve our planet for future generations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {donationOptions.map((option) => (
              <button
                key={option.amount}
                onClick={() => setSelectedAmount(option.amount)}
                className={`p-4 rounded-lg border-2 ${
                  selectedAmount === option.amount
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200'
                }`}
              >
                <div className="text-xl font-bold text-green-600">${option.amount}</div>
                <div className="text-sm text-gray-600">{option.description}</div>
              </button>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Donation Frequency</h3>
            <div className="flex space-x-4">
              {['Monthly', 'Quarterly', 'Yearly'].map((freq) => (
                <button
                  key={freq}
                  onClick={() => setFrequency(freq.toLowerCase())}
                  className={`px-6 py-2 rounded-full ${
                    frequency === freq.toLowerCase()
                      ? 'bg-green-500 text-white'
                      : 'border border-gray-300'
                  }`}
                >
                  {freq}
                </button>
              ))}
            </div>
          </div>

          <DonationForm amount={selectedAmount} frequency={frequency} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">
            Why Support Environmental Conservation?
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <span role="img" aria-label="bell">🔔</span>
              </div>
              <div>
                <h3 className="font-semibold">Immediate Action</h3>
                <p className="text-gray-600">
                  Your support helps us take immediate action against environmental degradation
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <span role="img" aria-label="shield">🛡️</span>
              </div>
              <div>
                <h3 className="font-semibold">Transparent Impact</h3>
                <p className="text-gray-600">
                  Track your contribution's direct impact on environmental projects
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <span role="img" aria-label="globe">🌍</span>
              </div>
              <div>
                <h3 className="font-semibold">Global Community</h3>
                <p className="text-gray-600">
                  Join thousands of environmental defenders worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationPage;