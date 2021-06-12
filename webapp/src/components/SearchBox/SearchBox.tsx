import React from 'react';
import { useHistory } from 'react-router-dom';

import MakrwatchLogo from '../../assets/makrwatchLogo.png';
import { SearchWrapper, Logo, Form, Input, Button, MagnifyingGlass } from './SearchBox.styled';
import { ui } from '../../mocks';

const SearchBox: React.FC = () => {

    const history = useHistory();

    const search = (event: any) => {
        event.preventDefault();
        const keyword = event.target.elements[0].value;
        history.push(`/results/${keyword}`);
    }

    return (
        <SearchWrapper>
            <Logo src={MakrwatchLogo} />
            <Form
                onSubmit={search}
            >
                <Input
                    placeholder={ui.search.placeholder}
                />
                <Button>
                    <MagnifyingGlass/>
                </Button>
            </Form>
        </SearchWrapper>
    );
}

export default SearchBox;
