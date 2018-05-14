import React from "react";
import styled from "styled-components";

import { FormGroup, Input, FormFeedback, Label } from "reactstrap";

const renderCheckbox = ({ input, meta, label, ...props }) => {
  const showError = meta.touched && meta.error;
  return (
    <FormGroup check className="custom-control custom-checkbox">
      <Input
        type="checkbox"
        {...input}
        {...props}
        className="custom-control-input"
        invalid={showError ? true : false}
      />
      <Label className="custom-control-label">{label}</Label>

      {showError && (<Error invalid={showError ? "true" : "false"}>{meta.error}</Error> )}
    </FormGroup>
  );
};

const Error = styled(FormFeedback)`
  font-size: 12px;
`;

export default renderCheckbox;
