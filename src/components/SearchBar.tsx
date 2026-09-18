interface SearchBarProps {
  query: string;
  onChange: (value: string) => void;
}

function SearchBar({ query, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;