import { useSelector } from "react-redux";
import CompB from "../CompB";

const CompA = () => {
    const countValue = useSelector(store => store.count);

    console.log('Count Value in CompA: ', countValue)
    return (
        <div>
            <h1>CompA</h1>
            <h2>Count: {countValue}</h2>
            <CompB />
        </div>
    )
}

export default CompA;