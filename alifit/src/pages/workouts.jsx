import { useState } from 'react';
import WorkoutForm from '../components/workoutform';
import WorkoutTable from '../components/workouttable';


export default function Workouts() {


    return (
        <div>
            <h1>Workout Tracker</h1>
            <WorkoutForm/>
            <WorkoutTable/>
        </div>
    );
};


