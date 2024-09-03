import React from "react"
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchItems, deleteItem } from '../store/actions';
// import { RootState } from '../store/types';

interface Item {
    _id: string
    pic: string
    name: string
    price: string
}

const Cart: React.FC = () => {
    // const dispatch = useDispatch()
    // const items = useSelector((state: RootState) => state.items)

    // useEffect(() => {
    //     dispatch(fetchItems())
    // }, [dispatch])

    // const handleDelete = (id: string) => {
    //     dispatch(deleteItem(id))
    // }

    return (
        <div className="mt-[35vh]">
            <div className="w-full min-h-[48vh] flex flex-col my-8">
                <div className="flex w-[80vw] mx-auto my-4">
                    <div className="flex-1 flex justify-center items-center">
                        Picture
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        Name
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        Price
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        Options
                    </div>
                </div>
                {/* {items.map((item: Item) => (
                    <div
                        key={item._id}
                        className="mx-auto my-4 w-[80vw] h-[15vh] border-t-2 border-b-2 border-opacity-20 flex justify-center items-center"
                    >
                        <div className="flex-1">{item.pic}</div>
                        <div className="flex-1 text-xl font-bold">
                            {item.name}
                        </div>
                        <div className="flex-1">{item.price}</div>
                        <div className="flex-1">
                            <button
                                onClick={() => handleDelete(item._id)}
                                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                            >
                                删除
                            </button>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    )
}

export default Cart
