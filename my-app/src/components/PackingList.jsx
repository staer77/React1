import Items from "./Items";

export default function PackingList() {
  return (
    <section>
      <h2>Packing List</h2>
      <ul>
        <Items name="Toothbrush" />
        <Items name="Socks" isPacked={false}/>
        <Items name="Charger" isPacked={true} />
      </ul>
    </section>
  );
}