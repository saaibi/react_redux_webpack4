import React from 'react';
import { Link } from 'react-router-dom';

import Login from '../../../../Common/Button';
import Register from '../../../../Common/Button';

const ActionBar = (props) => (
	<div className="container">
		<div className="row justify-content-center">
			<Login
				className="btn btn-primary"
				texto="Ingreser"
				onClick={props.handleSubmit}
			/>
		</div>
	</div>
);

export default ActionBar;
