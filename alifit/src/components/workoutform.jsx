import { useState, useEffect } from "react"

export default function WorkoutForm() {
    

const todayDate = new Date().toLocaleDateString()

    // Arrays with Individual Exercise Info
    const workoutInfo = [ "Biceps","Legs","Shoulders", "Triceps", "Biceps", "Chest" ]

    const exerciseInfo = { 

        "Biceps":
        [
            "Hammer",
            "Single Dumbell",
            "EZ Bar",
            "Single Cable",
            "Double Cable"
        ],

        "Shoulders":
        [
            "Shoulder Press",
            "Arnie Press",
            "Side Raises",
            "Front Raises",
            "Double Arm Front Raise",
            "Single Arm Cable Press"
        ],

        "Chest":
        [
            "Flat Press (Dumbell)",
            "Dumbell Fly's",
            "Alternate Dumbell Press",
            "Incline Press (Dumbell)",
            "Cable Fly's",
            "Seated Fly's (Machine)"
        ],

        "Triceps":
        [
            "Single Arm Press (Dumbell)",
            "Single arm Press (Cable)",
            "Kick Backs",
            "Dips",
            "Double Arm Cable Press"
        ],

        "Legs":
        [
            "Squats",
            "Deadlifts",
            "Bulgarian Squat",
            "Calf Extensions",
            "Quad Extensions",
            "Hamstring Curls"
        ]   };

    const [exerciseArray, setExerciseArray] = useState([])
    const [date, setDate] = useState(todayDate);
    const [muscleType, setMuscleType] = useState('Biceps');
    const [exerciseType, setExerciseType] = useState('Hammer Curls');
    const [repsComplete, setRepsComplete] = useState('');
    const [setsComplete, setSetsComplete] = useState('');
    const [weightComplete, setWeightComplete] = useState('');


function HandleSubmit(e) {
        e.preventDefault();
        const newArray = [...exerciseArray]
        newArray.push({date, muscleType, exerciseType, repsComplete, setsComplete, weightComplete})
            setExerciseArray(newArray)
} ;

    return (
<>
    <div className="flex card">
        <div className="container" style={{width:"max-content", margin:"auto"}}>
            <form onSubmit={HandleSubmit}>
                <div className="form-control grid card" style={{width:"fit-content"}}>

                    <label>Input Options:</label>
                    <div className="flex" style={{justifyContent:"space-evenly, "}}>
                        <input type="date" name="date" placeholder={todayDate} value={date} required onChange={e => setDate(e.target.value)}></input>
                        <select name="MuscelType" placeholder="Type" value={muscleType} required onChange={e => setMuscleType(e.target.value)}>
                            { workoutInfo.map((opt,Index) => <option key={Index}>{opt}</option>) }
                        </select>
                        <select name="ExericselType" placeholder="Type" value={exerciseType} required onChange={e => setExerciseType(e.target.value)}>
                            { exerciseInfo[muscleType].map((opt,Index) => <option key={Index}>{opt}</option>) }
                        </select>   
                    </div>

                    <label>Exercise Info:</label>                
                    <div className="flex" style={{justifyContent:"space-evenly"}}>
                        <input type="number" placeholder="Sets" name="SetsComplete" value={setsComplete} required onChange={e => setSetsComplete(e.target.value)}></input>
                        <input type="number" placeholder="Reps" name="RepsComplete" value={repsComplete} required onChange={e => setRepsComplete(e.target.value)}></input>                
                        <input type="text" placeholder="Weight" name="WeightComplete" value={weightComplete} required onChange={e => setWeightComplete(e.target.value)}></input>
                    </div>

                    <input type="submit" value="Add Workout"className="appbtn btn-dark"/>
                </div>
            </form>
        </div>

        <div className="container" style={{width:"max-content", margin:"auto"}}>
            <div className="card flex">
                <table>
                    <thead>
                        <tr>
                           <th>Date</th>
                           <th>Muscle</th>
                           <th>Exercise</th>
                           <th>Reps</th>
                           <th>Sets</th>                           
                           <th>Weight</th>
                        </tr>                    
                    </thead>

                    <tbody>
                        { exerciseArray.map((exercise,Index) => 
                            <tr key={Index}>
                                <td>{exercise.date}</td>
                                <td>{exercise.muscleType}</td>
                                <td>{exercise.exerciseType}</td>
                                <td>{exercise.repsComplete}</td>
                                <td>{exercise.setsComplete}</td>
                                <td>{exercise.weightComplete}</td>
                            </tr>) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</>
)  };


