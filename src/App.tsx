import { useState } from 'react';
import { ConfirmDialog } from './components/ConfirmDialog/ConfirmDialog';
import { ButtonBlock } from './components/ButtonBlock/ButtonBlock';
import { Root } from './styles.css';

const App = () => {
  const [isOpen, setOpen] = useState(false);
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
      <ButtonBlock title="Blank" onClick={() => handleOpen()} />
      <ButtonBlock title="Edit" onClick={() => handleOpen('Hello!')} />
      {/** Check if opens, as on close the dialog should be destroyed  */}
      {isOpen && <ConfirmDialog onClose={handleClose} onSave={handleSave} defaultValue={defaultValue} />}
    </Root>
  );
};

export default App;