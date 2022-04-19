import { useEffect, useState } from 'react';

import API from '../config';
import { getToken } from '../utils';

const useWishList = () => {
  const [wishList, setWishList] = useState([]);

  const getWishListData = () => {
    fetch(`${API.carts}`, {
      headers: {
        Authorization: getToken(),
      },
    })
      .then(res => res.json())
      .then(data => {
        setWishList(data.results.map(data => data.like_id));
      });
  };

  useEffect(() => {
    getWishListData();
  }, []);

  if (wishList.length > 0) return wishList;
};

export default useWishList;
