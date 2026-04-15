import heroes from "./HeroesData";

export default function MovieHeroes() {
  const filterTests = heroes.filter(hero => hero.name === "클라크 켄트");
  
  const listHeroes = filterTests.map(hero => (
    <li key={hero.id}>
      <p>{hero.name}의 배역은 {hero.casting} 입니다</p>
    </li>
  ));

  return (
    <section>
      <h2>Movie Heroes</h2>
      <ul>
        {listHeroes}
      </ul>
    </section>
  );
}