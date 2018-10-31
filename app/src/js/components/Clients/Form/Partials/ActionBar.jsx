import React from 'react';

import Save from '../../../Common/Button';
import Clean from '../../../Common/Button';

const ActionBar = (props) => (
	<div className="center-aling">
		<div className="input-field col s6">
			<Save
				className="waves-effect waves-light blue lighten-1 btn"
				texto="Save"
				icon="send"
				classNameIcon="right"
				onClick={props.createClient}
			/>
		</div>
		<div className="input-field col s6">
			<Clean
				className="waves-effect waves-light blue lighten-1 btn"
				texto="Clear"
				icon="delete_sweep"
				classNameIcon="right"
			/>
		</div>
	</div>
);

export default ActionBar;
