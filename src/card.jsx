export default function Card({ data }) {
  return (
    <div>
      <img src={data.image} alt={data.description} />
      <h2>{data.title}</h2>
      <p>${data.price}</p>
      <button>Add to cart</button>
    </div>
  );
}
