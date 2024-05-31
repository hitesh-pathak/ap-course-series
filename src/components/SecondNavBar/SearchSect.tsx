import SearchBar from './SearchBar';
import SearchCatButton from './SearchCatButton';

export default function SearchSect() {
  return (
    <div className="hidden md:block w-[36rem] flex-grow ml-6">
      <div className="items-center rounded border border-gray-disabled shadow-sm">
        <div className="relative">
          <div className="relative flex w-full flex-row">
            <SearchCatButton />
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}
