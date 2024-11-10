import React, { useState } from 'react';

function AboutPage() {
  const [showDetails, setShowDetails] = useState(false);

  const handleSupportClick = () => {
    setShowDetails(!showDetails); // Toggle the visibility of the details section
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About EcoGuard</h1>
        <p className="text-xl text-gray-600">Protecting our planet for future generations</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              EcoGuard is dedicated to preserving and protecting Earth's natural resources
              through sustainable practices, community engagement, and innovative environmental
              solutions. We believe that every individual has the power to make a difference
              in the fight against climate change.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We envision a world where environmental conservation is at the forefront of
              every decision, where communities work together to protect our natural
              resources, and where sustainable practices are the norm, not the exception.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✦</span>
                <span className="text-gray-600">Plant trees in deforested areas</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✦</span>
                <span className="text-gray-600">Protect endangered wildlife species</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✦</span>
                <span className="text-gray-600">Implement water conservation projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✦</span>
                <span className="text-gray-600">Educate communities about sustainability</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Cause</h2>
            <p className="text-gray-600 mb-4">
              Your support helps us continue our vital work in environmental conservation.
              Join us in making a difference for our planet's future.
            </p>
            <button
              onClick={handleSupportClick}
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              {showDetails ? "Hide Details" : "Support Our Mission"}
            </button>

            {showDetails && (
              <div className="mt-6 p-4 bg-green-100 rounded-md">
                <h3 className="text-xl font-semibold text-green-700">How Your Support Makes a Difference</h3>
                <p className="text-gray-700 mt-2">
                  Your contributions help us plant more trees, protect endangered species,
                  and expand our environmental education programs. Together, we can create a
                  sustainable future for generations to come. Thank you for standing with us in
                  the fight for our planet's well-being.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
