// import "./tools.css";
// import React, { useState } from "react";
// import Countdown from "react-countdown-now";

// const Tools = () => {
// 	const [hours, setHours] = useState(0);
// 	const [minutes, setMinutes] = useState(0);
// 	const [seconds, setSeconds] = useState(0);

// 	const handleHoursChange = (e) => setHours(e.target.value);
// 	const handleMinutesChange = (e) => setMinutes(e.target.value);
// 	const handleSecondsChange = (e) => setSeconds(e.target.value);

// 	const totalMilliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000;
// 	return (
// 		<section>
// 			<div>
// 				<h2>Set the Timer</h2>
// 				<label>Hours:</label>
// 				<input type="number" value={hours} onChange={handleHoursChange} />
// 				<br />
// 				<label>Minutes:</label>
// 				<input
// 					type="number"
// 					value={minutes}
// 					onChange={handleMinutesChange}
// 				/>
// 				<br />
// 				<label>Seconds:</label>
// 				<input
// 					type="number"
// 					value={seconds}
// 					onChange={handleSecondsChange}
// 				/>
// 				<br />
// 				<Countdown date={Date.now() + totalMilliseconds} />
// 			</div>
// 		</section>
// 	);
// };

// export default Tools;
import "../../components/timer/timer.css";
import Timer from "./Timer";
import Settings from "./Settings";
import { useState } from "react";
import SettingsContext from "./SettingsContext";

function Timer1() {
	const [showSettings, setShowSettings] = useState(false);
	const [workMinutes, setWorkMinutes] = useState(25);
	const [breakMinutes, setBreakMinutes] = useState(5);

	return (
		<section className="Timer">
			<SettingsContext.Provider
				value={{
					showSettings,
					setShowSettings,
					workMinutes,
					breakMinutes,
					setWorkMinutes,
					setBreakMinutes,
				}}>
				{showSettings ? <Settings /> : <Timer />}
			</SettingsContext.Provider>
		</section>
	);
}

export default Timer1;
