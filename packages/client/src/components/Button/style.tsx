import styled from 'styled-components';
import { ButtonProps } from './Button';

export const StButton = styled.button`
  background: ${(props: ButtonProps) => {
    switch (props?.disignType) {
      case 'primary':
        return props.theme?.COLOR_ELEMENT_PRIMARY;
      case 'secondary':
        return `linear-gradient(180deg, ${props.theme?.COLOR_PREVIEW_PRIMARY} 0%, rgba(255, 255, 255, 0.3) 50%, ${props.theme?.COLOR_PREVIEW_PRIMARY} 100%);`;
      case 'alternate':
        return props.theme?.COLOR_ELEMENT_ALTERNATE;
      default:
        return props.theme?.COLOR_ELEMENT_PRIMARY;
    }
  }};
  color: ${(props: ButtonProps) => {
    switch (props?.disignType) {
      case 'primary':
        return props.theme?.COLOR_TEXT_PRIMARY;
      case 'secondary':
        return props.theme?.COLOR_ELEMENT_SECONDARY;
      case 'alternate':
        return props.theme?.COLOR_TEXT_PRIMARY;
      default:
        return props.theme?.COLOR_TEXT_PRIMARY;
    }
  }};
  border: ${(props: ButtonProps) => {
    return props?.disignType === 'secondary' ? `1px solid #acb5bd` : `none`;
  }};
  border-radius: 1em;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25),
    inset 4px 4px 4px rgba(130, 128, 128, 0.25); //добавил по макету в фигме для экспереимента
  font-weight: 700;
  text-align: center;
  font-size: ${(props: ButtonProps) => {
    switch (props?.size) {
      case 'small':
        return '14px';
      case 'middle':
        return '20px';
      case 'large':
        return '28px';
    }
  }};
  line-height: ${(props: ButtonProps) => {
    switch (props?.size) {
      case 'small':
        return '20px';
      case 'middle':
        return '28px';
      case 'large':
        return '38px';
    }
  }};
  padding: ${(props: ButtonProps) => {
    switch (props?.size) {
      case 'small':
        return '5px 10px';
      case 'middle':
        return '12px 25px';
      case 'large':
        return '20px 70px';
    }
  }};
  width: ${(props: ButtonProps) => (props?.block ? '100%' : 'auto')};
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: auto;
  &&:hover {
    filter: saturate(1.3);
  }
`;

export const StButtonCloseModal = styled(StButton)`
  position: absolute;
  top: 30px;
  right: 50px;
  background-color: initial;
  border: none;
  box-shadow: none;
  border-radius: 0;
`;
