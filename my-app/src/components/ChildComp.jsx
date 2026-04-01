

export default function ChildComp(props) {
    return (
        <>
            <img src="https://reactjs.org/logo-og.png" alt={props.alt} width={props.width} height={props.height}/>
        </>
    );
}