import React, { Component } from 'react';
import Form,{ withTheme } from '@rjsf/core';
import {JSONSchema7} from 'json-schema';

const theme = {
     widgets: {
    test: () => (<div>test</div>)
 } };
const uiSchema ={
    name:{
        classNames:'custom-css-class_name'        
    }
}
interface CustomSchema extends JSONSchema7{
    test?:string,
    widgets?:{
        test:string
    }
}

const CustomForm = withTheme(theme);

const schema:CustomSchema = {
    title: "Test form",
    type: "object",
    properties: {
      name: {
        type: "string"
      },
      age: {
        type: "number"
      }
    },
    widgets:{
        test:'string'
    }
}


export const Forms = () => (
    <CustomForm 
        schema={schema}
        uiSchema={uiSchema}
    />
);