import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';

type ConfirmDialogProps = {
    open: boolean;
    defaultValue?: string;
    onClose: () => void;
    onSave: (value: string) => void;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ open, defaultValue = "", onClose, onSave }) => {
    const [value, setValue] = useState(defaultValue);
    const [error, setError] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        setError(false);
    };

    const onCancel = () => {
        onClose();
        setError(false);
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
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <TextField
                    autoFocus
                    autoComplete='off'
                    defaultValue={defaultValue}
                    label="Some text..."
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
                <Button onClick={handleSave} variant="text">Save</Button>
            </DialogActions>
        </Dialog>
    );
};