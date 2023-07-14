import React from "react";
import { Form, Input } from "antd";
import { FormItemProps } from "antd/lib/form";
import { InputProps } from "antd/lib/input";
import { FieldInputProps, FormikTouched, FormikErrors } from "formik";
import styled from "styled-components";

export type InputFieldProps = {
  label?: string;
  field: FieldInputProps<any>;
  inputProps?: InputProps;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  disabled?: boolean;
  callbackOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFieldValue?: (field: string, value: any) => void;
  pattern?: any;
  ref?: any;
  children?: React.ReactNode;
} & Omit<FormItemProps, "children">;

const InputField: React.FC<InputFieldProps> = ({
  label,
  touched,
  error,
  field,
  inputProps,
  disabled,
  pattern,
  ref,
  setFieldValue,
  children,
  callbackOnChange,
  ...rest
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (pattern) {
      if (e.target.value === "" || pattern.test(e.target.value)) {
        setFieldValue && setFieldValue(field.name, e.target.value);
      }
    } else {
      setFieldValue && setFieldValue(field.name, e.target.value);
    }
    callbackOnChange && callbackOnChange(e);
  };

  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? "error" : ""}
      help={
        <ErrorStyle
          dangerouslySetInnerHTML={{ __html: (touched && error) as string }}
        />
      }
      {...rest}
    >
      <Input
        {...field}
        {...inputProps}
        onChange={onChange}
        disabled={disabled || false}
        ref={ref}
      />
      {children}
    </Form.Item>
  );
};

export default InputField;

const ErrorStyle = styled.div``;
