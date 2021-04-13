import React from 'react';
import { observer } from 'mobx-react';

import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

export default observer(({ type, field, categories }) => {
    return (
        <React.Fragment>
            <InputLabel htmlFor={field.id}>{field.label}</InputLabel>
            <NativeSelect id={field.id} {...field.bind({ type })}>
                <option value={''}>Select category</option>
                {categories.data.map(c => <option key={c.id} value={c.id}>{c.type}</option>)}
            </NativeSelect>
        </React.Fragment>
    )
});