import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';

type ConfirmDialogProps = {
    defaultValue?: string;
    onClose: () => void;
    onSave: (value: string) => void;
}

export const ConfirmDialog = ({ defaultValue = "", onClose, onSave }: ConfirmDialogProps) => {
    const [value, setValue] = useState(defaultValue);
    const [error, setError] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        setError(false);
    };

    const handleSave = () => {
        if (!value.trim()) {
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
                <Button onClick={onClose} variant="text">Cancel</Button>
                <Button onClick={handleSave} variant="text" disabled={error}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};