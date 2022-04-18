import { useEffect, useState } from 'react';

const useWishListCheck = likes_id => {
  const [wishList, setWishList] = useState([]); // likes_id로만 이루어진 배열의 형태로 만들 것

  const getWishListData = async () => {
    const res = await fetch('찜목록 얻는 api주소');
    const data = await res.json();

    setWishList(data);
  };

  useEffect(() => getWishListData(), []);

  return wishList?.includes(likes_id);
};

export default useWishListCheck;
