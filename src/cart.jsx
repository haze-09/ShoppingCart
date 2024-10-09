import { useOutletContext } from "react-router-dom";

function changeQty(value, id, setCart) {
  setCart((prev) => ({
    ...prev,
    [id]: { ...prev[id], qty: parseInt(value) },
  }));
}

function addQty(id, setCart) {
  setCart((prev) => ({
    ...prev,
    [id]: { ...prev[id], qty: prev[id].qty + 1 },
  }));
}

function removeQty(id, cart, setCart) {
  if (cart[id].qty === 1) {
    const { [id]: _, ...updatedCart } = cart;
    setCart(updatedCart);
  } else {
    setCart((prev) => ({
      ...prev,
      [id]: { ...prev[id], qty: prev[id].qty - 1 },
    }));
  }
}

export default function Cart() {
  const { cart, setCart } = useOutletContext();

  return (
    <div>
      {Object.entries(cart).map(([id, item]) => (
        <div key={id} className="flex items-center">
          <img src={item.image} alt={item.title} className="w-20 h-20" />
          <div className="ml-4">
            <h2>{item.title}</h2>
            <p>${item.price}</p>
            <div className="flex items-center">
              <button
                onClick={() => {
                  removeQty(id, cart, setCart);
                }}
                className="bg-red-500 text-white"
              >
                -
              </button>
              <input
                type="number"
                value={item.qty}
                onChange={(e) => changeQty(e.target.value, id, setCart)}
                className="mx-2 font-bold text-black w-12 text-center"
              />
              <button
                onClick={() => {
                  addQty(id, setCart);
                }}
                className="bg-green-500 text-white"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
