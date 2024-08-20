import { FunctionComponent } from "react";

interface CalorieDisplayProps {
    calories: number
    text: string
}
 
const CalorieDisplay: FunctionComponent<CalorieDisplayProps> = ({ calories, text }) => {
    return ( 
        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            <span className="font-black text-6xl">{calories}</span>
            {text}
        </p>
     );
}
 
export default CalorieDisplay;