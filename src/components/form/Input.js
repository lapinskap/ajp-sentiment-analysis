import React from "react";
import styled from "styled-components";
import { FormGroup, Input, Label, FormFeedback} from "reactstrap";

const renderInput = ({ input, meta, label, ...props }) => {    
    const showError = meta.touched && meta.error;
    return (
        
        <FormGroup>
            <Label for={input.field}>{label}</Label>
            <Input 
            {...input} 
            {...props}                
            invalid={showError ? true : false}
            />
            
            {showError && (
                <Error invalid={showError ? "true" : "false"}>{meta.error}</Error>
            )}
        </FormGroup>
        );
};

const Error = styled(FormFeedback)`
  font-size: 11px;
`;

export default renderInput;