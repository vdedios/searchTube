import React from 'react';

import { Wrapper, Message } from './NotFound.styled';
import { ui } from '../../../../mocks';

const NotFound: React.FC = () => {
    return (
        <Wrapper>
            <Message>{ui.error.notFound}</Message>
        </Wrapper>
    );
};

export default NotFound;
