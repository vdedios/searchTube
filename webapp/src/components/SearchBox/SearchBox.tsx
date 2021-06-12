import React from 'react';

import MakrwatchLogo from '../../assets/makrwatchLogo.png';
import { SearchWrapper, Logo, Form, Input, Button, MagnifyingGlass } from './SearchBox.styled';

interface SearchBoxProps {
    setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox: React.FC<SearchBoxProps> = ({ setKeyword }: SearchBoxProps) => {

    const search = (event: any) => {
        event.preventDefault();
        setKeyword(event.target.elements[0].value)
    }

    return (
        <SearchWrapper>
            <Logo src={MakrwatchLogo} />
            <Form
                onSubmit={search}
            >
                <Input
                    placeholder='Search topics on the videos you want to find'
                />
                <Button>
                    <MagnifyingGlass/>
                </Button>
            </Form>
        </SearchWrapper>
    );
}

export default SearchBox;
