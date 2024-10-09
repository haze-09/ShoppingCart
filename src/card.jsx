function addToCart(data, setCart) {
  setCart((prev) => ({
    ...prev,
    [data.id]: { title: data.title, image: data.image, qty: 1 },
  }));
}

function changeQty(value, data, setCart) {
  setCart((prev) => ({
    ...prev,
    [data.id]: { ...prev[data.id], qty: parseInt(value) },
  }));
}

function addQty(data, setCart) {
  setCart((prev) => ({
    ...prev,
    [data.id]: { ...prev[data.id], qty: prev[data.id].qty + 1 },
  }));
}

function removeQty(data, cart, setCart) {
    if (cart[data.id].qty === 1) {
      const { [data.id]: _, ...updatedCart } = cart; 
      setCart(updatedCart);
    } else {
      setCart((prev) => ({
        ...prev,
        [data.id]: { ...prev[data.id], qty: prev[data.id].qty - 1 },
      }));
    }
  }
  

export default function Card({ data, cart, setCart }) {
  return (
    <div className="grid grid-rows-4 place-items-center p-4">
      <img className="row-span-4" src={data.image} alt={data.description} />
      <div className="flex flex-col">
        <h2>{data.title}</h2>
        <p>${data.price}</p>

        {!cart[data.id] ? (
          <button
            className="mt-8 bg-blue-400"
            onClick={() => {
              addToCart(data, setCart);
            }}
          >
            Add to cart
          </button>
        ) : (
          <div>
            <button
              onClick={() => {
                removeQty(data, cart, setCart);
              }}
            >
              -
            </button>
            <input
              type="number"
              value={cart[data.id].qty}
              onChange={(e) => changeQty(e.target.value, data, setCart)}
              className="font-bold text-black"
            />
            <button
              onClick={() => {
                addQty(data, setCart);
              }}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
