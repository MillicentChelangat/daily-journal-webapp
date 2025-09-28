import React, { useState, useMemo } from 'react';
import { JournalEntry } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Header } from './components/Header';
import { EntryForm } from './components/EntryForm';
import { EntryCard } from './components/EntryCard';
import { EntryView } from './components/EntryView';
import { EmptyState } from './components/EmptyState';
import { SearchBar } from './components/SearchBar';

type View = 'list' | 'form' | 'view';

function App() {
  const [entries, setEntries] = useLocalStorage<JournalEntry[]>('journal-entries', []);
  const [currentView, setCurrentView] = useState<View>('list');
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAndSortedEntries = useMemo(() => {
    let filtered = entries;
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = entries.filter(entry =>
        entry.title.toLowerCase().includes(query) ||
        entry.content.toLowerCase().includes(query)
      );
    }
    
    return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [entries, searchQuery]);

  const handleSaveEntry = (entryData: Omit<JournalEntry, 'id' | 'createdAt'>) => {
    const newEntry: JournalEntry = {
      ...entryData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setEntries(prev => [newEntry, ...prev]);
    setCurrentView('list');
  };

  const handleNewEntry = () => {
    setCurrentView('form');
  };

  const handleViewEntry = (entry: JournalEntry) => {
    setSelectedEntry(entry);
    setCurrentView('view');
  };

  const handleBackToList = () => {
    setSelectedEntry(null);
    setCurrentView('list');
  };

  const handleFilterClick = () => {
    // Placeholder for future filter functionality
    console.log('Filter clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      <Header onNewEntry={handleNewEntry} />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {currentView === 'form' && (
          <EntryForm
            onSave={handleSaveEntry}
            onCancel={handleBackToList}
          />
        )}

        {currentView === 'view' && selectedEntry && (
          <EntryView
            entry={selectedEntry}
            onBack={handleBackToList}
          />
        )}

        {currentView === 'list' && (
          <>
            {entries.length > 0 && (
              <div className="mb-8">
                <SearchBar
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  onFilterClick={handleFilterClick}
                />
              </div>
            )}
            
            {filteredAndSortedEntries.length === 0 && entries.length === 0 ? (
              <EmptyState onNewEntry={handleNewEntry} />
            ) : filteredAndSortedEntries.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No entries match your search.</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredAndSortedEntries.map(entry => (
                  <EntryCard
                    key={entry.id}
                    entry={entry}
                    onClick={handleViewEntry}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;