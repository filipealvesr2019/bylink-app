import axios from "axios";

export default function subscription(){
    const handleMonthlySubscription = () =>{
        const response = axios.get(`api/routes/subscriptions`, {
            circle: "MONTHLY"
        });

    }
    return (
        <>
        <button onClick={handleMonthlySubscription}>inclição mensal</button>
        </>
    )
}