export default function NameCard({...userData}) {
    return (
        <div>
            <h2>사용자 정보</h2>
            <p>이름: {userData.name}</p>
            <p>나이: {userData.age}</p>
            <p>이메일: {userData.email}</p>
        </div>
    );
}