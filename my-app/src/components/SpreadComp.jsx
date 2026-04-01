import NameCard from "./NameCard";

export default function SpreadComp() {
    const userData = {
        name: "홍길동",
        age: 30,
        email: "test@test.com"
    };
    return (
        <NameCard {...userData} />
    );
}