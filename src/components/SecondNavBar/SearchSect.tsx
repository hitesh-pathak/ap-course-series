import { SearchBarWithBtn } from './SearchBar';
import SearchCatButton from './SearchCatButton';

export default function SearchSect() {
  return (
    <div className="ml-6 mr-[12px] hidden w-[36rem] flex-grow md:block">
      <div className="items-center rounded border border-gray-disabled shadow-sm">
        <div className="relative">
          <div className="relative flex w-full flex-row">
            <SearchCatButton />
            <SearchBarWithBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
