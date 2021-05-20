import React, { useContext, useEffect, useState } from "react"
import { DFContext, FilterActionTypes } from "../../store"

const DropDate = () => {
	const { state, dispatch } = useContext(DFContext)

	const changeAction = (event: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch({
			type: FilterActionTypes.dropDate,
			payload: event.target.value,
		})
	}

	return (
		<div className="my-2">
			<label className="block text-gray-700 dark:text-white text-xl font-bold font-heading mb-2">
				Drop Date
			</label>
			<small className="block text-gray-500 dark:text-white text-xs font-normal font-body mb-2">
				Choose the target expiration date you want to filter domains
				for.
			</small>
			<select
				className="w-full text-black"
				value={state.config.dropDate}
				defaultValue="today"
				onChange={changeAction}
			>
				<option value="yesterday">Yesterday</option>
				<option value="today">Today</option>
				<option value="tomorrow">Tomorrow</option>
				<option disabled>---</option>
				<option
					value="in_2_days"
					disabled={state.config.backorderService === "godaddy"}
				>
					In 2 Days
				</option>
				<option
					value="in_3_days"
					disabled={["godaddy", "namejet"].includes(
						state.config.backorderService
					)}
				>
					In 3 Days
				</option>
			</select>
		</div>
	)
}

export default DropDate