function Cup({ guest }) {
  return <h2>tea cup for #{guest}</h2>;
}

export default function Teaset() {
    return (
        <section>
            <Cup guest={1}/>
            <Cup guest={2}/>
            <Cup guest={3}/>
        </section>
    );
}