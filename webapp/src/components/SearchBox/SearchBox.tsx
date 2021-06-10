import React from 'react';

interface SearchBoxProps {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox: React.FC<SearchBoxProps> = ({ setKeyword }: SearchBoxProps) => {

  const search = (event: any) => {
    event.preventDefault();
    setKeyword(event.target.elements[0].value)
  }

  return (
    <>
      <form
        onSubmit={search}
      >
        <input
          placeholder='Search topics on the videos you want to find'
        />
        <button>
          GO
        </button>
      </form>
    </>
  );
}

export default SearchBox;
