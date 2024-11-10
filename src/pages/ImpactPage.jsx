import React from 'react';

function ImpactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h1>
        <p className="text-xl text-gray-600">Making a difference, one project at a time</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-4xl font-bold text-green-500 mb-2">1M+</div>
          <div className="text-xl font-semibold mb-2">Trees Planted</div>
          <p className="text-gray-600">
            Contributing to reforestation efforts worldwide and fighting climate change
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-4xl font-bold text-green-500 mb-2">50K+</div>
          <div className="text-xl font-semibold mb-2">Acres Protected</div>
          <p className="text-gray-600">
            Preserving vital habitats and biodiversity hotspots
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-4xl font-bold text-green-500 mb-2">100+</div>
          <div className="text-xl font-semibold mb-2">Communities Served</div>
          <p className="text-gray-600">
            Empowering local communities through environmental education
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Projects</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">Amazon Rainforest Initiative</h3>
              <p className="text-gray-600 mb-2">
                Planted 500,000 trees and protected 10,000 acres of rainforest
              </p>
              <span className="text-sm text-gray-500">Completed December 2023</span>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">Clean Water Project</h3>
              <p className="text-gray-600 mb-2">
                Provided clean water access to 25 communities in developing regions
              </p>
              <span className="text-sm text-gray-500">Ongoing</span>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">Wildlife Protection Program</h3>
              <p className="text-gray-600 mb-2">
                Established 5 new wildlife corridors for endangered species
              </p>
              <span className="text-sm text-gray-500">Launched January 2024</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sustainable Development Goals</h2>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Climate Action</h3>
              <p className="text-gray-600">
                Reducing carbon emissions through reforestation and sustainable practices
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Life on Land</h3>
              <p className="text-gray-600">
                Protecting biodiversity and restoring natural habitats
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Clean Water</h3>
              <p className="text-gray-600">
                Ensuring access to clean water and promoting water conservation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImpactPage;