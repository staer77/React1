export default function Items({name, isPacked}) {
    // return <li>{isPacked ? "✅" : "❌"} {name}</li>
    let itemContent = name;
    if (isPacked) {
        itemContent = <del>{name + "✅"}</del>;
    } 


    return (
        <li>
            {itemContent}
        </li>
    );
}