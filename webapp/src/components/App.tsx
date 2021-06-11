import React, { useState } from 'react';

import { SearchBox, VideoList } from './index'

const App: React.FC = () => {

    const [keyword, setKeyword] = useState('');

    return (
        <div>
            { !keyword && <SearchBox setKeyword={setKeyword} />}
            { keyword && <VideoList keyword={keyword}/>}
        </div>
    );
}

export default App;
