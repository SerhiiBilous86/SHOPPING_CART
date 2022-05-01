function Shop(props) {
    return (
        <table>
            <tr>
                <th>№</th>
                <th>img</th>
                <th>name</th>
                <th>price</th>
                <th>un</th>
                <th>bay</th>
                <th>info</th>
            </tr>
            {props.children}
        </table>
    )
}

export default Shop;

export function Elem(props) {
    return (
        <tr>
            <td>{props.ord}</td>
            <td><img src={props.img} alt="image" style={{width: '32px'}}/></td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.un}</td>
            <td><button type="button">BAY</button></td>
            <td><button type="button">INFO</button></td>
        </tr>
    )
}
