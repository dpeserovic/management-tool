import React from 'react';
import { observer } from 'mobx-react';

import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

export default observer(({ store, type, field }) => {
    return (
        <div>
            <InputLabel htmlFor={field.id}>{field.label}</InputLabel>
            <NativeSelect id={field.id} {...field.bind({ type })}>
                <option value={''}></option>
                {store.data.map(c => <option key={c.id} value={c.id}>{c.type}</option>)}
            </NativeSelect>
        </div>
    )
});