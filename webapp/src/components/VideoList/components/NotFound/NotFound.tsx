import React from 'react';

import { Wrapper, Message } from './NotFound.styled';
import { ui } from '../../../../mocks';

interface NotFoundProps {
    err?: string;
}

const NotFound: React.FC<NotFoundProps> = ({ err }: NotFoundProps) => {
    return (
        <Wrapper>
            <Message>{err ? `${ui.error.failReq} ${err}` : ui.error.notFound}</Message>
        </Wrapper>
    );
};

export default NotFound;
