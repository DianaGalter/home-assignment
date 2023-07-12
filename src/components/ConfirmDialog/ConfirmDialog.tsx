import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';

type ConfirmDialogProps = {
    defaultValue?: string;
    onClose: () => void;
    onSave: (value: string) => void;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ defaultValue = "", onClose, onSave }) => {
    const [value, setValue] = useState(defaultValue);
    const [error, setError] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value ?? setValue(event.target.value);
        setError(false);
    };

    const onCancel = () => {
        onClose();
    };

    const handleSave = () => {
        if (value.trim() === '') {
            setError(true);
        } else {
            onSave(value);
            onClose();
        }
    };

    return (
        <Dialog open={true} onClose={onClose}>
            <DialogContent>
                <TextField
                    autoFocus
                    autoComplete='off'
                    placeholder="Some text..."
                    fullWidth
                    variant="outlined"
                    value={value}
                    onChange={handleChange}
                    error={error}
                    helperText={error ? 'Text must not be blank' : ''}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel} variant="text">Cancel</Button>
                <Button onClick={handleSave} variant="text" disabled={error}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};