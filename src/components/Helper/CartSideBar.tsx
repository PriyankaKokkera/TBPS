import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
// import { addItem, cartItem, removeItem } from "@/app/store/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem, cartItem, removeItem } from "../../../store/cartSlice";
import cart from "../../../public/Image/cart.svg"


type Props = {
  items: cartItem[];
};
const CartSidebar = ({ items }: Props) => {
  const dispatch = useDispatch();
  const addCartHandel = (item: cartItem) => dispatch(addItem(item));
  const removeCartHandel = (id: number) => dispatch(removeItem({ id }));

return (
    <div className="mt-6 h-full mb-6">
      <h1 className="text-center font-bold text-lg mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <Image
            src={cart}
            alt="empty_cart"
            width={200}
            height={200}
            className="object-cover mx-auto"
          />
          <h1 className="mt-8 text-2xl font-semibold">Your Cart is empty</h1>
        </div>
      ) : (
        <div>
          {items?.map((item) => {
            return (
              <div
                key={item.id}
                className="pb-4 border-b-2 border-gray-300 border-opacity-60 p-4"
              >
                <div>
                  <Image
                    src={item?.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="object-cover mb-4"
                  />
                </div>
                <div>
                  <h1 className="text-sm w-4/5 font-semibold truncate">
                    {item.title}
                  </h1>
                  <h1 className="text-base text-blue-950 font-bold">
                    {item?.price * item?.quantity}
                  </h1>
                  <h1 className="text-base font-bold mb-2">{item?.quantity}</h1>
                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={() => {
                        removeCartHandel(item.id);
                      }}
                      size={"sm"}
                      variant={"destructive"}
                    >
                      Remove
                    </Button>
                    <Button
                      onClick={() => {
                        addCartHandel(item);
                      }}
                      size={"sm"}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
          <Link href="/cart">
            <SheetClose>
              <Button className="w-full mb-6 mt-6">View All Cart</Button>
            </SheetClose>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;