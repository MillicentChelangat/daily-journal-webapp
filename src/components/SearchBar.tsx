import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onFilterClick: () => void;
}

export function SearchBar({ searchQuery, onSearchChange, onFilterClick }: SearchBarProps) {
  return (
    <div className="relative flex gap-3">
      <div className="relative flex-1">
        <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search your entries..."
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
        />
      </div>
      <button
        onClick={onFilterClick}
        className="px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
        title="Filter entries"
      >
        <Filter size={18} className="text-gray-500" />
      </button>
    </div>
  );
}