import { useState, useEffect } from 'react';
import Youtube from '../API/Youtube';

const useVideos = (defaultSearchTerm) => {
     const [videos, setVideos] = useState([]);

     useEffect(() => {
    search(defaultSearchTerm);
}, [defaultSearchTerm]);

    const search = async (search) => {
        const response = await Youtube.get('/search', {
            params: {
                q: search
            },
        });

        setVideos(response.data.items);
};

return [videos, search];
};

export default useVideos;
