import FlagCircleRoundedIcon from '@mui/icons-material/FlagCircleRounded';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Icons imported from material UI.

export default function Stats(){

    return(
<>    
    <div className="grid grid-3 text-center my-4">
        <div>
            <FitnessCenterIcon sx={{ fontSize: 80  }}/>
            <h3>Train Hard</h3>
        </div>
        <div>
            <FlagCircleRoundedIcon sx={{ fontSize: 80  }}/>
            <h3>Set Goals</h3>
        </div>
        <div>
            <CheckCircleIcon sx={{ fontSize: 80  }}/>
            <h3>Achieve Results</h3>
        </div>
    </div>
</>

)  }


