import { PropsWithChildren, SVGProps } from "react";

export type InputProps = {
  error: string;
  value: string;
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type TextAreaInputProps = {
  value: string;
  name: string;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

export type SelectInputProps = Omit<
  InputProps,
  "value" | "onChange" | "name"
> & {
  value: string[];
  categories: string[];
  onChange: React.Dispatch<React.SetStateAction<TaskType>>;
};

export type HandleSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  task: TaskType
) => void;

export type FromProps = {
  categories: string[];
  title: string;
  defaultState?: TaskType;
  handleSubmit: HandleSubmit;
  close: () => void;
};

export type InputWrapperProps = PropsWithChildren<{
  placeholder: string;
  name: string;
  value: string | string[];
}>;

export type TaskType = {
  id: string;
  status: "Complete" | "InComplete";
  taskName: string;
  description: string;
  categories: string[];
};

export type TagProps = {
  name: string;
} & SVGProps<SVGSVGElement>;

export type DialogRef = { open: () => void; close: () => void };
