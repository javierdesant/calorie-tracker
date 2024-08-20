import { FunctionComponent, useMemo } from "react";
import { Activity } from "../types";
import CalorieDisplay from "./CalorieDisplay";

interface CalorieTrackerProps {
    activities: Activity[];
}
 
const CalorieTracker: FunctionComponent<CalorieTrackerProps> = ({ activities }) => {
    
    // Contadores
    const caloriesConsumed = useMemo(() => activities.reduce((acc, activity) => activity.category === 1 ? 
       acc + activity.calories : acc, 0), [activities]);
    
    const caloriesBurned = useMemo(() => activities.reduce((acc, activity) => activity.category === 2 ? 
       acc + activity.calories : acc, 0), [activities]);
    
    return ( 
        <>
            <h2 className=" text-4xl font-black text-white text-center">Resumen de Calorias</h2>

            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <CalorieDisplay 
                    calories={caloriesConsumed}
                    text="Consumidas"
                />

                <CalorieDisplay 
                    calories={caloriesBurned}
                    text="Quemadas"
                />
            </div>
        </>
     );
}
 
export default CalorieTracker;