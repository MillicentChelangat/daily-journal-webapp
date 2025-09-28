import React from 'react';
import { BookOpen, Plus } from 'lucide-react';

interface HeaderProps {
  onNewEntry: () => void;
}

export function Header({ onNewEntry }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
              <BookOpen size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-light text-gray-800">Daily Journal</h1>
              <p className="text-sm text-gray-500 mt-1">Capture your thoughts and memories</p>
            </div>
          </div>
          
          <button
            onClick={onNewEntry}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Plus size={20} />
            New Entry
          </button>
        </div>
      </div>
    </header>
  );
}