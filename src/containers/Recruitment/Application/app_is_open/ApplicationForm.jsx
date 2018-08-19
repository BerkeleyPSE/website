import React from 'react';

// components
import { ColumnContainer } from '../../../components/ContainerStyles';
import APP_FIELDS from './application_fields';
import AdditionalInfo from './AdditionalInfo';
import SubmitButton from '../../../components/inputs/SubmitButton';
import { BASE_URL } from '../../../../constants/api';
import Input from '../../../components/inputs/Input';
import TextArea from '../../../components/inputs/TextArea';
import Radio from '../../../components/inputs/Radio';

const ApplicationForm = () => {
  const renderFields = () => (
    <div className="p-1">
      {APP_FIELDS.map(f => {
        switch (f.inputType) {
          case 'input':
            return <Input key={f.name} {...f} />;
          case 'textarea':
            return <TextArea key={f.name} {...f} />;
          case 'radio':
            return <Radio key={f.name} {...f} />;
          default:
            return null;
        }
      })}
    </div>
  );

  return (
    <ColumnContainer className="m-1" ai="baseline">
      <form
        id="recruitment-application"
        action={`${BASE_URL}/applications/add`}
        method="POST"
      >
        {renderFields()}
        <AdditionalInfo />
        <SubmitButton />
      </form>
    </ColumnContainer>
  );
};

export default ApplicationForm;
