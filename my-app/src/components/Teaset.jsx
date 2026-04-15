function Cup({ guest }) {
  return <h2>tea cup for #{guest}</h2>;
}

export default function Teaset() {
    const cups = [];
    for (let i = 0; i < 12; i++) {
        cups.push(<Cup key={i} guest={i} />);
    }
    return (
        <>
            {cups}
        </>
    );
}