import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';

type ConfirmDialogProps = {
    open: boolean;
    onClose: () => void;
    onSave: () => void;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ open, onClose, onSave }) => {

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <TextField />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="text">Cancel</Button>
                <Button onClick={onSave} variant="text">Save</Button>
            </DialogActions>
        </Dialog>
    );
};