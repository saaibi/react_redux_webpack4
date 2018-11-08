import React from 'react';

import Email from '../../../../Common/Input';
import Password from '../../../../Common/Input';

const Fields = (props) => (
	<div>
		<Email
			id="email"
			name="email"
			text="Email"
			type="email"
			placeholder="Usuario"
			classNameInput="form-control"
			onChange={props.handleChange}
		/>
		<Password
			id="password"
			name="password"
			text="Password"
			type="password"
			placeholder="Contraseña"
			classNameInput="form-control"
			onChange={props.handleChange}
		/>
	</div>
);

export default Fields;
