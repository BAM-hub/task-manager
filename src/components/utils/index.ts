type arg = string | undefined | boolean;
type args = arg[];

export default function classNames(...args: args) {
  return args.filter((arg) => arg).join(" ");
}
