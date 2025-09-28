import React from 'react';
import { BookOpen, Plus } from 'lucide-react';

interface EmptyStateProps {
  onNewEntry: () => void;
}

export function EmptyState({ onNewEntry }: EmptyStateProps) {
  return (
    <div className="text-center py-20">
      <div className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl w-24 h-24 mx-auto mb-8 flex items-center justify-center">
        <BookOpen size={48} className="text-indigo-600" />
      </div>
      <h3 className="text-2xl font-light text-gray-700 mb-4">Your journal awaits</h3>
      <p className="text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
        Start documenting your thoughts, experiences, and memories. Every great story begins with a single entry.
      </p>
      <button
        onClick={onNewEntry}
        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
      >
        <Plus size={20} />
        Write Your First Entry
      </button>
    </div>
  );
}