import React from "react";
import styled from "styled-components";
import { FormGroup, Input, FormFeedback, Label } from "reactstrap";

const renderCheckbox = ({ input, meta, label, ...props }) => {    
    const showError = meta.touched && meta.error;
    return (
        <FormGroup className="custom-control custom-checkbox">
            <Input 
                type="checkbox"
                {...input}
                {...props}
                className="custom-control-input"
                id={input.name}
                invalid={showError ? true : false}
            />
            <Label className="custom-control-label" for={input.name}>
                {label}
            </Label>
            {showError && (
                <Error invalid={showError ? "true" : "false"}>{meta.error}</Error>
            )}
        </FormGroup>
        );
};

const Error = styled(FormFeedback)`
  font-size: 11px;
`;


export default renderCheckbox;