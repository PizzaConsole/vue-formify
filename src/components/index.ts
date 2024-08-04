import { AllowedComponentProps, Component, VNodeProps } from 'vue';

export type ComponentProps<C extends Component> = C extends new (...args: any) => any
	? Omit<InstanceType<C>['$props'], keyof VNodeProps | keyof AllowedComponentProps>
	: never;
export type FormValue = string | number | boolean | Date;
export type FormElement = Record<string, {
	value: FormValue;
	error: string | undefined;
}>

export type FormType<T = unknown> = {
	values: T;
	errors: T;
	setError: (name: string, error: any) => void;
	reset: () => void;
}

export type HTMLInputAttributeType =
| 'button'
| 'checkbox'
| 'color'
| 'date'
| 'datetime-local'
| 'email'
| 'file'
| 'hidden'
| 'image'
| 'month'
| 'number'
| 'password'
| 'radio'
| 'range'
| 'reset'
| 'search'
| 'submit'
| 'tel'
| 'text'
| 'time'
| 'url'
| 'week';
