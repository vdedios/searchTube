import React from 'react';

const SearchBox: React.FC = () => {
  return (
    <>
      <form
        onSubmit={() => console.log('test')}
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
