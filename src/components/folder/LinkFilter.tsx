import SearchBar from "@/components/common/SearchBar";

interface Props {
  search: string;
  setSearch: (search: string) => void;
}
export default function LinkFilter({ search, setSearch }: Props) {
  const handleChangeSearchInput = (search: string) => {
    setSearch(search);
  };

  const handleResetSearchInput = () => {
    setSearch("");
  };

  return (
    <section className="w-full max-w-[106rem]">
      <SearchBar
        value={search}
        onChangeInput={handleChangeSearchInput}
        onResetInput={handleResetSearchInput}
      />
    </section>
  );
}
