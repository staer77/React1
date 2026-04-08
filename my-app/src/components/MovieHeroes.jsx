const heroes = [
  '스파이더맨: 피터 파커',
    '아이언맨: 토니 스타크',
    '캡틴 아메리카: 스티브 로저스',
    '토르: 토르 오딘슨',
    '헐크: 브루스 배너'
];

export default function MovieHeroes() {
    const listHeroes = heroes.map(hero => <li>{hero}</li>);
  return (
    <section>
      <h2>Movie Heroes</h2>
        <ul>
            {listHeroes}
        </ul>
    </section>
  );
}