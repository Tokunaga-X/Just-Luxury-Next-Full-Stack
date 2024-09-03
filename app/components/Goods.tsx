import React, { useEffect, useState } from "react"
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchGoods, addItem } from '../store/actions';
// import { RootState } from '../store/types';
// import Iteminfo from './Iteminfo';

interface Good {
    _id: string
    name: string
    price: string
    pic: string
}

const Goods: React.FC = () => {
    //   const dispatch = useDispatch();
    //   const goods = useSelector((state: RootState) => state.goods);
    const [drawer, setDrawer] = useState(false)
    const [selectedGood, setSelectedGood] = useState<Good | null>(null)

    //   useEffect(() => {
    //     dispatch(fetchGoods());
    //   }, [dispatch]);

    //   const handleAddToCar = (good: Good) => {
    //     dispatch(addItem({ name: good.name, price: good.price }));
    //   };

    const openDrawer = (good: Good) => {
        setSelectedGood(good)
        setDrawer(true)
    }

    return (
        <div className="w-full h-full flex justify-center">
            <ul className="w-[92vw] mx-auto grid grid-cols-3 gap-8 auto-rows-[46vh] lg:grid-cols-2 sm:grid-cols-1">
                {/* {goods.map((good: Good) => (
          <li key={good._id} className="relative">
            <div className="w-full h-4/5 overflow-hidden cursor-pointer" onClick={() => openDrawer(good)}>
              <img src={good.pic} alt={good.name} className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-1/5 flex flex-col relative">
              <h3 className="ml-4 mt-4 w-3/5 text-2xl text-left cursor-pointer">{good.name}</h3>
              <p className="ml-4 mt-2 text-left">{good.price}</p>
              <button
                onClick={() => handleAddToCar(good)}
                className="absolute top-1/5 left-4/5 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
              >
                +
              </button>
            </div>
          </li>
        ))} */}
            </ul>
            {drawer && selectedGood && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                    <div className="absolute bottom-0 left-0 right-0 bg-white h-[90%] p-4">
                        {/* <Iteminfo good={selectedGood} onClose={() => setDrawer(false)} /> */}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Goods
