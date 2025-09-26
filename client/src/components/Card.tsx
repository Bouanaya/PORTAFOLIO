import React from 'react';

const SkillsSection = () => {
  return (
    <div className="  text-white overflow-hidden">
      {/* Background gradient overlay */}
     
      
      <div className="relative z-10 container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          
          {/* Card 1: UI Design */}
          <div className="group relative">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              
              {/* UI Design icon */}
              <div className="h-24 mb-6 flex items-center justify-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    {/* Simple design elements */}
                    <div className="space-y-1">
                      <div className="w-8 h-1 bg-white rounded"></div>
                      <div className="w-6 h-1 bg-white/70 rounded"></div>
                      <div className="w-4 h-1 bg-white/50 rounded"></div>
                    </div>
                  </div>
                  {/* Floating design elements */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Design</p>
                <h3 className="text-2xl font-bold text-white">
                  UI Design
                </h3>
                <p className="text-gray-300 text-sm">
                 Créer des interfaces utilisateur belles et intuitives
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Frontend */}
          <div className="group relative">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              
              {/* Frontend icon */}
              <div className="h-24 mb-6 flex items-center justify-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                    {/* Browser window */}
                    <div className="w-10 h-8 bg-white/10 rounded border border-white/20">
                      <div className="flex space-x-1 p-1">
                        <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="px-1 space-y-1 mt-1">
                        <div className="w-6 h-1 bg-white/30 rounded"></div>
                        <div className="w-4 h-1 bg-white/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                  {/* Code brackets */}
                  <div className="absolute -top-1 -left-1 text-blue-400 text-xs font-mono">{'<'}</div>
                  <div className="absolute -bottom-1 -right-1 text-cyan-400 text-xs font-mono">{'>'}</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm text-gray-400 uppercase tracking-wide">CLIENT SIDE</p>
                <h3 className="text-2xl font-bold text-white">
                  Frontend
                </h3>
                <p className="text-gray-300 text-sm">
                 Créer des applications web responsives avec des technologies modernes
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Backend */}
          <div className="group relative">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-green-500/50 transition-all duration-300">
              
              {/* Backend icon */}
              <div className="h-24 mb-6 flex items-center justify-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center">
                    {/* Server representation */}
                    <div className="space-y-1">
                      <div className="w-8 h-2 bg-white/20 rounded border border-white/30"></div>
                      <div className="w-8 h-2 bg-white/20 rounded border border-white/30"></div>
                      <div className="w-8 h-2 bg-white/20 rounded border border-white/30"></div>
                    </div>
                  </div>
                  {/* Data flow indicators */}
                  <div className="absolute top-2 -right-3 flex flex-col space-y-1">
                    <div className="w-2 h-0.5 bg-green-400 animate-pulse"></div>
                    <div className="w-2 h-0.5 bg-emerald-400 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>
                  <div className="absolute bottom-2 -left-3 flex flex-col space-y-1">
                    <div className="w-2 h-0.5 bg-green-400 animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="w-2 h-0.5 bg-emerald-400 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm text-gray-400 uppercase tracking-wide">SERVER SIDE</p>
                <h3 className="text-2xl font-bold text-white">
                  Backend
                </h3>
                <p className="text-gray-300 text-sm">
                 Développer des API et des applications côté serveur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;