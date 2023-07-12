import { useState } from 'react';
import { ConfirmDialog } from './components/ConfirmDialog/ConfirmDialog';
import { ButtonBlock } from './components/ButtonBlock/ButtonBlock';
import { Root } from './styles.css';

const App = () => {
  const [open, setOpen] = useState(false);
  const [defaultValue, setDefaultValue] = useState<string | undefined>(undefined);

  const handleOpen = (value?: string) => {
    setDefaultValue(value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (value: string) => {
    console.log(`Saved value is: ${value}`);
    setOpen(false);
  };

  return (
    <Root>
      <ButtonBlock title="Blank" handler={() => handleOpen()} />
      <ButtonBlock title="Edit" handler={() => handleOpen('Hello!')} />
      {/** Check if opens, as on close the dialog should be destroyed  */}
      {open && <ConfirmDialog onClose={handleClose} onSave={handleSave} defaultValue={defaultValue} />}
    </Root>
  );
};

export default App;